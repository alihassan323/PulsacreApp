/* eslint-disable prettier/prettier */
import { IsNotEmpty } from 'class-validator';

import { ApiProperty } from '@nestjs/swagger';

export class CreateFavoriteDoctorsDto {
  @IsNotEmpty()
  @ApiProperty()
  doctor: number;

  @IsNotEmpty()
  @ApiProperty()
  patient: number;
}


export class DeleteFavoriteDoctorsDto {
  @IsNotEmpty()
  @ApiProperty()
  doctor: number;

  @IsNotEmpty()
  @ApiProperty()
  patient: number;
}