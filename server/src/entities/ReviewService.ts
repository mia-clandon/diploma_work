import {ObjectType, Field} from "type-graphql";
import {
    BaseEntity,
    Column,
    Entity,
    PrimaryGeneratedColumn,
} from "typeorm";

@ObjectType()
@Entity()
export class ReviewService extends BaseEntity {
    @Field()
    @PrimaryGeneratedColumn()
    id!: number;

    @Field()
    @Column({nullable: false})
    title!: string;

    @Field()
    @Column({nullable: false})
    description!: string;

    @Field()
    @Column({nullable: false})
    service!: string;
}
