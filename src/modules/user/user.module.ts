/* eslint-disable prettier/prettier */
import { Module } from '@nestjs/common';
import { UserController } from './api/user.controller';
import { UserService } from './services/user.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UserEntity } from 'src/modules/database/entities/user.entity';
import { UserRepository } from '../database/repository/user.repository';

@Module({
  imports:[TypeOrmModule.forFeature([UserEntity])],
  controllers: [UserController],
  providers: [UserService,UserRepository]
})
export class UserModule {}
