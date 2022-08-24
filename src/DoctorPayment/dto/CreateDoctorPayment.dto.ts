/* eslint-disable prettier/prettier */
import { IsNotEmpty } from 'class-validator';

import { ApiProperty } from '@nestjs/swagger';

export class CreateDoctorPaymentDto {
  @IsNotEmpty()
  @ApiProperty()
  doctor: number;

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
  cheque_Amount: number;

  @ApiProperty()
  about: string;
}

export class CreatePaymentDto {
  @IsNotEmpty()
  @ApiProperty()
  date1: Date;

  @IsNotEmpty()
  @ApiProperty()
  date2: Date;
}
