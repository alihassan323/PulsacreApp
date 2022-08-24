/* eslint-disable prettier/prettier */
import { IsNotEmpty } from 'class-validator';

import { ApiProperty } from '@nestjs/swagger';

export class CreateDoctorAccountDto {
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

  @IsNotEmpty()
  @ApiProperty()
  withdraw: string;
}
