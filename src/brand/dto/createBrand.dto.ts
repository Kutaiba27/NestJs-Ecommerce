/* eslint-disable prettier/prettier */
import { IsOptional, IsString, Length } from 'class-validator';

export class CreateBrand {

   @Length(2,35,{message: "length must be between 2 and 35 characters"})
   @IsString({message: "brnad name must be a string"})
   name: string ;
   @IsOptional()
   slug: string ;
   // @IsString({message: "brnad image must be a string"})
   image: string ;
}