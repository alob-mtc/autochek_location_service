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
exports.JoiValidationPipe = void 0;
const common_1 = require("@nestjs/common");
const Joi = require("@hapi/joi");
let JoiValidationPipe = class JoiValidationPipe {
    constructor(schema) {
        this.schema = schema;
    }
    transform(value, _metadata) {
        if (_metadata.type == 'param') {
            return { [_metadata.data]: value };
        }
        const { error } = this.schema.validate(value);
        if (error) {
            throw new common_1.BadRequestException(error.message || 'Validation failed');
        }
        return value;
    }
};
JoiValidationPipe = __decorate([
    common_1.Injectable(),
    __metadata("design:paramtypes", [Object])
], JoiValidationPipe);
exports.JoiValidationPipe = JoiValidationPipe;
//# sourceMappingURL=validator.pipe.js.map