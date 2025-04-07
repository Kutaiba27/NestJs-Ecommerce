import { Logger, Module, OnModuleInit } from '@nestjs/common';
import { PrismaService } from './prisma.service';


@Module({
  providers: [PrismaService],
  exports: [PrismaService]
})
export class PrismaModule implements OnModuleInit {
  onModuleInit(): any {
    const logger = new Logger('PrismaModule');
    logger.verbose('database initialize');
  }

}