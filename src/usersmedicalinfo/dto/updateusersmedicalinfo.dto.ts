/* eslint-disable prettier/prettier */
import { PartialType } from '@nestjs/mapped-types';
import { ApiProperty } from '@nestjs/swagger';

import { CreateUsersMedicalInfo } from './createusersmedicalinfo.dto';

export class UpdateUsersMedicalInfo extends PartialType(
  CreateUsersMedicalInfo,
) {
  @ApiProperty()
  medical_History: string[];

  @ApiProperty()
  medicines: string[];
}
