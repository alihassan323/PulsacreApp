/* eslint-disable prettier/prettier */
import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import { AppointmentPaymentController } from './AppointmentPayment.controller';
import { AppointmentPaymentRepository } from './AppointmentPayment.repository';
import { AppointmentPaymentService } from './AppointmentPayment.service';

@Module({
  imports: [TypeOrmModule.forFeature([AppointmentPaymentRepository])],
  exports: [AppointmentPaymentService, TypeOrmModule],
  controllers: [AppointmentPaymentController],
  providers: [AppointmentPaymentService],
})
export class AppointmentPaymentModule {}
