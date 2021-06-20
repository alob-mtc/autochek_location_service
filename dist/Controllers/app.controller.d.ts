import { AppService } from '@Service/app.service';
import { BaseResponse } from '@Root/Repositories/contract/baseResponse';
export declare class AppController {
    private readonly _app_service;
    constructor(_app_service: AppService);
    start(req: Request): BaseResponse<any>;
}
