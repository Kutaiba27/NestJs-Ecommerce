/* eslint-disable prettier/prettier */
import { IsEmail, IsString, IsStrongPassword } from 'class-validator';

export class LogInDto {
   @IsEmail()
   email: string;
   
   @IsStrongPassword()
   @IsString()
   password: string;
}