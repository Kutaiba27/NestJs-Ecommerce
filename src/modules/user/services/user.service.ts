/* eslint-disable prettier/prettier */
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { UserEntity } from 'src/modules/database/entities/user.entity';
import { Repository } from 'typeorm';
import { CreateUserDto } from '../dto/createUser.dto';
import { UserRepository } from '../../database/repository/user.repository';

@Injectable()
export class UserService {
   
   constructor(
      private readonly userRepository: UserRepository,
   ){}
   // async findUserByEmail(email:string):Promise<UserEntity>{
   //    return this.userRepository.findOne({where:{
   //       email: email
   //    }})
   // }

   async createUser(userInfo: CreateUserDto){
      return await this.userRepository.create(userInfo)
   }
}
