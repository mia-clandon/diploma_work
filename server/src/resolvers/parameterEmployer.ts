import {Arg, Mutation, Query, Resolver, UseMiddleware} from "type-graphql";
import {ParameterEmployers} from "../entities/internal/employer/ParameterEmployers";
import {isAuth} from "../middleware/isAuth";
import {ParametersEmployerInput} from "./Inputs/ParametersEmployerInput";

// // @ts-ignore
// @ObjectType()
// class ParameterEmployerResponse {
//     @Field(() => [FieldError], {nullable: true})
//     errors?: FieldError[];
//
//     @Field(() => ParameterEmployers, {nullable: true})
//     parameterEmployer?: ParameterEmployers[];
// }



@Resolver(ParameterEmployers)
export class ParameterEmployersResolver {
    @Query(() => [ParameterEmployers], {nullable: true})
    async parametersEmployer(@Arg("idEmployer") idEmployer: number): Promise<ParameterEmployers[]> {
        return ParameterEmployers.find({
            where: {
                idEmployer: idEmployer
            }
        })
    }

    @Mutation(() => ParameterEmployers)
    @UseMiddleware(isAuth)
    async createParameterEmployer(
        @Arg("options") options: ParametersEmployerInput,
    ): Promise<ParameterEmployers> {
        return ParameterEmployers.create({
            ...options,
        }).save();
    }

    // @Mutation(() => ParameterEmployerResponse)
    // @UseMiddleware(isAuth)
    // async createParameterEmployer(
    //     @Arg("options") options: ParametersEmployerInput,
    // ): Promise<ParameterEmployerResponse> {
    //     const errors = validateParametersEmployer(options);
    //     if (errors) {
    //         return {errors};
    //     }
    //     let parameterEmployer;
    //     try {
    //         const result = await getConnection()
    //             .createQueryBuilder()
    //             .insert()
    //             .into(ParameterEmployers)
    //             .values({
    //                 idEmployer: options.idEmployer,
    //                 title: options.title,
    //                 description: options.description,
    //             })
    //             .returning("*")
    //             .execute();
    //         parameterEmployer = result.raw[0];
    //     } catch (err) {
    //         console.log(errors)
    //     }
    //     return {parameterEmployer};
    // }

    @Mutation(() => ParameterEmployers, {nullable: true})
    @UseMiddleware(isAuth)
    async updateParameterEmployer(
        @Arg("id") id: number,
        @Arg("input", () => String, {nullable: true}) input: ParametersEmployerInput,
    ): Promise<ParameterEmployers | null> {
        const parameterService = await ParameterEmployers.findOne(id)
        if (!parameterService) {
            return null;
        }
        if (typeof input !== "undefined") {
            // @ts-ignore
            await ParameterEmployers.update({id}, ...input)
        }

        return parameterService;
    }

    @Mutation(() => Boolean)
    @UseMiddleware(isAuth)
    async deleteParameterEmployer(
        @Arg("id")
            id: number,
    ):
        Promise<boolean> {
        await ParameterEmployers.delete(id);
        return true;
    }
}

