"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.LocationService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const typeorm_2 = require("typeorm");
const location_dto_1 = require("../DTOs/location/location.dto");
const location_entity_1 = require("../Models/location.entity");
const location_repo_1 = require("../Repositories/location.repo");
const baseResponse_1 = require("../Repositories/contract/baseResponse");
const location_json_dto_1 = require("../DTOs/location/location.json.dto");
const nestjs_typeorm_paginate_1 = require("nestjs-typeorm-paginate");
const constants_1 = require("../constant/constants");
let LocationService = class LocationService {
    constructor(_location_repo) {
        this._location_repo = _location_repo;
    }
    async paginatelocation(options) {
        return nestjs_typeorm_paginate_1.paginate(this._location_repo, options);
    }
    async createNewLocation(locationDto) {
        try {
            if (locationDto.center_location) {
                await this._location_repo.update({ center_location: true }, { center_location: false });
            }
            const location = await this._location_repo.save(location_json_dto_1.LocationJSONDTO.toLocationEntityUsingDTO(locationDto));
            return baseResponse_1.makeResponse(location_json_dto_1.LocationJSONDTO.fromLocationEntityUsingDTO(location));
        }
        catch (error) {
            return baseResponse_1.makeResponse(null, constants_1.HttpStatusCode.INTERNAL_ERROR, error.message);
        }
    }
    async editLocation(id, locationDto) {
        try {
            console.log(id, locationDto);
            const res = await this.getLocationById(id);
            if (res.message) {
                return baseResponse_1.makeResponse(null, res.statusCode, res.message);
            }
            const _a = res.data, { id: _id } = _a, previousData = __rest(_a, ["id"]);
            const update = await this._location_repo.update({ id }, location_json_dto_1.LocationJSONDTO.toLocationEntityUsingUpdateDTO(Object.assign(Object.assign({}, previousData), locationDto)));
            if (update.affected > 0) {
                return baseResponse_1.makeResponse({ updated: true });
            }
            return baseResponse_1.makeResponse({ updated: false });
        }
        catch (error) {
            return baseResponse_1.makeResponse(null, constants_1.HttpStatusCode.INTERNAL_ERROR, error.message);
        }
    }
    async getAllLocations(options) {
        try {
            const { links, meta, items } = await this.paginatelocation(options);
            if (!items.length) {
                return baseResponse_1.makeResponse({ locations: [], links, meta });
            }
            const locations = items.map((entity) => location_json_dto_1.LocationJSONDTO.fromLocationEntityUsingDTO(entity));
            return baseResponse_1.makeResponse({ locations, links, meta });
        }
        catch (error) {
            return baseResponse_1.makeResponse(null, constants_1.HttpStatusCode.INTERNAL_ERROR, error.message);
        }
    }
    async getLocationById(id) {
        try {
            const location = await this._location_repo.findOne(id);
            if (!location) {
                return baseResponse_1.makeResponse(null, constants_1.HttpStatusCode.NOT_FOUND, 'Location does not exist');
            }
            return baseResponse_1.makeResponse(location_json_dto_1.LocationJSONDTO.fromLocationEntityUsingDTO(location));
        }
        catch (error) {
            return baseResponse_1.makeResponse(null, constants_1.HttpStatusCode.INTERNAL_ERROR, error.message);
        }
    }
    async searchLocations(q) {
        try {
            const locations = await typeorm_2.getRepository(location_entity_1.Location)
                .createQueryBuilder()
                .select()
                .where('name ILIKE :title', { title: `%${q}%` })
                .orWhere('description ILIKE :desc', { desc: `%${q}%` })
                .getMany();
            const location = locations.map((entity) => location_json_dto_1.LocationJSONDTO.fromLocationEntityUsingDTO(entity));
            return baseResponse_1.makeResponse(location);
        }
        catch (error) {
            return baseResponse_1.makeResponse(null, constants_1.HttpStatusCode.INTERNAL_ERROR, error.message);
        }
    }
    async deleteLocation(id) {
        try {
            const location = await this._location_repo.findOne(id);
            if (!location) {
                return baseResponse_1.makeResponse(null, constants_1.HttpStatusCode.NOT_FOUND, 'Location does not  exist or already deleted');
            }
            const deleteRecord = await this._location_repo.delete({ id });
            if (deleteRecord.affected > 0) {
                return baseResponse_1.makeResponse({ deleted: true });
            }
            return baseResponse_1.makeResponse({ deleted: false });
        }
        catch (error) {
            return baseResponse_1.makeResponse(null, constants_1.HttpStatusCode.INTERNAL_ERROR, error.message);
        }
    }
    async calculateLocationDistanceFromCenterLocation(id) {
        try {
            const [location, center_location] = await Promise.all([this._location_repo.findOne(id), this._location_repo.findOne({ center_location: true })]);
            if (!location) {
                return baseResponse_1.makeResponse(null, constants_1.HttpStatusCode.NOT_FOUND, 'Location does not  exist or already deleted');
            }
            if (!center_location) {
                return baseResponse_1.makeResponse(null, constants_1.HttpStatusCode.NOT_FOUND, 'No Center Location has been set. Create a Center Location and try again');
            }
            return baseResponse_1.makeResponse(Object.assign({ message: `Distance from ${center_location.name} to ${location.name}` }, this.calculateGreatCircleDistanceBetweenTwoPoints({ lat1: center_location.lat, lon1: center_location.lon, lat2: location.lat, lon2: location.lon })));
        }
        catch (error) {
            return baseResponse_1.makeResponse(null, constants_1.HttpStatusCode.INTERNAL_ERROR, error.message);
        }
    }
    calculateGreatCircleDistanceBetweenTwoPoints(co_ordinates) {
        function toRad(val) {
            return (val * Math.PI) / 180;
        }
        var lat2 = co_ordinates.lat2;
        var lon2 = co_ordinates.lon2;
        var lat1 = co_ordinates.lat1;
        var lon1 = co_ordinates.lon1;
        var R = 6371;
        var x1 = lat2 - lat1;
        var dLat = toRad(x1);
        var x2 = lon2 - lon1;
        var dLon = toRad(x2);
        var a = Math.sin(dLat / 2) * Math.sin(dLat / 2) + Math.cos(toRad(lat1)) * Math.cos(toRad(lat2)) * Math.sin(dLon / 2) * Math.sin(dLon / 2);
        var c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
        var distance = R * c;
        return { distance, unit: 'km' };
    }
};
LocationService = __decorate([
    common_1.Injectable(),
    __param(0, typeorm_1.InjectRepository(location_entity_1.Location)),
    __metadata("design:paramtypes", [typeorm_2.Repository])
], LocationService);
exports.LocationService = LocationService;
//# sourceMappingURL=location.service.js.map