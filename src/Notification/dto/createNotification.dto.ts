/* eslint-disable prettier/prettier */

import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty } from 'class-validator';

export class CreateDoctorPaymentDto {
  @IsNotEmpty()
  @ApiProperty()
  doctor: number;

  // @IsNotEmpty()
  // @ApiProperty()
  // admin: number;

  //@IsNotEmpty()
  @ApiProperty()
  cheque_Number: string;

  //@IsNotEmpty()
  @ApiProperty()
  account_Number: string;

  //@IsNotEmpty()
  @ApiProperty()
  account_Holder_name: string;

  //@IsNotEmpty()
  @ApiProperty()
  cheque_Amount: string;

  @ApiProperty()
  about: string;
}
