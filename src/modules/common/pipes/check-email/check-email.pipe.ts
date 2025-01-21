/* eslint-disable prettier/prettier */
import { ArgumentMetadata, HttpException, Injectable, PipeTransform } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { UserEntity } from 'src/modules/database/entities/user.entity';
import { CreateUserDto } from 'src/modules/user/dto/createUser.dto';
import { Repository } from 'typeorm';

@Injectable()
export class CheckEmailPipe implements PipeTransform {
  constructor(@InjectRepository(UserEntity) private readonly UserRepo : Repository<UserEntity>){}

  async transform(value: CreateUserDto, metadata: ArgumentMetadata) {
    if(metadata.type == "body"){
      const user = await this.UserRepo.findOne({where:{email: value.email}})
      if(user){
        throw new HttpException('this email is already in use', 400)
      }
    }
    return value;
  }
}
