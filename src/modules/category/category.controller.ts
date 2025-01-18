/* eslint-disable prettier/prettier */
import { Body, Controller, Delete, Get, Param, Post, Put, ValidationPipe } from "@nestjs/common";
import { CategoryService } from './category.service';
import { CreateCategoryDto } from "./dto/category.dto";
import { CategoryEntity } from "../database/entitys/category.entity";
import { SlugPipePipe } from "src/modules/common/pipes/slug-pipe/slug-pipe.pipe";

@Controller('category')
export class CategoryController {
   constructor(
      private readonly categoryService: CategoryService
   ){}
   
   @Post()
   async addCategory(@Body(new SlugPipePipe("name"), ValidationPipe ) body:CreateCategoryDto): Promise<CategoryEntity>{
      return await this.categoryService.addCategory(body)
   }

   @Get()
   async getCategorys():Promise<CategoryEntity[]>{
      return this.categoryService.getCategorys()
   }

   @Get('/:name')
   async getCategory(@Param('name')name:string):Promise<CategoryEntity>{
      return this.categoryService.getCategoryByName(name)
   }

   @Delete()
   async deleteCategory(@Param('name')name:string){
      return this.categoryService.deleteCategory(name)
   }

   @Put()
   async updeteCategory(@Body() body:string){
      return this.categoryService.updateCategory(body)
   }
}
