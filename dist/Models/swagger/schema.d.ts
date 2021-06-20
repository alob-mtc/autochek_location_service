import { LocationDTO } from '@Root/DTOs/location/location.dto';
import { BaseResponse } from '@Root/Repositories/contract/baseResponse';
import { PaginatedLocationResult } from '@Root/Repositories/location.repo';
declare type IReturnSchema<T> = {
    type: string;
    example: BaseResponse<T>;
};
export declare const ILivenessCheckSwaggerSchema: IReturnSchema<any>;
export declare const ICreateNewLocationSwaggerSchema: IReturnSchema<LocationDTO>;
export declare const IEditLocationSwaggerSchema: IReturnSchema<{
    updated: boolean;
}>;
export declare const IGetAllLocationsSwaggerSchema: IReturnSchema<PaginatedLocationResult>;
export declare const IGetLocationsByIdSwaggerSchema: IReturnSchema<LocationDTO>;
export declare const IDeleteLocationSwaggerSchema: IReturnSchema<{
    deleted: boolean;
}>;
export declare const ILocationDistanceSwaggerSchema: IReturnSchema<{
    message: string;
    distance: number;
    unit: string;
}>;
export {};
