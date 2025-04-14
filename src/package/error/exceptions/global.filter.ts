import { ArgumentsHost, Catch, ExceptionFilter, HttpException, NotFoundException } from '@nestjs/common';
import { ZodError } from 'zod';
import { Response, Request } from 'express';
import { CodeErrors } from '/shared';
import { PrismaClientInitializationError } from '@prisma/client/runtime/library';

@Catch()
export class GlobalFilter implements ExceptionFilter{
  catch(exception: any, host: ArgumentsHost): any {
    const response: Response = host.switchToHttp().getResponse();
    const request: Request = host.switchToHttp().getRequest();
    console.log(exception);
    let error = {
      path: request.path,
      time: new Date(),
      message: exception.message,
      code: null,
    }
    return response.json({
      error: error,
    });
  }
}
