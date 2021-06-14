import {Arg, Field, Mutation, ObjectType, Query, Resolver, UseMiddleware} from "type-graphql";
import {ParameterEmployers} from "../entities/internal/employer/ParameterEmployers";
import {isAuth} from "../middleware/isAuth";
import {FieldError} from "./fieldError";
import {ParametersEmployerInput} from "./Inputs/ParametersEmployerInput";
import {getConnection} from "typeorm";
import {validateParametersEmployer} from "../utils/validateParametersEmployer";

@ObjectType()
class ParameterEmployerResponse {
    @Field(() => [FieldError], { nullable: true })
    errors?: FieldError[];

    @Field(() => ParameterEmployers, { nullable: true })
    parameterEmployer?: ParameterEmployers;
}


@Resolver(ParameterEmployers)
export class ParameterEmployersResolver {
    // @Query(() => [ParameterEmployers])
    // async employersList(): Promise<ParameterEmployers[]> {
    //     return Employer.find();
    // }

    @Query(() => [ParameterEmployers], {nullable: true})
    async parametersEmployer(@Arg("idEmployer") idEmployer: number): Promise<ParameterEmployers[]> {
        return ParameterEmployers.find({
            where: {
                idEmployer: idEmployer
            }
        })
    }
    //
    @Mutation(() => ParameterEmployerResponse)
    @UseMiddleware(isAuth)
    async createEmployer(
        @Arg("options") options: ParametersEmployerInput,
    ): Promise<ParameterEmployerResponse> {
        const errors = validateParametersEmployer(options);
        if (errors) {
            return {errors};
        }
        let parameterEmployer;
        try {
            const result = await getConnection()
                .createQueryBuilder()
                .insert()
                .into(ParameterEmployers)
                .values({
                    idEmployer: options.idEmployer,
                    title: options.title,
                    description: options.description,
                })
                .returning("*")
                .execute();
            parameterEmployer = result.raw[0];
        } catch (err) {
            console.log(errors)
        }
        return {parameterEmployer};
    }

    // @Mutation(() => Employer, {nullable: true})
    // @UseMiddleware(isAuth)
    // async updateEmployer(
    //     @Arg("id") id: number,
    //     @Arg("input", () => String, {nullable: true}) input: EmployerInput,
    // ): Promise<Employer | null> {
    //     const employer = await Employer.findOne(id)
    //     if (!employer) {
    //         return null;
    //     }
    //     if (typeof input !== "undefined") {
    //         // @ts-ignore
    //         await Employer.update({id}, ...input)
    //     }
    //
    //     return employer;
    // }
    //
    // @Mutation(() => Boolean)
    // @UseMiddleware(isAuth)
    // async deleteEmployer(
    //     @Arg("id")
    //         id: number,
    // ):
    //     Promise<boolean> {
    //     await Employer.delete(id);
    //     return true;
    // }
}

