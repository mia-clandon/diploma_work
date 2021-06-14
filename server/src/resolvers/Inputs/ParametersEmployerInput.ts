import {Field, InputType} from "type-graphql";
import {PrimaryGeneratedColumn} from "typeorm";

@InputType()
export class ParametersEmployerInput {
    @Field()
    @PrimaryGeneratedColumn()
    id!: number;
    @Field()
    idEmployer: number
    @Field()
    title: string
    @Field()
    description: string
}
