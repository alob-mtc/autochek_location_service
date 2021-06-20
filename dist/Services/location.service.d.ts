import { Repository } from 'typeorm';
import { LocationDTO, LocationUpdateDTO } from '@Root/DTOs/location/location.dto';
import { Location } from '@Root/Models/location.entity';
import { ILocationRepository, PaginatedLocationResult } from '@Root/Repositories/location.repo';
import { BaseResponse } from '@Root/Repositories/contract/baseResponse';
import { IPaginationOptions } from 'nestjs-typeorm-paginate';
export declare class LocationService implements Required<ILocationRepository> {
    private readonly _location_repo;
    constructor(_location_repo: Repository<Location>);
    private paginatelocation;
    createNewLocation(locationDto: LocationDTO): Promise<BaseResponse<LocationDTO>>;
    editLocation(id: string, locationDto: LocationUpdateDTO): Promise<BaseResponse<{
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
    private calculateGreatCircleDistanceBetweenTwoPoints;
}
