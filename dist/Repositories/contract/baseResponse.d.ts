import { HttpStatusCode } from '@Constant/constants';
export interface BaseResponse<T> {
    data: T;
    statusCode: HttpStatusCode;
    message: string;
}
export declare function makeResponse<T>(data: T, statusCode?: HttpStatusCode, message?: string): BaseResponse<T>;
