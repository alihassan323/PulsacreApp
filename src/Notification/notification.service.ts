/* eslint-disable prettier/prettier */
//import * as uuid from 'uuid';
import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';

import { DoctorProfile } from '../Doctorsprofile/doctorprofile.entity';
import { CreateDoctorPaymentDto } from './dto/createNotification.dto';
import { NotificationRepository } from './notification.repository';

@Injectable()
export class NotificationService {
  constructor(
    @InjectRepository(NotificationRepository)
    private NotificationRepository: NotificationRepository,
  ) {}

  // async getdoctorPayment() {
  //   const doctorPayment = await this.doctorPaymentRepository.find({
  //     relations: ['doctor'],
  //   });
  //   doctorPayment.forEach((element) => {
  //     delete element.doctor.doctorProfile;
  //     delete element.doctor.doctorProfessionalInfo;
  //     delete element.doctor.doctorPayment;
  //     delete element.doctor.usersMedicalInfo;
  //     delete element.doctor.usersProfile;
  //     delete element.doctor.appointmentPayment;
  //     delete element.doctor.password;
  //   });
  //   return doctorPayment;
  // }

  // async getdoctorPaymentById(id: number) {
  //   const doctorPayment = await this.doctorPaymentRepository.find({
  //     where: { doctor: id },
  //     relations: ['doctor'],
  //   });
  //   doctorPayment.sort(function (a, b) {
  //     return b.id - a.id;
  //   });
  //   return doctorPayment;
  // }

  // async createDoctorPayment(createDoctorPaymentDto: CreateDoctorPaymentDto) {
  //   const doctorPayment = new DoctorPayment();
  //   let check = false;
  //   if (
  //     createDoctorPaymentDto.account_Holder_name != null &&
  //     createDoctorPaymentDto.account_Number != null &&
  //     createDoctorPaymentDto.cheque_Amount != null &&
  //     createDoctorPaymentDto.cheque_Number != null
  //   ) {
  //     Object.assign(doctorPayment, createDoctorPaymentDto);
  //     check = true;
  //   }
  //   const doctor = await DoctorProfile.findOne({
  //     where: { user: createDoctorPaymentDto.doctor },
  //     relations: ['user'],
  //   });
  //   doctor.about = createDoctorPaymentDto.about;
  //   await DoctorProfile.save(doctor);
  //   if (check) {
  //     return await DoctorPayment.save(doctorPayment);
  //   }
  // }

  // async deletedoctorPayment(id: number): Promise<void> {
  //   const deletedoctorPayment = await this.doctorPaymentRepository.delete(id);
  //   if (deletedoctorPayment.affected == 0) {
  //     throw new NotFoundException(`doctorPayment with ID "${id}" not found `);
  //   }
  // }
}
