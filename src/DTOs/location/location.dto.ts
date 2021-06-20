import { ApiProperty } from '@nestjs/swagger';
import { IsString, IsUUID, IsOptional, IsNumber, IsUrl, IsBoolean } from 'class-validator';

export class LocationDTO implements Readonly<LocationDTO> {
   @IsOptional()
   @IsUUID()
   id: string;

   @ApiProperty({ required: true })
   @IsString()
   name: string;

   @ApiProperty({ required: true })
   @IsString()
   description: string;

   @ApiProperty({ required: true })
   @IsString()
   phone: string;

   @ApiProperty({ required: false })
   @IsUrl()
   website: string;

   @ApiProperty({ required: false })
   @IsString()
   contact_persion: string;

   @ApiProperty({ required: false })
   @IsBoolean()
   center_location: boolean;

   @ApiProperty({ required: true })
   @IsNumber()
   lon: number;

   @ApiProperty({ required: true })
   @IsNumber()
   lat: number;
}

export class LocationUpdateDTO implements Readonly<LocationUpdateDTO> {
   @ApiProperty({ required: false })
   @IsString()
   name: string;

   @ApiProperty({ required: false })
   @IsString()
   description: string;

   @ApiProperty({ required: false })
   @IsString()
   phone: string;

   @ApiProperty({ required: false })
   @IsUrl()
   website: string;

   @ApiProperty({ required: false })
   @IsString()
   contact_persion: string;

   @ApiProperty({ required: false })
   @IsNumber()
   lon: number;

   @ApiProperty({ required: false })
   @IsNumber()
   lat: number;
}
