import {ObjectType, Field} from "type-graphql";
import {
    BaseEntity,
    Column,
    Entity, JoinTable, ManyToMany,
    PrimaryGeneratedColumn,
} from "typeorm";
import {Employer} from "./internal/employer/Employer";

@ObjectType()
@Entity()
export class BookingDateTime extends BaseEntity {
    @Field()
    @PrimaryGeneratedColumn()
    id!: number;

    @Field()
    @Column({nullable: false})
    date!: string;

    @Field()
    @Column({nullable: false})
    time!: string;

    @ManyToMany(() => Employer, employer => employer.services)
    @JoinTable()
    employers: Employer[];
}
