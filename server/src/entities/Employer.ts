import {ObjectType, Field} from "type-graphql";
import {
  BaseEntity,
  Column,
  CreateDateColumn,
  Entity, ManyToMany,
  PrimaryGeneratedColumn,
  UpdateDateColumn
} from "typeorm";
import {Service} from "./Service";
import {BookingDateTime} from "./BookingDateTime";

@ObjectType()
@Entity()
export class Employer extends BaseEntity {
  @Field()
  @PrimaryGeneratedColumn()
  id!: number;

  @Field()
  @Column({nullable: false})
  firstname!: string;

  @Field()
  @Column({nullable: false})
  lastname!: string;

  @Field()
  @Column({nullable: false})
  description!: string;

  // @Column({nullable: false})
  // email!: string;
  //
  // @Column()
  // password!: string;


  @Field()
  @Column({nullable: false})
  position!:string


  @Field()
  @Column()
  avatar!: string;

  @ManyToMany(() => Service, service => service.title)
  services: Service[];

  @ManyToMany(() => BookingDateTime, bookingDateTime => bookingDateTime.id)
  dateTime: BookingDateTime[];

  @Field(() => String)
  @CreateDateColumn()
  createdAt: Date;

  @Field(() => String)
  @UpdateDateColumn()
  updatedAt: Date;
}

