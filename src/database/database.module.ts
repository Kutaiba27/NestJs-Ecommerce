/* eslint-disable prettier/prettier */
import { Module } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
@Module({
   imports: [
      TypeOrmModule.forRootAsync({
         inject: [ConfigService] ,
         useFactory:(config: ConfigService)=>{
            return {
               type:'postgres',
               username: config.get('POSTGRES_USERNAME'),
               password: config.get('POSTGRES_PASSWORD'),
               host: config.get('POSTGRES_HOST'),
               database: config.get('POSTGRES_DATABASE'),
               port: config.get('POSTGRES_PORT'),
               synchronize: true,
               entities: [__dirname + './../**/*.entity{.ts,.js}']
            }
         }
      })
   ],
   
})
export class DatabaseModule { }
