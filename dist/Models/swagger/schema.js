"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ILocationDistanceSwaggerSchema = exports.IDeleteLocationSwaggerSchema = exports.IGetLocationsByIdSwaggerSchema = exports.IGetAllLocationsSwaggerSchema = exports.IEditLocationSwaggerSchema = exports.ICreateNewLocationSwaggerSchema = exports.ILivenessCheckSwaggerSchema = void 0;
const faker = require("faker");
const location_dto_1 = require("../../DTOs/location/location.dto");
const baseResponse_1 = require("../../Repositories/contract/baseResponse");
const location_repo_1 = require("../../Repositories/location.repo");
const locationData = {
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
exports.ILivenessCheckSwaggerSchema = { type: 'object', example: baseResponse_1.makeResponse({ Service_Name: 'Autochek Location Serivice', Time: '4:12:22 PM' }) };
exports.ICreateNewLocationSwaggerSchema = { type: 'object', example: baseResponse_1.makeResponse(locationData) };
exports.IEditLocationSwaggerSchema = { type: 'object', example: baseResponse_1.makeResponse({ updated: true }) };
exports.IGetAllLocationsSwaggerSchema = {
    type: 'object',
    example: baseResponse_1.makeResponse({
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
exports.IGetLocationsByIdSwaggerSchema = { type: 'object', example: baseResponse_1.makeResponse(locationData) };
exports.IDeleteLocationSwaggerSchema = { type: 'object', example: baseResponse_1.makeResponse({ deleted: true }) };
exports.ILocationDistanceSwaggerSchema = { type: 'object', example: baseResponse_1.makeResponse({ message: `Distance from ${faker.address.cityName()} to ${faker.address.cityName()}`, distance: faker.datatype.float(), unit: 'km' }) };
//# sourceMappingURL=schema.js.map