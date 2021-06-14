import {Arg, Ctx, Field, Int, Mutation, ObjectType, Query, Resolver, UseMiddleware} from "type-graphql";
import {Employer} from "../entities/internal/employer/Employer";
import {isAuth} from "../middleware/isAuth";
import {getConnection} from "typeorm";
import {EmployerInput} from "./Inputs/EmployerInput";
import {validateRegisterEmployer} from "../utils/validateRegisterEmployer";
import argon2 from "argon2";
import {FieldError} from "./fieldError";
import {MyContext} from "../types/types";


@ObjectType()
class PaginatedEmployers {
    @Field(() => [Employer])
    employers: Employer[];
    @Field()
    hasMore: boolean;
}

@ObjectType()
class EmployerResponse {
    @Field(() => [FieldError], {nullable: true})
    errors?: FieldError[];

    @Field(() => Employer, {nullable: true})
    employer?: Employer;
}


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

    // @Mutation(() => Employer)
    // @UseMiddleware(isAuth)
    // async createEmployer(
    //     @Arg("input") input: EmployerInput,
    //     // @Arg("avatar") avatar: string,
    //     // @Ctx() {req}: MyContext
    // ): Promise<Employer> {
    //     // const avatar = await this.uploadAvatar()
    //     return Employer.create({
    //         ...input,
    //     }).save();
    // }

    @Mutation(() => EmployerResponse)
    @UseMiddleware(isAuth)
    async createEmployer(
        @Arg("options") options: EmployerInput,
    ): Promise<EmployerResponse> {
        const errors = validateRegisterEmployer(options);
        if (errors) {
            return {errors};
        }
        const hashedPassword = await argon2.hash(options.password);
        const uploadAvatar = options.avatar;
        let employer;
        try {
            const result = await getConnection()
                .createQueryBuilder()
                .insert()
                .into(Employer)
                .values({
                    firstname: options.firstname,
                    lastname: options.lastname,
                    cardDescription: options.cardDescription,
                    description: options.description,
                    position: options.position,
                    email: options.email,
                    phone: options.phone,
                    password: hashedPassword,
                    avatar: uploadAvatar,
                    city: options.city,
                    averageTime: options.averageTime,
                })
                .returning("*")
                .execute();
            console.log(result)
            employer = result.raw[0];
        } catch (err) {
            console.log(errors)
        }

        console.log(employer)
        return {employer};
    }

    @Mutation(() => EmployerResponse)
    async loginEmployer(
        @Arg("phoneOrEmail") phoneOrEmail: string,
        @Arg("password") password: string,
        @Ctx() {req}: MyContext
    ): Promise<EmployerResponse> {
        const employer = await Employer.findOne(
            phoneOrEmail.includes("@")
                ? {where: {email: phoneOrEmail}}
                : {where: {phone: phoneOrEmail}}
        );
        if (!employer) {
            return {
                errors: [
                    {
                        field: "phoneOrEmail",
                        message: "Сотрудника с такими данными не существует в системе"
                    },
                ],
            }
        }

        const valid = await argon2.verify(employer.password, password);
        if (!valid) {
            return {
                errors: [
                    {
                        field: "password",
                        message: "Неверный пароль"
                    },
                ],
            }
        }

        req.session.employerId = employer.id;

        return {
            employer,
        }

    }

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

