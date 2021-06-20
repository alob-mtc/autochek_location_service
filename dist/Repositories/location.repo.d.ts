import { LocationDTO, LocationUpdateDTO } from '@Root/DTOs/location/location.dto';
import { IPaginationOptions, Pagination } from 'nestjs-typeorm-paginate';
import { BaseResponse } from './contract/baseResponse';
export interface PaginatedLocationResult extends Pagination<LocationDTO> {
    locations: LocationDTO[];
}
export interface ILocationRepository {
    createNewLocation(data: LocationDTO): Promise<BaseResponse<LocationDTO>>;
    editLocation(id: string, data: LocationUpdateDTO): Promise<BaseResponse<{
        updated: boolean;
    }>>;
    getAllLocations(options: IPaginationOptions): Promise<BaseResponse<Partial<PaginatedLocationResult>>>;
    getLocationById(id: string): Promise<BaseResponse<Partial<LocationDTO>>>;
    searchLocations(q: string): Promise<BaseResponse<Partial<LocationDTO[]>>>;
    deleteLocation(id: string): Promise<BaseResponse<Partial<{
        deleted: boolean;
    }>>>;
    calculateLocationDistanceFromCenterLocation(id: string): Promise<BaseResponse<Partial<{
        message: string;
        distance: number;
        unit: string;
    }>>>;
}
