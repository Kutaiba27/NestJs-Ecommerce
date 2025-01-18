/* eslint-disable prettier/prettier */
import { ArgumentMetadata, Injectable, NotFoundException, PipeTransform } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { CategoryEntity } from 'src/modules/database/entitys/category.entity';
import { Repository } from 'typeorm';

@Injectable()
export class CheckCategoryPipe implements PipeTransform {
  constructor(@InjectRepository(CategoryEntity) private readonly BrandRepository : Repository<CategoryEntity>){}
  async transform(value: any, metadata: ArgumentMetadata) {
    if ( metadata.type === "body"){
      const brand = await this.BrandRepository.findOne({where: {id: value.category}})
      if(brand){
        return value;
      }else{
        throw new NotFoundException("Brand not found")
      }
    }
    return value;
  }
}