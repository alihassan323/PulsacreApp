/* eslint-disable prettier/prettier */
import { IsNotEmpty } from 'class-validator';

import { PartialType } from '@nestjs/mapped-types';
import { ApiProperty } from '@nestjs/swagger';

import { CreateDoctorProfessionalInfoDto } from './createdoctorprofessionalinfo.dto';

export class UpdateDoctorProfessionalInfoDto extends PartialType(
  CreateDoctorProfessionalInfoDto,
) {
  @ApiProperty()
  @IsNotEmpty()
  areaofSpeciality: number;

  @ApiProperty()
  @IsNotEmpty()
  consultation_Fee: number;

  @ApiProperty()
  @IsNotEmpty()
  experiences: string[];

  @ApiProperty()
  @IsNotEmpty()
  certifications: [];
}
// interface certificationProperties {
//   certificationName: string;
//   certificationFileName?: string;
//   cerficationCloudLink: string;
// }
