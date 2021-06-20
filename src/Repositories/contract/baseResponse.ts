import { HttpStatusCode } from '@Constant/constants';

// this is the service res
export interface BaseResponse<T> {
   data: T;
   statusCode: HttpStatusCode;
   message: string;
}

export function makeResponse<T>(data: T, statusCode: HttpStatusCode = HttpStatusCode.OK, message: string = null): BaseResponse<T> {
   return { data, statusCode, message };
}
