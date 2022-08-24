/* eslint-disable prettier/prettier */
import { IsNotEmpty } from 'class-validator';

import { ApiProperty } from '@nestjs/swagger';

export class CreateDoctorCategoryDto {
  @IsNotEmpty()
  @ApiProperty()
  name: string;
}
