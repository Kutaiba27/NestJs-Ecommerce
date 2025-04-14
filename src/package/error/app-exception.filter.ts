import { ArgumentsHost, Catch, ExceptionFilter, HttpException, NotFoundException } from '@nestjs/common';
import { ZodError } from 'zod';
import { Response, Request } from 'express';
import { IAppError, IError } from '@Package/error/error.type';
import { CodeErrors } from '/shared';
import { PrismaClientInitializationError } from '@prisma/client/runtime/library';

@Catch(HttpException)
export class HttpExceptionFilter implements ExceptionFilter{
  catch(exception: any, host: ArgumentsHost): any {
    const response: Response = host.switchToHttp().getResponse();
    const request: Request = host.switchToHttp().getRequest();
    console.log(exception.message);
    let error: IAppError = {
      path: request.path,
      time: new Date(),
      message: exception.error.message,
      code: exception.error.code,
    }
    return response.json({
      error: error,
    });
  }
}
