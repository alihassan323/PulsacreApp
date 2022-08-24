/* eslint-disable prettier/prettier */
import { PartialType } from '@nestjs/mapped-types';
import { ApiProperty } from '@nestjs/swagger';

import { CreateSocialauthdto } from './createsocialauth.dto';

export class UpdateSocialauth extends PartialType(CreateSocialauthdto) {
  // @ApiProperty()
  // medical_History: string[];
  // @ApiProperty()
  // medicines: string[];
}
