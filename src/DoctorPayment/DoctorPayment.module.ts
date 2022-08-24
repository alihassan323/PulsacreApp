/* eslint-disable prettier/prettier */
import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import { DoctorPaymentController } from './DoctorPayment.controller';
import { DoctorPaymentRepository } from './DoctorPayment.repository';
import { DoctorPaymentService } from './DoctorPayment.service';

@Module({
  imports: [TypeOrmModule.forFeature([DoctorPaymentRepository])],
  exports: [DoctorPaymentService, TypeOrmModule],
  controllers: [DoctorPaymentController],
  providers: [DoctorPaymentService],
})
export class DoctorPaymentModule {}
