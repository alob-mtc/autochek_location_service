// validator
import Joi = require('@hapi/joi');

export const CreateLocation = Joi.object({
   name: Joi.string().required(),
   description: Joi.string().required(),
   phone: Joi.string().required(),
   website: Joi.string().uri(),
   contact_persion: Joi.string(),
   center_location: Joi.bool(),
   lon: Joi.number().required(),
   lat: Joi.number().required(),
});

export const EditLocation = Joi.object({
   name: Joi.string(),
   description: Joi.string(),
   phone: Joi.string(),
   website: Joi.string().uri(),
   contact_persion: Joi.string(),
   lon: Joi.number(),
   lat: Joi.number(),
});
