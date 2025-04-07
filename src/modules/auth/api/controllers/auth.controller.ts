import { Body, Controller, Post } from '@nestjs/common';
import { AuthService } from '../../services/auth.service';
import { SingInDto } from '../dto/request/singIn.dto';
import { LogInValidationPipe } from '../validation/log-in.validation.pipe';
import { LogInDto } from '../dto/request/logIn.dto';
import { SingInValidationPipe } from '/auth/api/validation/sing-in.validation.pipe';


@Controller('auth')
export class AuthController {
   constructor(
      private readonly authService: AuthService,
   ){}

   @Post('sing-in')
   async singIn( @Body(SingInValidationPipe) singInInfo: SingInDto){
      return await this.authService.singIn(singInInfo)
   }

   @Post("log-in")
   async logIn(@Body(LogInValidationPipe) singInInfo: LogInDto){
      return await this.authService.logIn(singInInfo)
   }
}
