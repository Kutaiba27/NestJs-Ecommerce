/* eslint-disable prettier/prettier */
import { Body, Controller, Get, Post, ValidationPipe, UseInterceptors, UploadedFile } from '@nestjs/common';
import { CreateBrand } from './dto/createBrand.dto';
import { BrandEntity } from 'src/database/entitys/brand.entity';
import { BrandService } from './brand.service';
import { FileInterceptor } from '@nestjs/platform-express';
import { Express } from 'express';
import { memoryStorage } from 'multer';

@Controller('brand')
export class BrandController {

   constructor(
      private readonly BrandService: BrandService
   ){ }

   @Post("/add-brand")
   @UseInterceptors(FileInterceptor('image',{storage: memoryStorage(),}))
   async addBrand(@Body(ValidationPipe) brandInfo: CreateBrand, @UploadedFile() file: Express.Multer.File){
      console.log(file)
      console.log(brandInfo)
      // return this.BrandService.addBrand(brandInfo)
   }

   @Get('all-brand')
   async getAllBrand(){
      return this.BrandService.getAllBrand()
   }
}
