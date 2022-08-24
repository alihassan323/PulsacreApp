import { DoctorPaymentModule } from 'src/DoctorPayment/DoctorPayment.module';

/* eslint-disable prettier/prettier */
import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import { DoctorProfileController } from './doctorprofile.controller';
import { DoctorProfileRepository } from './doctorprofile.repository';
import { DoctorProfileService } from './doctorprofile.service';

@Module({
  imports: [TypeOrmModule.forFeature([DoctorProfileRepository]),DoctorPaymentModule],
  exports: [DoctorProfileService, TypeOrmModule],
  controllers: [DoctorProfileController],
  providers: [DoctorProfileService],
})
export class DoctorProfileModule {}
