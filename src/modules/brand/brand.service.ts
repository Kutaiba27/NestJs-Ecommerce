/* eslint-disable prettier/prettier */
import { Injectable } from '@nestjs/common';
import { InjectRepository, } from '@nestjs/typeorm';
import { BrandEntity } from 'src/modules/database/entitys/brand.entity';
import { DeleteResult, Repository, UpdateResult } from 'typeorm';
import { CreateBrand } from './dto/createBrand.dto';
import { UpdateBrand } from './dto/updateBrand.dto';

@Injectable()
export class BrandService {
   constructor(
      @InjectRepository(BrandEntity) private readonly BrandRepository: Repository<BrandEntity>
   ){}
   
   async addBrand(brnad: CreateBrand): Promise<BrandEntity>{
         const addBrand = await this.BrandRepository.save(brnad);
         return addBrand
   }

   async getAllBrand(){
      return this.BrandRepository.find();
   }

   async getBrand(id: number): Promise<BrandEntity>{
      return this.BrandRepository.findOne({ where: { id: id } });
   }

   async updateBrand(brnad: UpdateBrand, id: number): Promise<UpdateResult>{
      return this.BrandRepository.update({id: id}, brnad);
   }

   async deleteBrand(id: number): Promise<DeleteResult>{
      return this.BrandRepository.delete({id: id});
   }
}
