/* eslint-disable prettier/prettier */
import { PartialType } from '@nestjs/mapped-types';
import { ApiProperty } from '@nestjs/swagger';

import { CreateVitalsInfoDto } from './CreateVitalsInfo.dto';

export class UpdateVitalsInfoDto extends PartialType(
  CreateVitalsInfoDto,
) {
  }
