import { Controller, Get, Req, Request } from '@nestjs/common';
import { AppService } from '@Service/app.service';
import { ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';
import { BaseResponse } from '@Root/Repositories/contract/baseResponse';
import { ILivenessCheckSwaggerSchema } from '@Root/Models/swagger/schema';

@ApiTags('Liveness Check')
@Controller()
export class AppController {
   constructor(private readonly _app_service: AppService) {}

   @Get()
   @ApiOperation({ summary: 'Service Liveness Checks' })
   @ApiResponse({ status: 200, description: 'Successful Liveness Check', schema: ILivenessCheckSwaggerSchema })
   start(@Req() req: Request): BaseResponse<any> {
      return this._app_service.alpha_route(req);
   }
}
