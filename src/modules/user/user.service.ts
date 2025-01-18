/* eslint-disable prettier/prettier */
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { UserEntity } from 'src/modules/database/entitys/user.entity';
import { Repository } from 'typeorm';
import { CreateUserDto } from './dto/createUser.dto';

@Injectable()
export class UserService {
   
   constructor(
      @InjectRepository(UserEntity) private readonly UserRepository: Repository<UserEntity>,
   ){}
   async findUserByEmail(email:string):Promise<UserEntity>{
      return this.UserRepository.findOne({where:{
         email: email
      }})
   }

   async createUser(userInfo: CreateUserDto){
      return this.UserRepository.create(userInfo)
   }
}
