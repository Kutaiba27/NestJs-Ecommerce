/* eslint-disable prettier/prettier */
import { ArgumentsHost, Catch, ExceptionFilter } from '@nestjs/common';
import { QueryFailedError } from 'typeorm';

@Catch(QueryFailedError)
export class DatabaseFilter implements ExceptionFilter {
  catch(exception: QueryFailedError, host: ArgumentsHost) {
    const ctx = host.switchToHttp();
    const response = ctx.getResponse();
    if(exception.message.startsWith("duplicate key value")){
        response.status(400).json({
        name: exception.name,
        message: "duplicate key value"
      })
    }
  }
}
