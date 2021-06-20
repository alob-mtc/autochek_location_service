import { Response } from 'express';
import { LocationDTO, LocationUpdateDTO } from '@Root/DTOs/location/location.dto';
import { LocationService } from '@Root/Services/location.service';
export declare class LocationController {
    private readonly _location_serv;
    constructor(_location_serv: LocationService);
    createNewLocation(response: Response, data: LocationDTO): Promise<void>;
    editLocation(response: Response, { id }: {
        id: string;
    }, data: LocationUpdateDTO): Promise<void>;
    getAllLocations(response: Response, page: number, limit: number): Promise<void>;
    getLocationById(response: Response, id: string): Promise<void>;
    deleteLocation(response: Response, id: string): Promise<void>;
    searchLocations(response: Response, q: string): Promise<void>;
    calculateLocationDistanceFromCenterLocation(response: Response, id: string): Promise<void>;
}
