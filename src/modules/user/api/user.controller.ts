/* eslint-disable prettier/prettier */
import { Body, Controller, Get, Param, Post, Query } from '@nestjs/common';
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import { UserService } from '../services/user.service';
import { UserEntity } from '../../database/entities/user.entity';


@Controller('user')
export class UserController {
   
   constructor(
      private readonly UserService: UserService
   ){}



   @Post('create')
   async findUser(@Body() email: any){
      return await this.UserService.createUser(email)
   }

   @Get("")
   async getAllUsers(){
      return await this.UserService.getAllTask()
   }

   @Get("/find")
   async find(@Query() filter: Partial<UserEntity>){
      return await this.UserService.getUser(filter)
   }

   @Get(":id")
   async getById(@Param('id') id:string){
      return await this.UserService.findById(id);
   }
}
