import { PrismaClient } from '@prisma/client';
import { Injectable, Logger, OnModuleDestroy, OnModuleInit } from '@nestjs/common';


@Injectable()
export class PrismaService extends PrismaClient implements OnModuleInit, OnModuleDestroy{

  constructor() {
    super();
  }

  async onModuleInit(): Promise<void> {
    await this.$connect().then(() => {
      const logger = new Logger('PrismaConnection');
      logger.verbose(`Prisma Client connection started`);
    });
  }



  async onModuleDestroy(): Promise<void> {
    await this.$disconnect().then(()=>{
      const logger = new Logger('PrismaConnection');
      logger.verbose(`[PrismaConnection] Client disconnected`);
    });
  }
}

