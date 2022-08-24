/* eslint-disable prettier/prettier */
// import { IsNotEmpty } from 'class-validator';
// import { UserType } from 'src/role/roles.entity';

import { IsNotEmpty } from 'class-validator';
import { UserType } from 'src/role/roles.entity';

import { ApiProperty } from '@nestjs/swagger';

// import { ApiProperty } from '@nestjs/swagger';

export class CreateSocialauthdto {
  @IsNotEmpty()
  @ApiProperty()
  email: string;

  @IsNotEmpty()
  @ApiProperty()
  social_Id: string;

  @IsNotEmpty()
  @ApiProperty()
  name: string;

  @ApiProperty()
  @IsNotEmpty()
  Type: UserType;

  @ApiProperty()
  callId: number;
}

export class LoginSocialauthdto {
  @IsNotEmpty()
  @ApiProperty()
  email: string;

  @ApiProperty()
  @IsNotEmpty()
  Type: UserType;

  // @ApiProperty()
  // @IsNotEmpty()
  // socialType: string;

  @ApiProperty()
  device_Token: string;

  @IsNotEmpty()
  @ApiProperty()
  social_Id: string;
}
