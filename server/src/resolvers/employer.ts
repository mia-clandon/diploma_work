import {Resolver, Query, Arg, Mutation, InputType, Field, UseMiddleware, ObjectType, Int, Ctx} from "type-graphql";
import {Employer} from "../entities/Employer";
import {isAuth} from "../middleware/isAuth";
import {getConnection} from "typeorm";

@InputType()
class EmployerInput {
    @Field()
    firstname: string
    @Field()
    lastname: string
    @Field()
    description: string
    @Field()
    position: string
    // @Field()
    // email: string
    @Field()
    avatar: string
}

@ObjectType()
class PaginatedEmployers {
    @Field(() => [Employer])
    employers: Employer[];
    @Field()
    hasMore: boolean;
}

// @ObjectType()
// class EmployerInfo {
//     @Field(() => [Employer])
//     employer: Employer[];
//     @Field()
//     avatar: string;
// }

@Resolver(Employer)
export class EmployerResolver {
    @Query(() => PaginatedEmployers)
    async employers(
        @Arg("limit", () => Int) limit: number,
        @Arg("cursor", () => String, {nullable: true}) cursor: string | null
    ): Promise<PaginatedEmployers> {
        const realLimit = Math.min(50, limit);
        const realLimitPlusOne = realLimit + 1;

        const replacements: any[] = [realLimitPlusOne];

        if (cursor) {
            replacements.push(new Date(parseInt(cursor)));
        }

        const employers = await getConnection().query(
            `
    select e.*
    from employer e
    ${cursor ? `where e."createdAt" < $2` : ""}
    order by e."createdAt" DESC
    limit $1
    `,
            replacements
        );

        return {
            employers: employers.slice(0, realLimit),
            hasMore: employers.length === realLimitPlusOne,
        };
    }

    @Query(() => [Employer])
    async employersList(): Promise<Employer[]> {
        return Employer.find();
    }

    @Query(() => Employer, {nullable: true})
    employer(@Arg("id") id: number): Promise<Employer | undefined> {
        return Employer.findOne(id)
    }

    @Mutation(() => Employer)
    @UseMiddleware(isAuth)
    async createEmployer(
        @Arg("input") input: EmployerInput,
        // @Arg("avatar") avatar: string,
        // @Ctx() {req}: MyContext
    ): Promise<Employer> {
        // const avatar = await this.uploadAvatar()
        return Employer.create({
            ...input,
        }).save();
    }
    // @Mutation(() => Employer)
    // async createEmployer(
    //     @Arg("options") options: EmployerInput,
    //     @Ctx() { req }: MyContext
    // ): Promise<Employer> {
    //     const errors = validateRegisterEmployer(options);
    //     if (errors) {
    //         return { errors };
    //     }
    //
    //     const hashedPassword = await argon2.hash(options.password);
    //     let admin;
    //     try {
    //         const result = await getConnection()
    //             .createQueryBuilder()
    //             .insert()
    //             .into(Employer)
    //             .values({
    //                 fio: options.fio,
    //                 email: options.email,
    //                 phone: options.phone,
    //                 password: hashedPassword,
    //                 city: options.city,
    //                 averageTime: options.avarageTime,
    //                 avatar: uploadAvatar,
    //                 cardDescription: options.cardDescription,
    //                 description: options.description,
    //             })
    //             .returning("*")
    //             .execute();
    //         admin = result.raw[0];
    //     } catch (err) {
    //         //|| err.detail.includes("already exists")) {
    //         // duplicate username error
    //         if (err.code === "23505") {
    //             return {
    //                 errors: [
    //                     {
    //                         field: "email",
    //                         message: "Email is already taken",
    //                     },
    //                 ],
    //             };
    //         }
    //     }
    //     req.session.employerId = employer.id;
    //
    //     return { employer };
    // }


    @Mutation(() => Employer, {nullable: true})
    @UseMiddleware(isAuth)
    async updateEmployer(
        @Arg("id") id: number,
        @Arg("input", () => String, {nullable: true}) input: EmployerInput,
    ): Promise<Employer | null> {
        const employer = await Employer.findOne(id)
        if (!employer) {
            return null;
        }
        if (typeof input !== "undefined") {
            // @ts-ignore
            await Employer.update({id}, ...input)
        }

        return employer;
    }

    @Mutation(() => Boolean)
    @UseMiddleware(isAuth)
    async deleteEmployer(
        @Arg("id")
            id: number,
    ):
        Promise<boolean> {
        await Employer.delete(id);
        return true;
    }
}

