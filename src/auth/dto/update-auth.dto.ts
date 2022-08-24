/* eslint-disable prettier/prettier */

import { ApiProperty } from '@nestjs/swagger';

import { UpdatedStatus, UserStatus } from '../user.entity';

export class UpdateDoctorDto {
  @ApiProperty()
  status: UserStatus;
}

export class GetDoctorDto {
  @ApiProperty()
  status: UserStatus;
}

export class GetUserDto {
  @ApiProperty()
  status: UserStatus;
}

export class UpdateUserDto {
  @ApiProperty()
  status: UserStatus;
}

export class DoctorStatusUpdateDto {
  @ApiProperty()
  updatedstatus: UpdatedStatus;
}
