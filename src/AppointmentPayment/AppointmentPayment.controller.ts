/* eslint-disable prettier/prettier */
import { Body, Controller, Delete, Get, Param, Post } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';

import { AppointmentPaymentService } from './AppointmentPayment.service';
import {
	CreatePatientAppointmentDto,
	CreatepatPaymentDto,
	GetDoctorTransactionDto,
} from './dto/CreateAppointmentPayment.dto';

@ApiTags('AppointmentPayment')
@Controller('AppointmentPayment')
export class AppointmentPaymentController {
  constructor(private appointmentPaymentService: AppointmentPaymentService) {}

  @Get('/:id/todayPatientsandEarning')
  todayPatientsandEarning(@Param('id') id: number) {
    return this.appointmentPaymentService.todayPatientsandEarning(id);
  }

  @Post('/:id/getDoctorTransasctionHistory')
  getDoctorTransasctionHistory(
    @Param('id') id: number,
    @Body() getDoctorTransactionDto: GetDoctorTransactionDto,
  ) {
    return this.appointmentPaymentService.getDoctorTransasctionHistory(
      id,
      getDoctorTransactionDto,
    );
  }

  @Get('/:id/getdoctortransactiondetails')
  getpatienttransactiondetails(@Param('id') id: number) {
    return this.appointmentPaymentService.getdoctortransactiondetails(id);
  }

  // @Get('/:id/getDoctorTotalEarning')
  // getDoctorTotalEarning(@Param('id') id: number) {
  //   return this.appointmentPaymentService.getDoctorTotalEarning(id);
  // }

  // @Get('/:id/getDoctorTotalWithdrawn')
  // getDoctorTotalWithdrawn(@Param('id') id: number) {
  //   return this.appointmentPaymentService.getDoctorTotalWithdrawn(id);
  // }

  // @Get('/:id/getDoctorAvailableBalance')
  // getDoctorAvailableBalance(@Param('id') id: number) {
  //   return this.appointmentPaymentService.getDoctorAvailableBalance(id);
  // }

  @Get('/:id/getDoctorSummary')
  getDoctorSummary(@Param('id') id: number) {
    return this.appointmentPaymentService.getDoctorSummary(id);
  }

  @Get('/:id/getDoctorCallHistory')
  getDoctorCallHistory(@Param('id') id: number) {
    return this.appointmentPaymentService.getDoctorCallHistory(id);
  }

  @Get('/:id/getPatientCallHistory')
  getPatientCallHistory(@Param('id') id: number) {
    return this.appointmentPaymentService.getPatientCallHistory(id);
  }

  @Get('/:id/getPatientTotalpaid')
  getPatientTotalpaid(@Param('id') id: number) {
    return this.appointmentPaymentService.getPatientTotalpaid(id);
  }

  @Post()
  createappointmentPayment(
    @Body() createPatientAppointmentDto: CreatePatientAppointmentDto,
  ) {
    return this.appointmentPaymentService.createappointmentPayment(
      createPatientAppointmentDto,
    );
  }

  @Post('/:PatienttoAdminPayment')
  AdmintodoctorPayment(@Body() createpatPaymentDto: CreatepatPaymentDto) {
    return this.appointmentPaymentService.PatienttoAdminPayment(
      createpatPaymentDto,
    );
  }

  @Delete('/:id')
  appointment(@Param('id') id: number) {
    return this.appointmentPaymentService.appointment(id);
  }
}
