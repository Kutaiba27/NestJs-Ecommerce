import { UserPayload } from './types/user.type';
import { UserService } from '../user/user.service';
/* eslint-disable prettier/prettier */
import { HttpException, Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { CreateUserDto } from 'src/modules/user/dto/createUser.dto';
import { UserEntity } from 'src/modules/database/entitys/user.entity';
import { ConfigService } from '@nestjs/config';
import { LogInDto } from './dto/logIn.dto';
import * as bycrpt from 'bcryptjs'

@Injectable()
export class AuthService {
   constructor(
      private readonly jwtService: JwtService,
      private readonly userService: UserService,
      private readonly config: ConfigService
   ){}

   async singIn( userSingInInfo: CreateUserDto ){
      const sult = await bycrpt.genSalt(4)
      const passwordHashed = await bycrpt.hash(userSingInInfo.password,sult)
      userSingInInfo.password= passwordHashed
      const user:UserEntity = await this.userService.createUser(userSingInInfo)
      if(!user){
         throw new HttpException("Error on creating user",500)
      }
      const UserPayload: UserPayload = {
         email: user.email,
         id: user.id,
         name: user.name,
      }
      return {
         access_token: this.jwtService.signAsync(UserPayload),
         refresh_token: this.jwtService.signAsync(UserPayload,{expiresIn: this.config.get<string>("JWT_REFRESH_EXPIRES_IN")})
      }
   }

   async logIn(logInInfo: LogInDto){
      const user = await this.userService.findUserByEmail(logInInfo.email)
      if(!user) {
         throw new HttpException("you are not logedin please sing in befor", 404)
      }
      const UserPayload: UserPayload = {
         email: user.email,
         id: user.id,
         name: user.name,
      }
      return {
         access_token: this.jwtService.signAsync(UserPayload),
         refresh_token: this.jwtService.signAsync(UserPayload,{expiresIn: this.config.get<string>("JWT_REFRESH_EXPIRES_IN")})
      }
   }
}
