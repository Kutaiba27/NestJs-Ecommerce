/* eslint-disable prettier/prettier */
import { Column, Entity, PrimaryGeneratedColumn } from "typeorm"

@Entity('brand')
export class BrandEntity {

   @PrimaryGeneratedColumn({type: "int"})
   id: number ;

   @Column({type: "varchar", unique: true})
   name: string ;

   @Column({type: "varchar"})
   slug: string ;

   @Column({type: "varchar"})
   image: string ;
}


