/* eslint-disable prettier/prettier */
import { Injectable } from '@nestjs/common';
import { UserEntity } from 'src/modules/database/entities/user.entity';
import { CreateUserDto } from '../dto/createUser.dto';
import { UserRepository } from '../../database/repository/user.repository';

@Injectable()
export class UserService {
  constructor(private readonly userRepository: UserRepository) {}
  async findById(id: string){
    return this.userRepository.findById(id);
  }

  async createUser(userInfo: CreateUserDto) {
    return await this.userRepository.create(userInfo);
  }

  async getAllTask() {
    return await this.userRepository.findAll();
  }

  async getUser(filterInput: Partial<UserEntity>) {
    const filter = {
      where: filterInput,
      select: {
        name: true
      },
      order: {
      email: 'desc',
    }
    }
    return await this.userRepository.findOne(filter);

  }
}
