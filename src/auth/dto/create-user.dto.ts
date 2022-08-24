/* eslint-disable prettier/prettier */
import {
	IsEmail,
	IsNotEmpty,
	IsString,
	Matches,
	MaxLength,
	MinLength,
} from 'class-validator';

import { ApiProperty } from '@nestjs/swagger';

export class CreateUerDto {
  @IsNotEmpty()
  @IsString()
  @MinLength(4)
  @ApiProperty()
  @IsEmail()
  email: string;

  @IsNotEmpty()
  @IsString()
  @MinLength(8)
  @MaxLength(20)
  @ApiProperty()
  @Matches(/((?=.*\d)|(?=.*\W+))(?![.\n])(?=.*[A-Z])(?=.*[a-z]).*$/, {
    message: 'password too weak',
  })
  password: string;

  @IsNotEmpty()
  @ApiProperty()
  confirm_password: string;

  @IsNotEmpty()
  @ApiProperty()
  name: string;

  @ApiProperty()
  @IsNotEmpty()
  Type: UserType;

  @ApiProperty()
  callId: number;
}
export enum UserType {
  Admin = 'Admin',
  Patient = 'Patient',
  Doctor = 'Doctor',
}

export class FindByEmailDto {
  @ApiProperty()
  @IsNotEmpty()
  email: string;
}

export class FindByTypelDto {
  @ApiProperty()
  @IsNotEmpty()
  Type: UserType;
}

export class SendinvitataionDoctor {
  @ApiProperty()
  @IsNotEmpty()
  name: string;

  @ApiProperty()
  @IsNotEmpty()
  email: string;
}
