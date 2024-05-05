/* eslint-disable prettier/prettier */
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { BrandEntity } from 'src/database/entitys/brand.entity';
import { Repository } from 'typeorm';
import { CreateBrand } from './dto/createBrand.dto';

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
}
