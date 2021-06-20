import { v4 as uuidv4 } from 'uuid';
import { Location } from '@Root/Models/location.entity';
import { LocationDTO, LocationUpdateDTO } from './location.dto';

//* Data transfer object => DTO Class
export class LocationJSONDTO implements Readonly<Partial<LocationDTO>> {
   /**
    * LocationEntityDTO: The construct the Location Entity DTO
    * @param dto
    * @returns
    */
   private static LocationEntityDTO(dto: Partial<LocationDTO>): LocationDTO {
      const location = new LocationDTO();
      location.id = dto.id;
      location.name = dto.name;
      location.description = dto.description;
      location.phone = dto.phone;
      location.website = dto.website;
      location.contact_persion = dto.contact_persion;
      location.center_location = dto.center_location;
      location.lon = dto.lon;
      location.lat = dto.lat;
      return location;
   }

   /**
    * fromLocationEntityUsingDTO: This transfrom Location Entity to DTO
    * @param entity
    * @returns
    */
   public static fromLocationEntityUsingDTO(entity: Partial<Location>): LocationDTO {
      return this.LocationEntityDTO({
         id: entity.id,
         name: entity.name,
         description: entity.description,
         phone: entity.phone,
         website: entity.website,
         contact_persion: entity.contact_persion,
         center_location: entity.center_location,
         lon: entity.lon,
         lat: entity.lat,
      });
   }

   /**
    * toLocationEntityUsingDTO: This transferm DTO to Location Entity
    * @param dto
    * @returns
    */
   public static toLocationEntityUsingDTO(dto: Partial<LocationDTO>): Location {
      const location = new Location();
      location.id = uuidv4();
      location.name = dto.name ? dto.name : location.name;
      location.description = dto.description ? dto.description : location.description;
      location.phone = dto.phone ? dto.phone : location.phone;
      location.website = dto.website ? dto.website : location.website;
      location.contact_persion = dto.contact_persion ? dto.contact_persion : location.contact_persion;
      location.center_location = dto.center_location ? dto.center_location : location.center_location;
      location.lon = dto.lon ? dto.lon : location.lon;
      location.lat = dto.lat ? dto.lat : location.lat;
      location.createdAt = new Date();
      location.updatedAt = new Date();
      return location;
   }

   /**
    * toLocationEntityUsingDTOForUpdate: This transferm Update Location DTO to location Entity
    * @param dto
    * @returns
    */
   public static toLocationEntityUsingUpdateDTO(dto: Partial<LocationUpdateDTO>): Location {
      const location = new Location();
      location.name = dto.name ? dto.name : location.name;
      location.description = dto.description ? dto.description : location.description;
      location.phone = dto.phone ? dto.phone : location.phone;
      location.website = dto.website ? dto.website : location.website;
      location.contact_persion = dto.contact_persion ? dto.contact_persion : location.contact_persion;
      location.lon = dto.lon ? dto.lon : location.lon;
      location.lat = dto.lat ? dto.lat : location.lat;
      location.updatedAt = new Date();
      return location;
   }
}
