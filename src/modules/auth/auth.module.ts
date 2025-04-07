import { Module } from '@nestjs/common';
import { PassportModule } from '@nestjs/passport';

import { AuthController } from './api/controllers/auth.controller';
import { AuthService } from './services/auth.service';
import { UserModule } from 'src/modules/user/user.module';
import { JWTModule } from '@Package/auth/jwt';

@Module({
  imports: [
    UserModule,
    PassportModule,
    JWTModule
  ],
  controllers: [AuthController],
  providers: [AuthService],
})
export class AuthModule {}
