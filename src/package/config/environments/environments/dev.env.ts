import * as process from 'node:process';
import { IDatabaseEnv } from '../interfaces/database.inteface';
import { IAppEnv } from '../interfaces/app.interface';
import { IBaseEnv } from '../interfaces/base.interface';

export interface IAppDevEnv extends IAppEnv{
}

export  interface IDatabaseDevEnv extends IDatabaseEnv {
  password: string;
  username: string;
  name: string
}

export interface IDevEnv extends IBaseEnv {
  app: IAppDevEnv,
  database: IDatabaseDevEnv;
}

export const GetDevEnv = ():IDevEnv=>({
  app: {
    host: process.env.HOST,
    name: process.env.NAME,
    port: +process.env.PORT
  },
  database: {
    host: process.env.DB_HOST,
    port: +process.env.DB_PORT,
    password: process.env.DB_PASSWORD,
    username: process.env.DB_USERNAME,
    name: process.env.DB_NAME,
  }
})


