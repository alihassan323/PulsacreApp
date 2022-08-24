/* eslint-disable prettier/prettier */
import { IsNotEmpty } from 'class-validator';

import { PartialType } from '@nestjs/mapped-types';
import { ApiProperty } from '@nestjs/swagger';

import { CreateDoctorAccountDto } from './CreateDoctorAccount.dto';

export class UpdateDoctorAccountDto extends PartialType(
  CreateDoctorAccountDto,
) {
  @IsNotEmpty()
  @ApiProperty()
  accountnumber: string;

  @IsNotEmpty()
  @ApiProperty()
  accountHolderName: string;

  @IsNotEmpty()
  @ApiProperty()
  chequeNumber: string;

  @IsNotEmpty()
  @ApiProperty()
  chequeamount: string;
}
