import { PrismaClient } from '@prisma/client';
import { Injectable, OnModuleDestroy, OnModuleInit } from '@nestjs/common';


@Injectable()
export class PrismaConnection extends PrismaClient implements OnModuleInit, OnModuleDestroy{

  constructor() {
    super();
  }

  async onModuleDestroy(): Promise<void> {
    await this.$connect();
  }

  async onModuleInit(): Promise<void> {
    await this.$disconnect();
  }

}