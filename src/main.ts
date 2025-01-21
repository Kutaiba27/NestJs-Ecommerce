import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { NestExpressApplication } from '@nestjs/platform-express';
import { EnvironmentService } from './package/config/environments/environment.service';
import { Logger } from '@nestjs/common';

async function bootstrap() {
  const app = await NestFactory.create<NestExpressApplication>(AppModule);
  const configService =  app.get(EnvironmentService);
  const port = configService.get("app.port");
  await app.listen(port).then(() => {
    console.log(`Server running on port: ${port}`);
  });
}
bootstrap()
  