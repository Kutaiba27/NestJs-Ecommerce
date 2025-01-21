
import { DynamicModule, Module, OnModuleInit, Logger } from '@nestjs/common';
import { TypeOrmModule, TypeOrmModuleOptions } from '@nestjs/typeorm';
import { EnvironmentService } from '../../../config/environments/environment.service';
import { EnvConfigModule } from '../../../config/environments/env.config.module';


const PostgresConnection: DynamicModule = TypeOrmModule.forRootAsync({
   imports: [EnvConfigModule],
   inject: [EnvironmentService],
   useFactory: (config: EnvironmentService): TypeOrmModuleOptions => {
      return {
         type: 'postgres',
         username: config.get('database.username'),
         password: config.get('database.password'),
         host: config.get('database.host'),
         database: config.get('database.name'),
         port: config.get('database.port') ,
         migrations: [__dirname + './../../../../modules/database/migration/*-migration.ts'],
         migrationsRun: false,
         synchronize: false,
         entities: [__dirname + './../../../../**/*.entity{.ts,.js}'],
      };
   },
});

@Module({
   imports: [PostgresConnection],
})
export class DatabaseConnection implements OnModuleInit{
   private readonly logger: Logger = new Logger(DatabaseConnection.name);
   onModuleInit(): any {
      this.logger.verbose("Database Connection initialized");
   }

}

