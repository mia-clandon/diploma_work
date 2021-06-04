import {ObjectType, Field} from "type-graphql";
import {
    BaseEntity,
    Column,
    Entity,
    PrimaryGeneratedColumn,
} from "typeorm";

@ObjectType()
@Entity()
export class BookingUser extends BaseEntity {
    @Field()
    @PrimaryGeneratedColumn()
    id!: number;

    @Field()
    @Column({nullable: false})
    employer!: string;

    @Field()
    @Column({nullable: false})
    service!: string;

    @Field()
    @Column({nullable: false})
    date!: string

    @Field()
    @Column({nullable: false})
    time!: string

    @Field()
    @Column({nullable: false})
    fio!: string

    @Field()
    @Column({nullable: false})
    contact!: string
}