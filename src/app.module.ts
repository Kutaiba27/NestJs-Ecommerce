import { Module } from '@nestjs/common';
import { DatabaseModule } from './database/database.module';
import { CategoryModule } from './category/category.module';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { BrandModule } from './brand/brand.module';

@Module({
  imports: [
    DatabaseModule,
    CategoryModule,
    ConfigModule.forRoot({
      envFilePath: 'dev.config.env',
      isGlobal: true,
    }),
    BrandModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {
  constructor(config: ConfigService) {
    console.log(config.get('POSTGRES_PASSWORD'));
  }
}
