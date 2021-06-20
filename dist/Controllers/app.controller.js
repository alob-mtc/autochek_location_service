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
exports.AppController = void 0;
const common_1 = require("@nestjs/common");
const app_service_1 = require("../Services/app.service");
const swagger_1 = require("@nestjs/swagger");
const baseResponse_1 = require("../Repositories/contract/baseResponse");
const schema_1 = require("../Models/swagger/schema");
let AppController = class AppController {
    constructor(_app_service) {
        this._app_service = _app_service;
    }
    start(req) {
        return this._app_service.alpha_route(req);
    }
};
__decorate([
    common_1.Get(),
    swagger_1.ApiOperation({ summary: 'Service Liveness Checks' }),
    swagger_1.ApiResponse({ status: 200, description: 'Successful Liveness Check', schema: schema_1.ILivenessCheckSwaggerSchema }),
    __param(0, common_1.Req()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Object)
], AppController.prototype, "start", null);
AppController = __decorate([
    swagger_1.ApiTags('Liveness Check'),
    common_1.Controller(),
    __metadata("design:paramtypes", [app_service_1.AppService])
], AppController);
exports.AppController = AppController;
//# sourceMappingURL=app.controller.js.map