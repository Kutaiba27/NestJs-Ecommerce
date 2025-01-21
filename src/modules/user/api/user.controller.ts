/* eslint-disable prettier/prettier */
import { Body, Controller, Post } from '@nestjs/common';
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import { UserService } from '../services/user.service';


@Controller('user')
export class UserController {
   
   constructor(
      private readonly UserService: UserService
   ){}


   @Post('create')
   async findUser(@Body() email: any){
      return await this.UserService.createUser(email)
   }
}
