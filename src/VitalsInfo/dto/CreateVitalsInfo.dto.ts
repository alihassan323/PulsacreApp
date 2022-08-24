/* eslint-disable prettier/prettier */
import { IsNotEmpty } from 'class-validator';

import { ApiProperty } from '@nestjs/swagger';

export class CreateVitalsInfoDto {
  @IsNotEmpty()
  @ApiProperty()
  heartRate: string;

  @IsNotEmpty()
  @ApiProperty()
  hrv: string;

  @IsNotEmpty()
  @ApiProperty()
  stressLevel: string;

  @IsNotEmpty()
  @ApiProperty()
  respiratoryLevel: string;

  @IsNotEmpty()
  @ApiProperty()
  diastolic: string;

  @IsNotEmpty()
  @ApiProperty()
  systolic: string;

  @IsNotEmpty()
  @ApiProperty()
  oxygenLevel: string;

  @IsNotEmpty()
  @ApiProperty()
  patient: number;
}
