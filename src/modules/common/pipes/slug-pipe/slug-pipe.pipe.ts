/* eslint-disable prettier/prettier */
import { ArgumentMetadata, Injectable, PipeTransform } from '@nestjs/common';
import slugify from 'slugify';

@Injectable()
export class SlugPipePipe implements PipeTransform {

  constructor(private slugName:string){}
  transform(value: any, metadata: ArgumentMetadata) {
      if(metadata.type === "body"){
        console.log(" from slug", value)

        value.slug = slugify(value[this.slugName])
        return value
      }
    return value;
  }
}
