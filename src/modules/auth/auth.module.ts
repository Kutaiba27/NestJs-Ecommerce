import { Module } from '@nestjs/common';
import { PassportModule } from '@nestjs/passport';

import { AuthController } from './api/controllers/auth.controller';
import { AuthService } from './services/auth.service';
import { UserModule } from 'src/modules/user/user.module';
import { JWTModule } from '@Package/auth/jwt';
import { AuthError } from '/auth/services/auth.error';
import { JWTStrategy } from '@Package/auth/passport/strategy/jwt.strategy';

@Module({
  imports: [
    UserModule,
    PassportModule.register({ defaultStrategy: 'jwt' }),
    JWTModule
  ],
  controllers: [AuthController],
  providers: [AuthService, AuthError, JWTStrategy],
  exports: [JWTStrategy, PassportModule]
})
export class AuthModule {}
