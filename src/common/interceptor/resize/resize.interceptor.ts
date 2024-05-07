/* eslint-disable prettier/prettier */
import { CallHandler, ExecutionContext, Injectable, NestInterceptor } from '@nestjs/common';
import { Observable } from 'rxjs';
import { Request } from 'express';
import * as sharp from 'sharp';
import { v4 } from 'uuid';

@Injectable()
export class ResizeImageInterceptor implements NestInterceptor {

  constructor(private pathName:string){}
  async intercept(context: ExecutionContext, next: CallHandler): Promise<Observable<any>> {

    const ctx = context.switchToHttp();
    const req:Request = ctx.getRequest<Request>();
    if(req.file){
      const fileName:string = `${this.pathName}-${v4()}-${Date.now()}.jpeg`
      await sharp(req.file.buffer)
        .resize(600,600)
        .toFormat('jpeg') 
        .toFile(`${__dirname}/../../../../public/upload/${this.pathName}/${fileName}`)
        req.body.image = fileName;
    }
    return next.handle();
  }
}