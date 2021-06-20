import { Location } from '@Root/Models/location.entity';
import { LocationDTO, LocationUpdateDTO } from './location.dto';
export declare class LocationJSONDTO implements Readonly<Partial<LocationDTO>> {
    private static LocationEntityDTO;
    static fromLocationEntityUsingDTO(entity: Partial<Location>): LocationDTO;
    static toLocationEntityUsingDTO(dto: Partial<LocationDTO>): Location;
    static toLocationEntityUsingUpdateDTO(dto: Partial<LocationUpdateDTO>): Location;
}
