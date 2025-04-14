import { IError } from '@Package/error/error.interface';
import { Injectable } from '@nestjs/common';
import { CodeErrors } from '/shared';
import { AppError } from '@Package/error/app.error';

@Injectable()
export class AuthError {
  private userAlreadyExists: IError = {
    message: "user Already Exist",
    code: CodeErrors.USER_ALREADY_IN_USE,
}

  userAlreadyExist(){
    throw new AppError(this.userAlreadyExists)
  }
}