import { Field, Int, ObjectType } from "@nestjs/graphql"
import { Owner } from "src/owners/entities/owner.entity"
import { Column, Entity, ManyToMany, ManyToOne, PrimaryGeneratedColumn } from "typeorm"

@Entity()
@ObjectType()
export class Pet{
    
    @PrimaryGeneratedColumn()
    @Field(()=>Int)
    id: number

    @Column()
    @Field()
    name: string

    @Column({nullable: true})
    @Field({nullable: true})
    type?: string

    @Column()
    @Field(type => Int)
    ownerId: number

    @ManyToOne(()=>Owner, owner=>owner.pets, { onDelete: 'CASCADE' })
    @Field(type => Owner)
    owner:Owner
}