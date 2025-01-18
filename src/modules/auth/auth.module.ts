/* eslint-disable prettier/prettier */
import { Module } from '@nestjs/common';
import { AuthController } from './auth.controller';
import { AuthService } from './auth.service';
import { UserModule } from 'src/modules/user/user.module';
import { JwtModule } from '@nestjs/jwt';
import { ConfigService } from '@nestjs/config';
import { PassportModule } from '@nestjs/passport';

@Module({
  imports: [
    UserModule,
    PassportModule, 
    JwtModule.registerAsync({
    inject:[ConfigService],
    useFactory: async (config: ConfigService)=>{
      return {
        secret: config.get<string>("JWT_SECRET"),
        signOptions: { expiresIn: config.get<string>('JWT_EXPIRES_IN') }
      }
    }
  }) ],
  controllers: [AuthController],
  providers: [AuthService]
})
export class AuthModule {}
