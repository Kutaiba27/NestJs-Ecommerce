/* eslint-disable prettier/prettier */
import { ConfigService } from "@nestjs/config";
import { PassportStrategy } from "@nestjs/passport"; 
import { ExtractJwt ,Strategy } from "passport-jwt";

export class JwtStrategy extends PassportStrategy(Strategy, "jwt"){
   constructor(
      private readonly config: ConfigService
   ){
      super({
         jwtFromRequset:ExtractJwt.fromAuthHeaderAsBearerToken(),
         secretOrKey: config.get<string>())
      })
   }
}
