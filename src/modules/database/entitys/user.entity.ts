/* eslint-disable prettier/prettier */

import { Role } from 'src/modules/common/types/role.type';
import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm'

@Entity({name:"user"})
export class UserEntity {
   @PrimaryGeneratedColumn()
   id: number;

   @Column({type: "varchar",length:32, nullable:true})
   name: string;

   @Column({type: "varchar",length:32, unique:true, nullable:true})
   email: string;

   @Column({type: "varchar",length:32, nullable:true})
   password: string;

   @Column({type: "timestamp", default: () => "CURRENT_TIMESTAMP"})
   passwordChangedAt: Date
   
   @Column({type: "varchar"})
   phone: string

   @Column({type: "varchar", nullable:true})
   profileImage: string

   @Column({type: "varchar"})
   resetPasswordHash: string  

   @Column({type: "timestamp"})
   resetPasswordExpiration: Date

   @Column({type: "boolean"})
   resetPasswordVerification: boolean

   @Column({type: "enum",enum: Role, default: Role.USER})
   role: Role;

   @Column({type: "boolean", default: true})
   active: boolean;





}