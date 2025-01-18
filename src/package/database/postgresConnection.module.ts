
import { DynamicModule } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { TypeOrmModule, TypeOrmModuleOptions } from '@nestjs/typeorm';

export const DatabaseConnection: DynamicModule = TypeOrmModule.forRootAsync({
   inject: [ConfigService],
   useFactory: (config: ConfigService): TypeOrmModuleOptions => {
      return {
         type: 'postgres',
         username: config.get('POSTGRES_USERNAME'),
         password: config.get('POSTGRES_PASSWORD'),
         host: config.get('POSTGRES_HOST'),
         database: config.get('POSTGRES_DATABASE'),
         port: config.get('POSTGRES_PORT'),
         migrations: ['./migration/**/*.ts'],
         synchronize: true,
         entities: [__dirname + './../../**/*.entity{.ts,.js}'],
      };
   },
});

