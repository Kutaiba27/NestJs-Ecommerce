/* eslint-disable prettier/prettier */
import { Module } from '@nestjs/common';
import { UserModule } from '/user/user.module';
import { EnvConfigModule } from '@Package/config';
import { PrismaModule } from '@Package/database/postgresql/prisma.module';
import { AuthModule } from '/auth/auth.module';

@Module({
  imports: [
    PrismaModule,
    EnvConfigModule,
    UserModule,
    AuthModule
  ],
})
export class AppModule {
}
