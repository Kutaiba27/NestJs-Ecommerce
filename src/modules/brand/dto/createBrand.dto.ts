/* eslint-disable prettier/prettier */
import { IsString, Length } from 'class-validator';

export class CreateBrand {

   @Length(2, 30, { message: "The name must be between 2 and 30 characters long" })
   @IsString({ message: "The name must be a string" })
   name: string ;
   @IsString({message: "brnad slug must be a string"})
   slug: string ;
   @IsString({message: "brnad image must be a string"})
   image: string ;
}