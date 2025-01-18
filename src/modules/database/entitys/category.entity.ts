/* eslint-disable prettier/prettier */
import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity({name: 'category'})
export class CategoryEntity {
   @PrimaryGeneratedColumn({type: "int"})
   id: number;

   @Column({type: "varchar",length:32,unique:true, nullable:true})
   name:string

   @Column({type: "varchar", nullable:true})
   slug: string
}
