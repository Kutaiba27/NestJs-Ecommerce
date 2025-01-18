/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable prettier/prettier */
import {
   Body,
   Controller,
   Get,
   Post,
   ValidationPipe,
   UseInterceptors,
   UseFilters,
   Put,
   Delete,
   Param,
   UsePipes
} from '@nestjs/common';
import { FileFieldsInterceptor } from '@nestjs/platform-express';
import { memoryStorage } from 'multer';
import { ResizeImageInterceptor } from 'src/modules/common/interceptor/resize/resize.interceptor';
import { SlugPipePipe } from 'src/modules/common/pipes/slug-pipe/slug-pipe.pipe';
import { DatabaseFilter } from 'src/modules/common/filter/database/database.filter';
import { Request } from 'express';
import { ProductService } from './product.service';
import { CreateProductDTO } from './dto/createProduct.dto';
import { ProductEntity } from 'src/modules/database/entitys/product.entity';
import { UpdateProductDTO } from './dto/updateProduct.dto';
import { DeleteResult, UpdateResult } from 'typeorm';
import { CheckBrandPipe } from 'src/modules/common/pipes/check-brand/check-brand.pipe';
import { CheckCategoryPipe } from 'src/modules/common/pipes/check-category/check-category.pipe';

@UseFilters(DatabaseFilter)
@Controller('product')
export class ProductController {

   constructor(
      private readonly productService: ProductService
   ) { }

   @Post("add-product")
   @UseInterceptors(FileFieldsInterceptor(
      [
         {name:"imageCovered", maxCount: 1},
         {name: "images", maxCount: 7}
      ]
   ),
      new ResizeImageInterceptor('product')
   )
   @UsePipes(CheckBrandPipe, CheckCategoryPipe)
   async addBrand( @Body(new SlugPipePipe("title"), ValidationPipe) productInfo:CreateProductDTO,){
      return this.productService.addProduct(productInfo)
   }

   @Get("get-one-product/:id")
   async getOneProduct(@Param("id") Productid: number):Promise<ProductEntity>{
      return await this.productService.getOneProduct(Productid)
   }

   @Put("update-product/:id")
   @UseInterceptors(FileFieldsInterceptor(
      [
         {name:"imageCovered", maxCount: 1},
         {name: "images", maxCount: 7}
      ]
   ),
      new ResizeImageInterceptor('product')
   )
   async updateProduct(@Param("id") Productid: number, @Body(new SlugPipePipe("title"), ValidationPipe) productInfo:UpdateProductDTO):Promise<UpdateResult>{
      return await this.productService.updateProduct(Productid, productInfo)
   }

   @Delete('delete-product/:id')
   async deleteProduct(@Param("id") Productid: number):Promise<DeleteResult>{
      return await this.productService.deleteProduct(Productid)
   }
} 