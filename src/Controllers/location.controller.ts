import { Controller, UsePipes, Body, Post, Get, Query, ParseIntPipe, Res, Param, Patch, Delete } from '@nestjs/common';
import { Response } from 'express';
import { LocationDTO, LocationUpdateDTO } from '@Root/DTOs/location/location.dto';
import { LocationService } from '@Root/Services/location.service';
import { envManager } from '@Root/Config/env.config.manager';
import { ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';
import { JoiValidationPipe } from '@Root/Pipes/validator.pipe';
import { CreateLocation, EditLocation } from '@Root/Models/validatiors/location.schema';
import { ICreateNewLocationSwaggerSchema, IDeleteLocationSwaggerSchema, IEditLocationSwaggerSchema, IGetAllLocationsSwaggerSchema, IGetLocationsByIdSwaggerSchema, ILocationDistanceSwaggerSchema } from '@Root/Models/swagger/schema';

@ApiTags('Location')
@Controller('locations')
export class LocationController {
   constructor(private readonly _location_serv: LocationService) {}

   /**
    * createNewLocation: creates location record
    * @param response
    * @param data
    */
   @Post('create')
   @ApiOperation({ summary: 'Creation of new Location record' })
   @ApiResponse({ status: 200, description: 'Successful Location creation', schema: ICreateNewLocationSwaggerSchema })
   @UsePipes(new JoiValidationPipe(CreateLocation))
   public async createNewLocation(@Res() response: Response, @Body() data: LocationDTO) {
      const res = await this._location_serv.createNewLocation(data);
      response.status(res.statusCode).json(res);
   }

   /**
    * editLocation: Edit location record
    * @param response
    * @param { id } : ID of the location
    * @param data
    */
   @Patch('update/:id')
   @ApiOperation({ summary: 'Update Location record By providing the Location ID' })
   @ApiResponse({ status: 200, description: 'Successful Location Update', schema: IEditLocationSwaggerSchema })
   @UsePipes(new JoiValidationPipe(EditLocation))
   public async editLocation(@Res() response: Response, @Param('id') { id }: { id: string }, @Body() data: LocationUpdateDTO) {
      const res = await this._location_serv.editLocation(id, data);
      response.status(res.statusCode).json(res);
   }

   /**
    * getAllLocations: Fetch all location records
    * @param response
    * @param page
    * @param limit
    */
   @Get()
   @ApiOperation({ summary: 'Fetch all Location records' })
   @ApiResponse({ status: 200, description: 'Successful Location Fetch', schema: IGetAllLocationsSwaggerSchema })
   public async getAllLocations(@Res() response: Response, @Query('page') page: number, @Query('limit', ParseIntPipe) limit: number) {
      limit = limit > 100 ? 100 : limit;
      const res = await this._location_serv.getAllLocations({
         page: Number(page ? page : 1),
         limit,
         route: `${envManager.getEnvValue('URL')}locations`,
      });
      response.status(res.statusCode).json(res);
   }

   /**
    * getLocationById: Get specific location by its ID
    * @param response
    * @param id
    */
   @Get(':id')
   @ApiOperation({ summary: 'Fetch One Location records by its ID' })
   @ApiResponse({ status: 200, description: 'Successful Location Fetch', schema: IGetLocationsByIdSwaggerSchema })
   public async getLocationById(@Res() response: Response, @Param('id') id: string) {
      const res = await this._location_serv.getLocationById(id);
      response.status(res.statusCode).json(res);
   }

   /**
    * deleteLocation: Delete a location record
    * @param response
    * @param id
    */
   @Delete(':id')
   @ApiOperation({ summary: 'Delete One Location records by its ID' })
   @ApiResponse({ status: 200, description: 'Successful Location Delete', schema: IDeleteLocationSwaggerSchema })
   public async deleteLocation(@Res() response: Response, @Param('id') id: string) {
      const res = await this._location_serv.deleteLocation(id);
      response.status(res.statusCode).json(res);
   }

   /**
    * searchLocations: performs a service on location records
    * @param response
    * @param q
    */
   @Get('search/q')
   @ApiOperation({ summary: 'Search all Location records by keyword' })
   @ApiResponse({ status: 200, description: 'Successful Location Search', schema: IGetAllLocationsSwaggerSchema })
   public async searchLocations(@Res() response: Response, @Query('q') q: string) {
      const res = await this._location_serv.searchLocations(q);
      response.status(res.statusCode).json(res);
   }

   /**
    * calculateLocationDistanceFromCenterLocation: Calculate Location distance from center location
    * @param response
    * @param id
    */
   @Get('calutate-distance/:id')
   @ApiOperation({ summary: 'Fetch all Location records' })
   @ApiResponse({ status: 200, description: 'Successful Location Fetch', schema: ILocationDistanceSwaggerSchema })
   public async calculateLocationDistanceFromCenterLocation(@Res() response: Response, @Param('id') id: string) {
      const res = await this._location_serv.calculateLocationDistanceFromCenterLocation(id);
      response.status(res.statusCode).json(res);
   }
}
