/* eslint-disable prettier/prettier */
import { IsNotEmpty } from 'class-validator';

/* eslint-disable prettier/prettier */
import { PartialType } from '@nestjs/mapped-types';
import { ApiProperty } from '@nestjs/swagger';

import { CreatePatientAccountDto } from './CreatePatientAccount.dto';

export class UpdatePatientAccountDto extends PartialType(
  CreatePatientAccountDto,
) {}
