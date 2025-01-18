/* eslint-disable prettier/prettier */

import { IsEmail, IsString, IsStrongPassword, Length } from "class-validator";

export class CreateUserDto {

   @Length(3,20)
   @IsString()
   name:string;

   @Length(3,20)
   @IsEmail()
   email:string

   @IsStrongPassword()
   @Length(8,30)
   password:string

   
}