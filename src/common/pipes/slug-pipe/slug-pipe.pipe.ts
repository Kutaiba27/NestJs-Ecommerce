/* eslint-disable prettier/prettier */
import { ArgumentMetadata, Injectable, PipeTransform } from '@nestjs/common';
import slugify from 'slugify';

@Injectable()
export class SlugPipePipe implements PipeTransform {
  transform(value: any, metadata: ArgumentMetadata) {
    console.log(metadata)
    console.log(value)
      if(metadata.type === "body"){
        console.log(value.name)
        value.slug = slugify(value.name)
        return value
      }
    return value;
  }
}
