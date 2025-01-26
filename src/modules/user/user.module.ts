/* eslint-disable prettier/prettier */
import { Module } from '@nestjs/common';
import { UserController } from './api/user.controller';
import { UserService } from './services/user.service';
import { UserRepository } from '../database/repository/user.repository';

@Module({
  // controllers: [UserController],
  // providers: [UserService,UserRepository]
})
export class UserModule {}
