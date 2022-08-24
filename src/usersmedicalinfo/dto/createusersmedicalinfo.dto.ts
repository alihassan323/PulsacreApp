/* eslint-disable prettier/prettier */
import { IsNotEmpty } from 'class-validator';

import { ApiProperty } from '@nestjs/swagger';

export class CreateUsersMedicalInfo {
  @ApiProperty()
  @IsNotEmpty()
  medical_History: string[];

  @ApiProperty()
  @IsNotEmpty()
  medicines: string[];

  @ApiProperty()
  @IsNotEmpty()
  user: number;
}
