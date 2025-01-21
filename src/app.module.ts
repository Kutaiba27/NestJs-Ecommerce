/* eslint-disable prettier/prettier */
import { Module } from '@nestjs/common';
import { UserModule } from './modules/user/user.module';
import { AuthModule } from './modules/auth/auth.module';
import { AppEnvConfig, EnvConfigModule } from './package/config/environments/env.config.module';
import { DatabaseConnection } from './package/database/postgresql/typeorm/postgres.connection.module';

@Module({
  imports: [
    DatabaseConnection,
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
