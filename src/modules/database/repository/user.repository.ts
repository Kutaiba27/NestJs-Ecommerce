import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { IUser, UserEntity } from '/user';
import { Prisma, PrismaClient } from '@prisma/client';
import { PrismaService } from '@Package/database/postgresql/prisma.service';
import { IPagination } from '@Package/api';
import { FindAllOutPut } from '@Package/database/postgresql/interface';
import { DefaultArgs } from '@prisma/client/runtime/library';


@Injectable()
export class UserRepository {
  private userPrisma: Prisma.UserDelegate<DefaultArgs, Prisma.PrismaClientOptions> ;
  constructor(
    private readonly prismaService: PrismaService,
  ) {
    this.userPrisma = this.prismaService.user;
  }

  async createUser(userInfo: IUser): Promise<UserEntity> {
    return await this.userPrisma.create({
      data: userInfo,
    }) as UserEntity;
  }

  async findAllUsers(
    pagination?: IPagination,
  ): Promise<FindAllOutPut<UserEntity>> {
    let totalCount: number;
    if (pagination) {
      totalCount = await this.userPrisma.count();
    }
    const rows = (await this.userPrisma.findMany({
      skip: pagination.skip,
      take: pagination.take,
    })) as UserEntity[];
    return {
      total: totalCount,
      rows,
    };
  }

  async findOne(id: string, throwError=true): Promise<UserEntity>{
    const user =  await this.userPrisma.findUnique({
      where: { id },
    }) as UserEntity;
    if (!user && throwError) {
      throw new HttpException({ error: 'User not found' },
        HttpStatus.NOT_FOUND)
    }
    return user;
  }
  async findUserByEmail(email: string, throwError= true): Promise<UserEntity>  {
    const user = await this.userPrisma.findUnique({
      where: {
        email: email
      },
    }) as UserEntity;
    if (!user && throwError) {
      throw new HttpException({ error: 'User not found by email' },
        HttpStatus.NOT_FOUND)
    }
    return user;
  }
}
