/* eslint-disable prettier/prettier */
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { ProductEntity } from 'src/modules/database/entitys/product.entity';
import { DeleteResult, Repository, UpdateResult } from 'typeorm';

@Injectable()
export class ProductService {

   constructor(
      @InjectRepository(ProductEntity) private readonly ProducteRepository: Repository<ProductEntity>
   ) { }

   async addProduct(productInof): Promise<ProductEntity> {
      const product = await this.ProducteRepository.save(productInof)
      return product
   }

   async getOneProduct(id: number): Promise<ProductEntity> {
      return await this.ProducteRepository.findOne({ where: { id: id } })
   }

   async updateProduct(id: number, product): Promise<UpdateResult> {
      return await this.ProducteRepository.update({ id }, product);
   }

   async deleteProduct(id: number): Promise<DeleteResult> {
      return await this.ProducteRepository.delete({ id });
   }
}
