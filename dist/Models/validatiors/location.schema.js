"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.EditLocation = exports.CreateLocation = void 0;
const Joi = require("@hapi/joi");
exports.CreateLocation = Joi.object({
    name: Joi.string().required(),
    description: Joi.string().required(),
    phone: Joi.string().required(),
    website: Joi.string().uri(),
    contact_persion: Joi.string(),
    center_location: Joi.bool(),
    lon: Joi.number().required(),
    lat: Joi.number().required(),
});
exports.EditLocation = Joi.object({
    name: Joi.string(),
    description: Joi.string(),
    phone: Joi.string(),
    website: Joi.string().uri(),
    contact_persion: Joi.string(),
    lon: Joi.number(),
    lat: Joi.number(),
});
//# sourceMappingURL=location.schema.js.map