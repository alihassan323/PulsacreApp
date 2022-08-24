/* eslint-disable prettier/prettier */
import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import { DoctorProfessionalInfoServiceController } from './doctorprofessionalinfo.controller';
import { DoctorProfessionalInfoRepository } from './doctorprofessionalinfo.repository';
import { DoctorProfessionalInfoService } from './doctorprofessionalinfo.service';

@Module({
  imports: [TypeOrmModule.forFeature([DoctorProfessionalInfoRepository])],
  exports: [DoctorProfessionalInfoService, TypeOrmModule],
  controllers: [DoctorProfessionalInfoServiceController],
  providers: [DoctorProfessionalInfoService],
})
export class DoctorProfessionalInfoModule {}
