import faker = require('faker');
import { LocationDTO } from '@Root/DTOs/location/location.dto';
import { BaseResponse, makeResponse } from '@Root/Repositories/contract/baseResponse';
import { PaginatedLocationResult } from '@Root/Repositories/location.repo';

type IReturnSchema<T> = { type: string; example: BaseResponse<T> };

const locationData: LocationDTO = {
   id: faker.datatype.uuid(),
   name: faker.address.cityName(),
   description: faker.lorem.sentence(6),
   phone: faker.phone.phoneNumber(),
   website: faker.internet.url(),
   contact_persion: faker.phone.phoneNumber(),
   center_location: faker.datatype.boolean(),
   lon: Number(faker.address.longitude()),
   lat: Number(faker.address.latitude()),
};

export const ILivenessCheckSwaggerSchema: IReturnSchema<any> = { type: 'object', example: makeResponse({ Service_Name: 'Autochek Location Serivice', Time: '4:12:22 PM' }) };

export const ICreateNewLocationSwaggerSchema: IReturnSchema<LocationDTO> = { type: 'object', example: makeResponse(locationData) };

export const IEditLocationSwaggerSchema: IReturnSchema<{ updated: boolean }> = { type: 'object', example: makeResponse({ updated: true }) };

export const IGetAllLocationsSwaggerSchema: IReturnSchema<PaginatedLocationResult> = {
   type: 'object',
   example: makeResponse({
      locations: [locationData, locationData],
      links: {
         first: 'http://localhost:8082/api/v1/locations?limit=2',
         previous: '',
         next: 'http://localhost:8082/api/v1/locations?page=2&limit=2',
         last: 'http://localhost:8082/api/v1/locations?page=4&limit=2',
      },
      meta: {
         totalItems: 8,
         itemCount: 2,
         itemsPerPage: 2,
         totalPages: 4,
         currentPage: 1,
      },
      items: null,
   }),
};

export const IGetLocationsByIdSwaggerSchema: IReturnSchema<LocationDTO> = { type: 'object', example: makeResponse(locationData) };

export const IDeleteLocationSwaggerSchema: IReturnSchema<{ deleted: boolean }> = { type: 'object', example: makeResponse({ deleted: true }) };

export const ILocationDistanceSwaggerSchema: IReturnSchema<{ message: string; distance: number; unit: string }> = { type: 'object', example: makeResponse({ message: `Distance from ${faker.address.cityName()} to ${faker.address.cityName()}`, distance: faker.datatype.float(), unit: 'km' }) };
