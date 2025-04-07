import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { NestExpressApplication } from '@nestjs/platform-express';
import { EnvironmentService } from '@Package/config';
import * as morgan from 'morgan';
import { GlobalFilter } from '@Package/error/global.filter';

async function bootstrap() {
  const app = await NestFactory.create<NestExpressApplication>(AppModule);
  app.useGlobalFilters(new GlobalFilter());
  const configService =  app.get(EnvironmentService);
  app.use(morgan("dev"))
  const port = configService.get("app.port");
  await app.listen(port).then(() => {
    console.log(`Server running on port: ${port}`);
  });
}
bootstrap()
  