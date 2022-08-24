/* eslint-disable prettier/prettier */
import {
	IsNotEmpty,
	IsString,
	Matches,
	MaxLength,
	MinLength,
} from 'class-validator';

import { ApiProperty } from '@nestjs/swagger';

export class ResetPasswordInput {
  @IsString()
  @IsNotEmpty()
  @MaxLength(30)
  @MinLength(8)
  @ApiProperty()
  @Matches(/((?=.*\d)|(?=.*\W+))(?![.\n])(?=.*[A-Z])(?=.*[a-z]).*$/)
  password: string;

  @IsString()
  @IsNotEmpty()
  @MaxLength(30)
  @MinLength(8)
  @ApiProperty()
  @Matches(/((?=.*\d)|(?=.*\W+))(?![.\n])(?=.*[A-Z])(?=.*[a-z]).*$/)
  confirm_password: string;

  @IsNotEmpty()
  @IsString()
  @ApiProperty()
  token: string;
}
