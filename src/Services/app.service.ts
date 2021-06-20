import { Injectable } from '@nestjs/common';
import { HttpStatusCode } from '@Root/constant/constants';
import { BaseResponse, makeResponse } from '@Root/Repositories/contract/baseResponse';

@Injectable()
export class AppService {
   alpha_route(req: any): BaseResponse<any> {
      const url = req.protocol + '://' + req.hostname;
      return makeResponse({ Service_Name: process.env.SERVICE_NAME, Time: new Date().toLocaleTimeString() }, HttpStatusCode.OK, `I'm alive and running on ${url}:${process.env.PORT}`);
   }
}
