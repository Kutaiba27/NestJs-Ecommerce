/* eslint-disable prettier/prettier */
import { Module } from '@nestjs/common';
import { ProductController } from './product.controller';
import { ProductService } from './product.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ProductEntity } from 'src/modules/database/entitys/product.entity';
import { CheckBrandPipe } from 'src/modules/common/pipes/check-brand/check-brand.pipe';
import { BrandEntity } from 'src/modules/database/entitys/brand.entity';
import { CategoryEntity } from 'src/modules/database/entitys/category.entity';

@Module({
  imports:[TypeOrmModule.forFeature([ProductEntity,BrandEntity, CategoryEntity])],
  controllers: [ProductController],
  providers: [ProductService, CheckBrandPipe]
})
export class ProductModule {}
