import { DataSource } from 'typeorm';
import {config} from "dotenv"
config({path: '/home/darsoft/main/nestjs/NestJs-Ecommerce/development.env'})
const AppDataSource = new DataSource({
  type: 'postgres',
  username: process.env.DB_USERNAME,
  password: `${process.env.DB_PASSWORD}`,
  host: process.env.DB_HOST,
  database: process.env.DB_NAME,
  port: +process.env.DB_PORT,
  migrations: [__dirname + './../../../../modules/database/migrations/*-migration.ts'],
  migrationsRun: false,
  synchronize: false,
  entities: [__dirname + './../../../../**/*.entity{.ts,.js}'],
});
export default AppDataSource;