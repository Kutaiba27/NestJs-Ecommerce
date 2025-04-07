import { Injectable } from '@nestjs/common';
import { IUser, UserEntity } from '/user';
import { UserRepository } from '/database/repository/user.repository';
import { IPagination } from '@Package/api';
import { FindAllOutPut } from '@Package/database/postgresql/interface';

@Injectable()
export class UserService {
  constructor(private readonly userRepository: UserRepository) {}

  async findById(id: string) {
    return this.userRepository.findOne(id);
  }

  async findUserByEmail(email: string, throwError = true): Promise<UserEntity> {
    return await this.userRepository.findUserByEmail(email, throwError);
  }

  async createUser(userInfo: IUser): Promise<UserEntity> {
    return await this.userRepository.createUser(userInfo);
  }

  async getAllUsers(
    pagination?: IPagination,
  ): Promise<FindAllOutPut<UserEntity>> {
    return this.userRepository.findAllUsers(pagination);
  }
}
