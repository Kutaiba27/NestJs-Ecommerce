/* eslint-disable prettier/prettier */

import { IsArray, IsNotEmpty, IsNumber, IsOptional, IsString } from "class-validator";

export class CreateProductDTO {
   @IsString()
   @IsNotEmpty()
   title: string;

   @IsString()
   @IsNotEmpty()
   description:string

   @IsString()
   slug: string;

   @IsString()
   @IsNotEmpty()
   category: number;

   @IsString()
   @IsNotEmpty()
   brand: number;

   @IsArray()
   @IsNotEmpty()
   @IsOptional()
   colors: string[];

   @IsString()
   @IsNotEmpty()
   imageCovered: string;

   @IsNumber()
   @IsNotEmpty()
   @IsOptional()
   priceAfterDiscount: number;

   @IsArray()
   @IsNotEmpty()
   images: string[];

}