/* eslint-disable prettier/prettier */
import { PartialType } from '@nestjs/mapped-types';
import { ApiProperty } from '@nestjs/swagger';

import { CreateDoctorProfileDto } from './createdoctorprofile.dto';

export class UpdateDoctorProfileDto extends PartialType(
  CreateDoctorProfileDto,
) {
  @ApiProperty()
  name: string;

  @ApiProperty()
  dob: Date;

  @ApiProperty()
  contact: string;

  @ApiProperty()
  address: string;

  @ApiProperty()
  country: string;

  @ApiProperty()
  state: string;

  @ApiProperty()
  city: string;

  @ApiProperty()
  zipcode: string;

  @ApiProperty()
  profilePicture: string;

  @ApiProperty({ maxLength: 4000 })
  about: string;
}
