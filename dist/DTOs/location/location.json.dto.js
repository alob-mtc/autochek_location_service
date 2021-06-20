"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.LocationJSONDTO = void 0;
const uuid_1 = require("uuid");
const location_entity_1 = require("../../Models/location.entity");
const location_dto_1 = require("./location.dto");
class LocationJSONDTO {
    static LocationEntityDTO(dto) {
        const location = new location_dto_1.LocationDTO();
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
    static fromLocationEntityUsingDTO(entity) {
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
    static toLocationEntityUsingDTO(dto) {
        const location = new location_entity_1.Location();
        location.id = uuid_1.v4();
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
    static toLocationEntityUsingUpdateDTO(dto) {
        const location = new location_entity_1.Location();
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
exports.LocationJSONDTO = LocationJSONDTO;
//# sourceMappingURL=location.json.dto.js.map