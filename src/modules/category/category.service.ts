/* eslint-disable prettier/prettier */
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { CategoryEntity } from 'src/modules/database/entitys/category.entity';
import { DeleteResult, Repository } from "typeorm";
import { CreateCategoryDto } from "./dto/category.dto";

@Injectable()
export class CategoryService {
   constructor(
      @InjectRepository(CategoryEntity) private readonly CategoryRepository: Repository<CategoryEntity>
   ){}

   async addCategory(body:CreateCategoryDto){
      const category:CategoryEntity = await this.CategoryRepository.save(body);
      return category
   }

   async getCategorys(): Promise<CategoryEntity[]>{
      const categois: CategoryEntity[] = await this.CategoryRepository.find();
      return categois
   }

   async getCategoryByName(name:string): Promise<CategoryEntity>{
      const category: CategoryEntity = await this.CategoryRepository.findOneBy({name: name})
      return category
}

   async updateCategory(name:string){
      const reslut = await this.CategoryRepository.update({name:name},{name:name})
      console.log(reslut)
      return reslut
   }

   async deleteCategory(name:string){
      const reslut:DeleteResult = await this.CategoryRepository.delete({name:name})
      console.log(reslut)
      return reslut
   }
}
