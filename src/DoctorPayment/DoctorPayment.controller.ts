/* eslint-disable prettier/prettier */
import { Body, Controller, Delete, Get, Param, Post } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';

import { DoctorPaymentService } from './DoctorPayment.service';
import {
	CreateDoctorPaymentDto,
	CreatePaymentDto,
} from './dto/CreateDoctorPayment.dto';

@ApiTags('DoctorPayment')
@Controller('DoctorPayment')
export class DoctorPaymentController {
  constructor(private doctorPaymentService: DoctorPaymentService) {}

  @Get()
  getdoctorPayment() {
    return this.doctorPaymentService.getdoctorPayment();
  }

  @Post()
  createDoctorPayment(@Body() createDoctorPaymentDto: CreateDoctorPaymentDto) {
    return this.doctorPaymentService.createDoctorPayment(
      createDoctorPaymentDto,
    );
  }

  @Delete('/:id')
  deletedoctorPayment(@Param('id') id: number) {
    return this.doctorPaymentService.deletedoctorPayment(id);
  }

  @Get('/:id')
  getdoctorPaymentById(@Param('id') id: number) {
    return this.doctorPaymentService.getdoctorPaymentById(id);
  }

  @Post('/:AdmintodoctorPayment')
  AdmintodoctorPayment(@Body() createPaymentDto: CreatePaymentDto) {
    return this.doctorPaymentService.AdmintodoctorPayment(createPaymentDto);
  }
}
