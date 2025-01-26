/* eslint-disable prettier/prettier */
import { Body, Controller, Post, ValidationPipe } from '@nestjs/common';
import { AuthService } from './auth.service';
import { CreateUserDto } from 'src/modules/user/dto/createUser.dto';
import { LogInDto } from './dto/logIn.dto';
import { EnvironmentService } from '../../package/config/environments/environment.service';

@Controller('auth')
export class AuthController {
   constructor(
      private readonly authService: AuthService,
   ){}

   // @Post('sing-in')
   // async singIn(@Body(ValidationPipe, CheckEmailPipe) singInInfo: CreateUserDto){
   //    return await this.authService.singIn(singInInfo)
   // }

   // @Post('log-in')
   // async logIn(@Body(ValidationPipe) singInInfo: LogInDto){
   //    return await this.authService.logIn(singInInfo)
   // }
}
