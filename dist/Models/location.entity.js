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
exports.Location = void 0;
const typeorm_1 = require("typeorm");
const class_transformer_1 = require("class-transformer");
const base_entity_1 = require("./base.entity");
let Location = class Location extends base_entity_1.BaseEntity {
    toJSON() {
        return class_transformer_1.classToPlain(this);
    }
};
__decorate([
    typeorm_1.Column({ nullable: false }),
    __metadata("design:type", String)
], Location.prototype, "name", void 0);
__decorate([
    typeorm_1.Column({ nullable: false }),
    __metadata("design:type", String)
], Location.prototype, "description", void 0);
__decorate([
    typeorm_1.Column({ nullable: true }),
    __metadata("design:type", String)
], Location.prototype, "website", void 0);
__decorate([
    typeorm_1.Column({ nullable: false }),
    __metadata("design:type", String)
], Location.prototype, "phone", void 0);
__decorate([
    typeorm_1.Column({ nullable: true }),
    __metadata("design:type", String)
], Location.prototype, "contact_persion", void 0);
__decorate([
    typeorm_1.Column({ nullable: true, default: false }),
    __metadata("design:type", Boolean)
], Location.prototype, "center_location", void 0);
__decorate([
    typeorm_1.Column({ nullable: false, type: 'decimal' }),
    __metadata("design:type", Number)
], Location.prototype, "lon", void 0);
__decorate([
    typeorm_1.Column({ nullable: false, type: 'decimal' }),
    __metadata("design:type", Number)
], Location.prototype, "lat", void 0);
Location = __decorate([
    typeorm_1.Entity({ name: 'Location' })
], Location);
exports.Location = Location;
//# sourceMappingURL=location.entity.js.map