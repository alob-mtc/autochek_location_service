// JoiValidationPipe.ts
import { PipeTransform, Injectable, ArgumentMetadata, BadRequestException } from '@nestjs/common';
import Joi = require('@hapi/joi');

@Injectable()
export class JoiValidationPipe implements PipeTransform {
   constructor(private readonly schema: Joi.Schema) {}

   // value is the value passed in, and related types of Body Query can be extracted from the metadata
   transform(value: object, _metadata: ArgumentMetadata) {
      if (_metadata.type == 'param') {
         return { [_metadata.data]: value };
      }
      const { error } = this.schema.validate(value);
      if (error) {
         throw new BadRequestException(error.message || 'Validation failed');
      }
      return value;
   }
}
