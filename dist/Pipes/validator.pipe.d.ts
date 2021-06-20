/// <reference types="hapi__joi" />
import { PipeTransform, ArgumentMetadata } from '@nestjs/common';
import Joi = require('@hapi/joi');
export declare class JoiValidationPipe implements PipeTransform {
    private readonly schema;
    constructor(schema: Joi.Schema);
    transform(value: object, _metadata: ArgumentMetadata): object;
}
