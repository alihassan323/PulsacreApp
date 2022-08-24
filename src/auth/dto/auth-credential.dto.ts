/* eslint-disable prettier/prettier */
import { IsNotEmpty } from 'class-validator';

import { ApiProperty } from '@nestjs/swagger';

import { UserType } from './create-user.dto';

export class AuthCredentialDto {
  @ApiProperty()
  @IsNotEmpty()
  email: string;

  @ApiProperty()
  @IsNotEmpty()
  password: string;

  @ApiProperty()
  @IsNotEmpty()
  Type: UserType;

  @ApiProperty()
//  @IsNotEmpty()
  callId: number;

  @ApiProperty()
  device_Token:string;

}

export class UpdateStatusDto {
  @ApiProperty()
  @IsNotEmpty()
  email: string;

  @ApiProperty()
  @IsNotEmpty()
  randomNumber: string;
}
