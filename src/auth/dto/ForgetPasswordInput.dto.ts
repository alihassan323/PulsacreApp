/* eslint-disable prettier/prettier */
import { IsNotEmpty, IsString } from 'class-validator';

import { ApiProperty } from '@nestjs/swagger';

export class ForgetPasswordInput {
  @ApiProperty()
  @IsNotEmpty()
  @IsString()
  email: string;
}
