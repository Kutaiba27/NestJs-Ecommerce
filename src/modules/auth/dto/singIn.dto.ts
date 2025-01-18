/* eslint-disable prettier/prettier */
import { IsEmail, IsString, IsStrongPassword } from 'class-validator';

export class SingInDto {
   @IsEmail()
   email: string;
   
   @IsStrongPassword()
   @IsString()
   password: string;
}