import {ObjectType, Field} from "type-graphql";
import {
    BaseEntity,
    Column,
    CreateDateColumn,
    Entity, JoinTable, ManyToMany,
    PrimaryGeneratedColumn,
    UpdateDateColumn
} from "typeorm";
import {Employer} from "./Employer";

@ObjectType()
@Entity()
export class Service extends BaseEntity {
    @Field()
    @PrimaryGeneratedColumn()
    id!: number;

    @Field()
    @Column({nullable: false})
    title!: string;

    @Field()
    @Column({nullable: true})
    category!: string;

    @Field()
    @Column({nullable: false})
    description!: string;

    @Field()
    @Column({nullable: false})
    price!:string;

    // @Field()
    // @Column({nullable: true})
    // image!:string;

    @ManyToMany(() => Employer, employer => employer.services)
    @JoinTable()
    employers: Employer[];
    // @Column()
    // creatorId!: number;

    @Field(() => String)
    @CreateDateColumn()
    createdAt: Date;

    @Field(() => String)
    @UpdateDateColumn()
    updatedAt: Date;
}
