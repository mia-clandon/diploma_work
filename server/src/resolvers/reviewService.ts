import {Arg, Field, InputType, Mutation, Query, Resolver, UseMiddleware} from "type-graphql";
import {ReviewService} from "../entities/ReviewService";
import {isAuth} from "../middleware/isAuth";

@InputType()
class ReviewServiceInput {
    @Field()
    title: string
    @Field()
    description: string
    @Field()
    service: string
}

@Resolver(ReviewService)
export class ReviewServiceResolver {
    @Query(() => [ReviewService])
    reviewServiceList(): Promise<ReviewService[]> {
        return ReviewService.find()
    }

    @Mutation(() => ReviewService)
    @UseMiddleware(isAuth)
    async createReviewService(
        @Arg("input") input: ReviewServiceInput
    ): Promise<ReviewService> {
        return ReviewService.create({
            ...input
        }).save();
    }
}