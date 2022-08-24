import { DoctorProfessionalInfoModule } from 'src/doctorprofessionalinfo/doctorprofessionalinfo.module';

/* eslint-disable prettier/prettier */
import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import { FavoriteDoctorsController } from './favoriteDoctors.controller';
import { FavoriteDoctorsRepository } from './favoriteDoctors.repository';
import { FavoriteDoctorsService } from './favoriteDoctors.service';

@Module({
  imports: [TypeOrmModule.forFeature([FavoriteDoctorsRepository]),DoctorProfessionalInfoModule],
  exports: [FavoriteDoctorsService, TypeOrmModule],
  controllers: [FavoriteDoctorsController],
  providers: [FavoriteDoctorsService],
})
export class FavoriteDoctorsModule {}
