/* eslint-disable prettier/prettier */

import { PartialType } from '@nestjs/mapped-types';
import { ApiProperty } from '@nestjs/swagger';

import { CreateUsersProfileDto } from './createuserprofile.dto';

export class UpdateUsersProfileDto extends PartialType(CreateUsersProfileDto) {
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
}
