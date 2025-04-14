
export interface IError {
  message: string;
  code: number;
}

export interface IResponseError extends IError {
  path: string;
  data: Date;
}
