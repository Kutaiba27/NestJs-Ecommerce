/* eslint-disable prettier/prettier */

import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm'

@Entity({name:"user"})
export class User {
   @PrimaryGeneratedColumn()
   id: number;

   @Column({type: "varchar",length:32, nullable:true})
   name: string;

   @Column({type: "varchar",length:32, unique:true, nullable:true})
   email: string;

   @Column({type: "varchar",length:32, nullable:true})
   password: string;

   
   
}