import { Logger, Module, OnModuleInit } from '@nestjs/common';
import { PrismaConnection } from './prisma.connection';


@Module({
  providers: [PrismaConnection]
})
export class PrismaModule implements OnModuleInit {
  onModuleInit(): any {
    const logger = new Logger('PrismaModule');
    logger.log('database connection started');
  }

}