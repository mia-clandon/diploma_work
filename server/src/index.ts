import "reflect-metadata";
import "dotenv-safe/config";
import {__prod__, COOKIE_NAME} from "./constants";
import express from "express";
import {ApolloServer} from "apollo-server-express";
import {buildSchema} from "type-graphql";
import {HelloResolver} from "./resolvers/hello";
import {PostResolver} from "./resolvers/post";
import Redis from "ioredis";
import session from "express-session";
import connectRedis from "connect-redis";
import cors from "cors";
import {createConnection} from "typeorm";
import {Post} from "./entities/Post";
import {User} from "./entities/internal/account/User";
import path from "path";
import {Updoot} from "./entities/Updoot";
import {createUserLoader} from "./utils/createUserLoader";
import {createUpdootLoader} from "./utils/createUpdootLoader";
import {Employer} from "./entities/Employer";
import {Service} from "./entities/Service";
import {EmployerResolver} from "./resolvers/employer";
import {ServiceResolver} from "./resolvers/service";
import {BookingDateTime} from "./entities/BookingDateTime";
import {BookingDateTimeResolver} from "./resolvers/bookingDateTime";
import {BookingUserResolver} from "./resolvers/bookingUser";
import {BookingUser} from "./entities/BookingUser";
import {UserResolver} from "./resolvers/internal/user";
import {ReviewService} from "./entities/ReviewService";
import {ReviewServiceResolver} from "./resolvers/reviewService";

const main = async () => {
    const conn = await createConnection({
        type: "postgres",
        url: process.env.DATABASE_URL,
        logging: true,
        synchronize: true,
        migrations: [path.join(__dirname, "./migrations/*")],
        entities: [Post, User, Updoot, Employer, Service, BookingDateTime, BookingUser, ReviewService],
    });

    console.log(conn)
    // await conn.runMigrations();

    // await Service.delete({});

    const app = express();

    const RedisStore = connectRedis(session);
    const redis = new Redis(process.env.REDIS_URL);
    app.set("trust proxy", 1);
    app.use(
        cors({
            origin: process.env.CORS_ORIGIN,
            credentials: true,
        })
    );
    app.use(
        session({
            name: COOKIE_NAME,
            store: new RedisStore({
                client: redis,
                disableTouch: true,
            }),
            cookie: {
                maxAge: 1000 * 60 * 60 * 24 * 365 * 10, // 10 years
                httpOnly: true,
                sameSite: "lax", // csrf
                secure: __prod__, // cookie only works in https
                domain: __prod__ ? ".codeponder.com" : undefined,
            },
            saveUninitialized: false,
            secret: "qowiueojwojfalksdjoqiwueo",
            resave: false,
        })
    );

    app.use("/images", express.static(path.join(__dirname, "../images")));


    const apolloServer = new ApolloServer({
        schema: await buildSchema({
            resolvers: [HelloResolver, PostResolver, UserResolver, EmployerResolver, ServiceResolver, BookingDateTimeResolver, BookingUserResolver, ReviewServiceResolver],
            validate: false,
        }),
        context: ({req, res}) => ({
            req,
            res,
            redis,
            userLoader: createUserLoader(),
            updootLoader: createUpdootLoader(),
        }),
    });

    apolloServer.applyMiddleware({
        app,
        cors: false,
    });

    app.listen(4000, () => {
        console.log("server started on localhost:4000");
    });
};

main().catch((err) => {
    console.error(err);
});
