import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { LocationController } from '@Root/Controllers/location.controller';
import { LocationService } from '@Root/Services/location.service';
import { Location } from '@Root/Models/location.entity';

@Module({
   imports: [TypeOrmModule.forFeature([Location])],
   controllers: [LocationController],
   providers: [LocationService],
   exports: [TypeOrmModule],
})
export class LocationModule {}
