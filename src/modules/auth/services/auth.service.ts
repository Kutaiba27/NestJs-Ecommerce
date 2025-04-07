import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { EnvironmentService } from '@Package/config';
import { HashService, UserPayload } from '@Package/auth';

import { UserService, UserEntity } from '/user';
import { SingInDto } from '../api/dto/request/singIn.dto';
import { LogInDto } from '../api/dto/request/logIn.dto';

@Injectable()
export class AuthService {
   constructor(
      private readonly jwtService: JwtService,
      private readonly userService: UserService,
      private readonly evn: EnvironmentService,
   ){}

   public async singIn( userSingInInfo: SingInDto ){
      const isExist = await this.userService.findUserByEmail(userSingInInfo.email, false);
      if(isExist){
         throw new HttpException('User already exist', HttpStatus.NOT_FOUND);
      }
      userSingInInfo.password = await HashService.hashPassword(userSingInInfo.password);
      const user:UserEntity = await this.userService.createUser(userSingInInfo)
      const UserPayload = {
         email: user.email,
         id: user.id,
         name: user.name,
      }
      return {
         access_token: this.jwtService.sign(UserPayload),
      }
   }

   async logIn(logInInfo: LogInDto){
      console.log(logInInfo)
      const user = await this.userService.findUserByEmail(logInInfo.email, false)
      if(!user) {
         throw new HttpException("you are not logedin please sing in befor", 404)
      }
      const UserPayload: UserPayload = {
         email: user.email,
         id: user.id,
         role: user.role
      }
      return {
         access_token: this.jwtService.sign(UserPayload),
      }
   }
}
