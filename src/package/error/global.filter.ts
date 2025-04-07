import { ArgumentsHost, Catch, ExceptionFilter } from '@nestjs/common';
import { ZodError } from 'zod';
import { Response } from 'express';
import { IError } from '@Package/error/error.type';
import { CodeErrors } from '/shared';
import { PrismaClientInitializationError } from '@prisma/client/runtime/library';

@Catch()
export class GlobalFilter implements ExceptionFilter{
  catch(exception: any, host: ArgumentsHost): any {
    const response: Response = host.switchToHttp().getResponse();
    console.log("Global filter failed:", exception);
    let error: IError = {
      message: null,
      from: null,
      code: null
    }
    if(exception instanceof ZodError) {
        error = {
          code: CodeErrors.VALIDATION_ERROR,
          from: ZodError.name,
          message: exception.issues,
        }
    }
    if(exception instanceof PrismaClientInitializationError) {
      error = {
        code: 5000,
        from: "database",
        message: exception.message,
      }
      console.log("errrrrrrrrrrrrrror : ", error);
    }

    return response.json({
      error: error,
    });
  }
}