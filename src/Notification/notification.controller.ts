/* eslint-disable prettier/prettier */
import { Body, Controller, Delete, Get, Param, Post } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';

import { CreateDoctorPaymentDto } from './dto/createNotification.dto';
import { NotificationService } from './notification.service';

@ApiTags('Notification')
@Controller('Notification')
export class NotificationController {
  constructor(private notificationService: NotificationService) {}

  // @Get()
  // getdoctorPayment() {
  //   return this.doctorPaymentService.getdoctorPayment();
  // }

  // @Post()
  // createDoctorPayment(@Body() createDoctorPaymentDto: CreateDoctorPaymentDto) {
  //   return this.doctorPaymentService.createDoctorPayment(
  //     createDoctorPaymentDto,
  //   );
  // }

  // @Delete('/:id')
  // deletedoctorPayment(@Param('id') id: number) {
  //   return this.doctorPaymentService.deletedoctorPayment(id);
  // }

  // @Get('/:id')
  // getdoctorPaymentById(@Param('id') id: number) {
  //   return this.doctorPaymentService.getdoctorPaymentById(id);
  // }
}
