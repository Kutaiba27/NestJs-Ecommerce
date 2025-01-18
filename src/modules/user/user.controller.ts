/* eslint-disable prettier/prettier */
import { Body, Controller, Post } from '@nestjs/common';
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import { UserService } from './user.service';


@Controller('user')
export class UserController {
   
   constructor(
      private readonly UserService: UserService
   ){}


   @Post('sing-in')
   async findUser(@Body() email: string){
      this.UserService.findUserByEmail(email)
   }
}
