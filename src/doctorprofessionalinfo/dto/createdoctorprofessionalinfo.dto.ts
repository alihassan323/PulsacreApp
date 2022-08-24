/* eslint-disable prettier/prettier */
import { IsNotEmpty } from 'class-validator';

import { ApiProperty } from '@nestjs/swagger';

export class CreateDoctorProfessionalInfoDto {
  @ApiProperty()
  @IsNotEmpty()
  Area_of_Speciality: number;

  @ApiProperty()
  @IsNotEmpty()
  Consultation_Fee: number;

  @ApiProperty()
  @IsNotEmpty()
  experiences: string[];

  @ApiProperty()
  @IsNotEmpty()
  certifications: certificationProperties[];
}
interface certificationProperties {
  certificationName: string;
  certificationFileName?: string;
  cerficationCloudLink: string;
}
