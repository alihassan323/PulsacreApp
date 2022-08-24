/* eslint-disable prettier/prettier */
import { IsNotEmpty } from 'class-validator';

import { ApiProperty } from '@nestjs/swagger';

export class CreatePatientAppointmentDto {
  @IsNotEmpty()
  @ApiProperty()
  doctor: number;

  @IsNotEmpty()
  @ApiProperty()
  patient: number;
}

export class GetDoctorTransactionDto {
  @IsNotEmpty()
  @ApiProperty()
  date1: Date;

  @IsNotEmpty()
  @ApiProperty()
  date2: Date;
}

export class CreatepatPaymentDto {
  @IsNotEmpty()
  @ApiProperty()
  date1: Date;

  @IsNotEmpty()
  @ApiProperty()
  date2: Date;
}
