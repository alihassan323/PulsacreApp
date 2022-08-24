/* eslint-disable prettier/prettier */
import { IsNotEmpty } from 'class-validator';

import { PartialType } from '@nestjs/mapped-types';
import { ApiProperty } from '@nestjs/swagger';

import { CreateDoctorCategoryDto } from './create-doctorCategory.dto';

export class UpdateDoctorCategoryDto extends PartialType(CreateDoctorCategoryDto) {
  @IsNotEmpty()
  @ApiProperty()
  name: string;
}
