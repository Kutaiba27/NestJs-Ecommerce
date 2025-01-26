/* eslint-disable prettier/prettier */
import { Module } from '@nestjs/common';
import { UserModule } from './modules/user/user.module';
import { AuthModule } from './modules/auth/auth.module';
import { AppEnvConfig, EnvConfigModule } from './package/config/environments/env.config.module';
import { LoggerModule } from 'nestjs-pino';
import { PrismaModule } from './package/database/postgresql/prisma.module';

@Module({
  imports: [
    LoggerModule.forRoot({
      pinoHttp: {
        level: 'info',
    transport: { target: 'pino' }
      }
    }),
    PrismaModule,
    EnvConfigModule,
    // CategoryModule,
    // AppEnvConfig,
    // BrandModule,
    // ProductModule,
    UserModule,
    // AuthModule
  ],
})
export class AppModule {
}
