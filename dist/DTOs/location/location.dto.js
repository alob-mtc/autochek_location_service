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
Object.defineProperty(exports, "__esModule", { value: true });
exports.LocationUpdateDTO = exports.LocationDTO = void 0;
const swagger_1 = require("@nestjs/swagger");
const class_validator_1 = require("class-validator");
class LocationDTO {
}
__decorate([
    class_validator_1.IsOptional(),
    class_validator_1.IsUUID(),
    __metadata("design:type", String)
], LocationDTO.prototype, "id", void 0);
__decorate([
    swagger_1.ApiProperty({ required: true }),
    class_validator_1.IsString(),
    __metadata("design:type", String)
], LocationDTO.prototype, "name", void 0);
__decorate([
    swagger_1.ApiProperty({ required: true }),
    class_validator_1.IsString(),
    __metadata("design:type", String)
], LocationDTO.prototype, "description", void 0);
__decorate([
    swagger_1.ApiProperty({ required: true }),
    class_validator_1.IsString(),
    __metadata("design:type", String)
], LocationDTO.prototype, "phone", void 0);
__decorate([
    swagger_1.ApiProperty({ required: false }),
    class_validator_1.IsUrl(),
    __metadata("design:type", String)
], LocationDTO.prototype, "website", void 0);
__decorate([
    swagger_1.ApiProperty({ required: false }),
    class_validator_1.IsString(),
    __metadata("design:type", String)
], LocationDTO.prototype, "contact_persion", void 0);
__decorate([
    swagger_1.ApiProperty({ required: false }),
    class_validator_1.IsBoolean(),
    __metadata("design:type", Boolean)
], LocationDTO.prototype, "center_location", void 0);
__decorate([
    swagger_1.ApiProperty({ required: true }),
    class_validator_1.IsNumber(),
    __metadata("design:type", Number)
], LocationDTO.prototype, "lon", void 0);
__decorate([
    swagger_1.ApiProperty({ required: true }),
    class_validator_1.IsNumber(),
    __metadata("design:type", Number)
], LocationDTO.prototype, "lat", void 0);
exports.LocationDTO = LocationDTO;
class LocationUpdateDTO {
}
__decorate([
    swagger_1.ApiProperty({ required: false }),
    class_validator_1.IsString(),
    __metadata("design:type", String)
], LocationUpdateDTO.prototype, "name", void 0);
__decorate([
    swagger_1.ApiProperty({ required: false }),
    class_validator_1.IsString(),
    __metadata("design:type", String)
], LocationUpdateDTO.prototype, "description", void 0);
__decorate([
    swagger_1.ApiProperty({ required: false }),
    class_validator_1.IsString(),
    __metadata("design:type", String)
], LocationUpdateDTO.prototype, "phone", void 0);
__decorate([
    swagger_1.ApiProperty({ required: false }),
    class_validator_1.IsUrl(),
    __metadata("design:type", String)
], LocationUpdateDTO.prototype, "website", void 0);
__decorate([
    swagger_1.ApiProperty({ required: false }),
    class_validator_1.IsString(),
    __metadata("design:type", String)
], LocationUpdateDTO.prototype, "contact_persion", void 0);
__decorate([
    swagger_1.ApiProperty({ required: false }),
    class_validator_1.IsNumber(),
    __metadata("design:type", Number)
], LocationUpdateDTO.prototype, "lon", void 0);
__decorate([
    swagger_1.ApiProperty({ required: false }),
    class_validator_1.IsNumber(),
    __metadata("design:type", Number)
], LocationUpdateDTO.prototype, "lat", void 0);
exports.LocationUpdateDTO = LocationUpdateDTO;
//# sourceMappingURL=location.dto.js.map