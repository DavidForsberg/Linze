import { Field, ObjectType } from "type-graphql";
import {
  Entity,
  CreateDateColumn,
  UpdateDateColumn,
  Column,
  PrimaryGeneratedColumn,
  BaseEntity,
  OneToMany,
} from "typeorm";
import { Post } from "./Post";
import { Updoot } from "./Updoot";

export enum Gender {
  male = "MALE",
  female = "FEMALE",
  other = "OTHER",
}

@ObjectType()
@Entity()
export class User extends BaseEntity {
  @Field()
  @PrimaryGeneratedColumn()
  id!: number;

  @Field(() => String)
  @Column({ unique: true })
  username!: string;

  @Field(() => String)
  @Column({ unique: true })
  email!: string;

  @Column()
  password!: string;

  @OneToMany(() => Post, (post) => post.creator)
  posts: Post[];

  @OneToMany(() => Updoot, (updoot) => updoot.user)
  updoots: Updoot[];

  @Field({ nullable: true })
  @Column({ nullable: true })
  gender: Gender;

  @Field(() => String, { nullable: true })
  @Column({ nullable: true })
  age: Date;

  @Field({ nullable: true })
  @Column({ nullable: true, length: 2 })
  country: string;

  @Field(() => String)
  @CreateDateColumn()
  created_at: Date;

  @Field(() => String)
  @UpdateDateColumn()
  updated_at: Date;
}
