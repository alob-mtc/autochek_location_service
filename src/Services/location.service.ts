import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository, getRepository } from 'typeorm';
import { LocationDTO, LocationUpdateDTO } from '@Root/DTOs/location/location.dto';
import { Location } from '@Root/Models/location.entity';
import { ILocationRepository, PaginatedLocationResult } from '@Root/Repositories/location.repo';
import { BaseResponse, makeResponse } from '@Root/Repositories/contract/baseResponse';
import { LocationJSONDTO } from '@Root/DTOs/location/location.json.dto';
import { paginate, Pagination, IPaginationOptions } from 'nestjs-typeorm-paginate';
import { HttpStatusCode } from '@Root/constant/constants';

// LocationService: This house the location service business logic
@Injectable()
export class LocationService implements Required<ILocationRepository> {
   constructor(
      @InjectRepository(Location)
      private readonly _location_repo: Repository<Location>,
   ) {}

   /**
    * paginatelocation: Pagination helper function
    * @param options  { limit: number;, page: number; route?: string; }
    * @returns
    */
   private async paginatelocation(options: IPaginationOptions): Promise<Pagination<Location>> {
      return paginate<Location>(this._location_repo, options);
   }

   /**
    * createNewLocation: This handles creation of new Location record
    * @param locationDto : Location infomation to be crearted
    * @returns
    */
   public async createNewLocation(locationDto: LocationDTO): Promise<BaseResponse<LocationDTO>> {
      try {
         // check is a center locaton has been set and remove it
         if (locationDto.center_location) {
            await this._location_repo.update({ center_location: true }, { center_location: false });
         }
         const location = await this._location_repo.save(LocationJSONDTO.toLocationEntityUsingDTO(locationDto));
         return makeResponse(LocationJSONDTO.fromLocationEntityUsingDTO(location));
      } catch (error) {
         return makeResponse(null, HttpStatusCode.INTERNAL_ERROR, error.message);
      }
   }

   /**
    * editLocation: This performs an update on the provided location record
    * @param id : Location ID
    * @param locationDto : Update Data
    * @returns
    */
   public async editLocation(id: string, locationDto: LocationUpdateDTO): Promise<BaseResponse<{ updated: boolean }>> {
      try {
         console.log(id, locationDto);
         const res = await this.getLocationById(id);
         if (res.message) {
            return makeResponse(null, res.statusCode, res.message);
         }
         const { id: _id, ...previousData } = res.data;
         const update = await this._location_repo.update({ id }, LocationJSONDTO.toLocationEntityUsingUpdateDTO({ ...previousData, ...locationDto }));
         if (update.affected > 0) {
            return makeResponse({ updated: true });
         }
         return makeResponse({ updated: false });
      } catch (error) {
         return makeResponse(null, HttpStatusCode.INTERNAL_ERROR, error.message);
      }
   }

   /**
    * getAllLocations: This returns all location record from the database
    * @param options : Pagination Option { page: number, limit: number }
    * @returns
    */
   public async getAllLocations(options: IPaginationOptions): Promise<BaseResponse<Partial<PaginatedLocationResult>>> {
      try {
         const { links, meta, items } = await this.paginatelocation(options);

         if (!items.length) {
            return makeResponse({ locations: [], links, meta });
         }

         const locations = items.map((entity: Location) => LocationJSONDTO.fromLocationEntityUsingDTO(entity));

         return makeResponse({ locations, links, meta });
      } catch (error) {
         return makeResponse(null, HttpStatusCode.INTERNAL_ERROR, error.message);
      }
   }

   /**
    * getLocationById: This returns a location that match the provided ID
    * @param id : Location ID
    * @returns
    */
   public async getLocationById(id: string): Promise<BaseResponse<Partial<LocationDTO>>> {
      try {
         const location = await this._location_repo.findOne(id);
         if (!location) {
            return makeResponse(null, HttpStatusCode.NOT_FOUND, 'Location does not exist');
         }
         return makeResponse(LocationJSONDTO.fromLocationEntityUsingDTO(location));
      } catch (error) {
         return makeResponse(null, HttpStatusCode.INTERNAL_ERROR, error.message);
      }
   }

   /**
    * searchLocations: This  performs a search on the name and discription fields across all locations
    * @param q : The search text
    * @returns
    */
   public async searchLocations(q: string): Promise<BaseResponse<Partial<LocationDTO[]>>> {
      try {
         const locations = await getRepository(Location)
            .createQueryBuilder()
            .select()
            .where('name ILIKE :title', { title: `%${q}%` })
            .orWhere('description ILIKE :desc', { desc: `%${q}%` })
            .getMany();

         const location = locations.map((entity) => LocationJSONDTO.fromLocationEntityUsingDTO(entity));
         return makeResponse(location);
      } catch (error) {
         return makeResponse(null, HttpStatusCode.INTERNAL_ERROR, error.message);
      }
   }

   /**
    * deleteLocation: This deleted a location record form the database
    * @param id : location ID
    * @returns
    */
   public async deleteLocation(id: string): Promise<BaseResponse<Partial<{ deleted: boolean }>>> {
      try {
         const location = await this._location_repo.findOne(id);
         if (!location) {
            return makeResponse(null, HttpStatusCode.NOT_FOUND, 'Location does not  exist or already deleted');
         }
         const deleteRecord = await this._location_repo.delete({ id });
         if (deleteRecord.affected > 0) {
            return makeResponse({ deleted: true });
         }
         return makeResponse({ deleted: false });
      } catch (error) {
         return makeResponse(null, HttpStatusCode.INTERNAL_ERROR, error.message);
      }
   }

   /**
    * calculateLocationDistanceFromCenterLocation: This Calculate the distance form the set center location to the provided location
    * @param id : Location ID
    * @returns
    */
   public async calculateLocationDistanceFromCenterLocation(id: string): Promise<BaseResponse<Partial<{ message: string; distance: number; unit: string }>>> {
      try {
         const [location, center_location] = await Promise.all([this._location_repo.findOne(id), this._location_repo.findOne({ center_location: true })]);
         if (!location) {
            return makeResponse(null, HttpStatusCode.NOT_FOUND, 'Location does not  exist or already deleted');
         }
         if (!center_location) {
            return makeResponse(null, HttpStatusCode.NOT_FOUND, 'No Center Location has been set. Create a Center Location and try again');
         }
         return makeResponse({ message: `Distance from ${center_location.name} to ${location.name}`, ...this.calculateGreatCircleDistanceBetweenTwoPoints({ lat1: center_location.lat, lon1: center_location.lon, lat2: location.lat, lon2: location.lon }) });
      } catch (error) {
         return makeResponse(null, HttpStatusCode.INTERNAL_ERROR, error.message);
      }
   }

   /**
    * calculateGreatCircleDistanceBetweenTwoPoints: This uses Haversine formula to calculate the great-circle distance between two points
    * @param co_ordinates : Co-ordinate of the 2 locations
    * @returns
    */
   private calculateGreatCircleDistanceBetweenTwoPoints(co_ordinates: { lat1: number; lat2: number; lon1: number; lon2: number }): { distance: number; unit: string } {
      function toRad(val: number) {
         return (val * Math.PI) / 180;
      }

      var lat2 = co_ordinates.lat2;
      var lon2 = co_ordinates.lon2;
      var lat1 = co_ordinates.lat1;
      var lon1 = co_ordinates.lon1;

      var R = 6371; // km
      var x1 = lat2 - lat1;
      var dLat = toRad(x1);
      var x2 = lon2 - lon1;
      var dLon = toRad(x2);
      var a = Math.sin(dLat / 2) * Math.sin(dLat / 2) + Math.cos(toRad(lat1)) * Math.cos(toRad(lat2)) * Math.sin(dLon / 2) * Math.sin(dLon / 2);
      var c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
      var distance = R * c;
      return { distance, unit: 'km' };
   }
}
