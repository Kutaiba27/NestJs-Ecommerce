/* eslint-disable prettier/prettier */
import { Module } from '@nestjs/common';
import { CategoryModule } from './modules/category/category.module';
import { ConfigService } from '@nestjs/config';
import { BrandModule } from './modules/brand/brand.module';
import { ProductModule } from './modules/product/product.module';
import { UserModule } from './modules/user/user.module';
import { AuthModule } from './modules/auth/auth.module';
import { AppEnvConfig } from './package/config/env.config.module';
import { DatabaseConnection } from './package/database/postgresConnection.module';

@Module({
  imports: [
    DatabaseConnection,
    CategoryModule,
    AppEnvConfig,
    BrandModule,
    ProductModule,
    UserModule,
    AuthModule
  ],
})
export class AppModule {
  constructor(config: ConfigService) {
    console.log(config.get('POSTGRES_PASSWORD'));
  }
}
