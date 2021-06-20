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
Object.defineProperty(exports, "__esModule", { value: true });
exports.LocationController = void 0;
const common_1 = require("@nestjs/common");
const location_dto_1 = require("../DTOs/location/location.dto");
const location_service_1 = require("../Services/location.service");
const env_config_manager_1 = require("../Config/env.config.manager");
const swagger_1 = require("@nestjs/swagger");
const validator_pipe_1 = require("../Pipes/validator.pipe");
const location_schema_1 = require("../Models/validatiors/location.schema");
const schema_1 = require("../Models/swagger/schema");
let LocationController = class LocationController {
    constructor(_location_serv) {
        this._location_serv = _location_serv;
    }
    async createNewLocation(response, data) {
        const res = await this._location_serv.createNewLocation(data);
        response.status(res.statusCode).json(res);
    }
    async editLocation(response, { id }, data) {
        const res = await this._location_serv.editLocation(id, data);
        response.status(res.statusCode).json(res);
    }
    async getAllLocations(response, page, limit) {
        limit = limit > 100 ? 100 : limit;
        const res = await this._location_serv.getAllLocations({
            page: Number(page ? page : 1),
            limit,
            route: `${env_config_manager_1.envManager.getEnvValue('URL')}locations`,
        });
        response.status(res.statusCode).json(res);
    }
    async getLocationById(response, id) {
        const res = await this._location_serv.getLocationById(id);
        response.status(res.statusCode).json(res);
    }
    async deleteLocation(response, id) {
        const res = await this._location_serv.deleteLocation(id);
        response.status(res.statusCode).json(res);
    }
    async searchLocations(response, q) {
        const res = await this._location_serv.searchLocations(q);
        response.status(res.statusCode).json(res);
    }
    async calculateLocationDistanceFromCenterLocation(response, id) {
        const res = await this._location_serv.calculateLocationDistanceFromCenterLocation(id);
        response.status(res.statusCode).json(res);
    }
};
__decorate([
    common_1.Post('create'),
    swagger_1.ApiOperation({ summary: 'Creation of new Location record' }),
    swagger_1.ApiResponse({ status: 200, description: 'Successful Location creation', schema: schema_1.ICreateNewLocationSwaggerSchema }),
    common_1.UsePipes(new validator_pipe_1.JoiValidationPipe(location_schema_1.CreateLocation)),
    __param(0, common_1.Res()), __param(1, common_1.Body()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, location_dto_1.LocationDTO]),
    __metadata("design:returntype", Promise)
], LocationController.prototype, "createNewLocation", null);
__decorate([
    common_1.Patch('update/:id'),
    swagger_1.ApiOperation({ summary: 'Update Location record By providing the Location ID' }),
    swagger_1.ApiResponse({ status: 200, description: 'Successful Location Update', schema: schema_1.IEditLocationSwaggerSchema }),
    common_1.UsePipes(new validator_pipe_1.JoiValidationPipe(location_schema_1.EditLocation)),
    __param(0, common_1.Res()), __param(1, common_1.Param('id')), __param(2, common_1.Body()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object, location_dto_1.LocationUpdateDTO]),
    __metadata("design:returntype", Promise)
], LocationController.prototype, "editLocation", null);
__decorate([
    common_1.Get(),
    swagger_1.ApiOperation({ summary: 'Fetch all Location records' }),
    swagger_1.ApiResponse({ status: 200, description: 'Successful Location Fetch', schema: schema_1.IGetAllLocationsSwaggerSchema }),
    __param(0, common_1.Res()), __param(1, common_1.Query('page')), __param(2, common_1.Query('limit', common_1.ParseIntPipe)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Number, Number]),
    __metadata("design:returntype", Promise)
], LocationController.prototype, "getAllLocations", null);
__decorate([
    common_1.Get(':id'),
    swagger_1.ApiOperation({ summary: 'Fetch One Location records by its ID' }),
    swagger_1.ApiResponse({ status: 200, description: 'Successful Location Fetch', schema: schema_1.IGetLocationsByIdSwaggerSchema }),
    __param(0, common_1.Res()), __param(1, common_1.Param('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, String]),
    __metadata("design:returntype", Promise)
], LocationController.prototype, "getLocationById", null);
__decorate([
    common_1.Delete(':id'),
    swagger_1.ApiOperation({ summary: 'Delete One Location records by its ID' }),
    swagger_1.ApiResponse({ status: 200, description: 'Successful Location Delete', schema: schema_1.IDeleteLocationSwaggerSchema }),
    __param(0, common_1.Res()), __param(1, common_1.Param('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, String]),
    __metadata("design:returntype", Promise)
], LocationController.prototype, "deleteLocation", null);
__decorate([
    common_1.Get('search/q'),
    swagger_1.ApiOperation({ summary: 'Search all Location records by keyword' }),
    swagger_1.ApiResponse({ status: 200, description: 'Successful Location Search', schema: schema_1.IGetAllLocationsSwaggerSchema }),
    __param(0, common_1.Res()), __param(1, common_1.Query('q')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, String]),
    __metadata("design:returntype", Promise)
], LocationController.prototype, "searchLocations", null);
__decorate([
    common_1.Get('calutate-distance/:id'),
    swagger_1.ApiOperation({ summary: 'Fetch all Location records' }),
    swagger_1.ApiResponse({ status: 200, description: 'Successful Location Fetch', schema: schema_1.ILocationDistanceSwaggerSchema }),
    __param(0, common_1.Res()), __param(1, common_1.Param('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, String]),
    __metadata("design:returntype", Promise)
], LocationController.prototype, "calculateLocationDistanceFromCenterLocation", null);
LocationController = __decorate([
    swagger_1.ApiTags('Location'),
    common_1.Controller('locations'),
    __metadata("design:paramtypes", [location_service_1.LocationService])
], LocationController);
exports.LocationController = LocationController;
//# sourceMappingURL=location.controller.js.map