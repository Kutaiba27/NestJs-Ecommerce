/* eslint-disable prettier/prettier */
import { ArgumentMetadata, Injectable, NotFoundException, PipeTransform } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { BrandEntity } from 'src/modules/database/entitys/brand.entity';
import { Repository } from 'typeorm';

@Injectable()
export class CheckBrandPipe implements PipeTransform {
  constructor(@InjectRepository(BrandEntity) private readonly BrandRepository : Repository<BrandEntity>){}
  async transform(value: any, metadata: ArgumentMetadata) {
    if ( metadata.type === "body"){
      const brand = await this.BrandRepository.findOne({where: {id: value.brand}})
      if(brand){
        return value;
      }else{
        throw new NotFoundException("Brand not found")
      }
    }
    return value;
  }
}
