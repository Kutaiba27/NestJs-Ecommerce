import { Module } from '@nestjs/common';
import { UserController } from './api/controllers/user.controller';
import { UserService } from './services/user.service';
import { UserRepository } from '/database/repository/user.repository';
import { PrismaService } from '@Package/database/postgresql';

@Module({
  controllers: [UserController],
  providers: [UserService,PrismaService,UserRepository],
  exports: [UserService]
})
export class UserModule {}
