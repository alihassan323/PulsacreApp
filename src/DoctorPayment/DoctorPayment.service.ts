import { AppointmentPayment } from 'src/AppointmentPayment/AppointmentPayment.entity';
/* eslint-disable prettier/prettier */
import { User } from 'src/auth/user.entity';

//import * as uuid from 'uuid';
import {
	ConflictException,
	Injectable,
	NotFoundException,
} from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';

import { DoctorProfile } from '../Doctorsprofile/doctorprofile.entity';
import { DoctorPayment } from './DoctorPayment.entity';
import { DoctorPaymentRepository } from './DoctorPayment.repository';
import {
	CreateDoctorPaymentDto,
	CreatePaymentDto,
} from './dto/CreateDoctorPayment.dto';

@Injectable()
export class DoctorPaymentService {
  constructor(
    @InjectRepository(DoctorPaymentRepository)
    private doctorPaymentRepository: DoctorPaymentRepository,
  ) {}

  async getdoctorPayment() {
    const doctorPayment = await this.doctorPaymentRepository.find({ 
      relations: ['doctor'],
    });
    doctorPayment.forEach((element) => {
      delete element.doctor.doctorProfile;
      delete element.doctor.doctorProfessionalInfo;
      delete element.doctor.doctorPayment;
      delete element.doctor.usersMedicalInfo;
      delete element.doctor.usersProfile;
      delete element.doctor.appointmentPayment;
      delete element.doctor.password;
      delete element.doctor.notification;
      delete element.doctor.socialauth;
      delete element.doctor.vitalsInfo;
      delete element.doctor.appointmentPayments;
      delete element.doctor.favoriteDoctors;
      delete element.doctor.favoriteDoctors1;
    });
    return doctorPayment;
  }

  async getdoctorPaymentById(id: number) {
    const doctorPayment = await this.doctorPaymentRepository.find({
      where: { doctor: id },
      relations: ['doctor'],
    });
    doctorPayment.forEach(element => {
      delete element.doctor.appointmentPayment;
      delete element.doctor.appointmentPayments;
      delete element.doctor.doctorProfessionalInfo;
      delete element.doctor.password;
      delete element.doctor.favoriteDoctors;
      delete element.doctor.favoriteDoctors1;
      delete element.doctor.vitalsInfo;
      delete element.doctor.usersProfile;
      delete element.doctor.notification
      delete element.doctor.socialauth;
      delete element.doctor.usersMedicalInfo;
    });
    doctorPayment.sort(function (a, b) {
      return b.id - a.id;
    });
    return doctorPayment;
  }

  async createDoctorPayment(createDoctorPaymentDto: CreateDoctorPaymentDto) {
    const doctorauth = await User.findOne({
      where: { id: createDoctorPaymentDto.doctor },
    });
    const doctorPayment = new DoctorPayment();
    let check = false;
    if (
      createDoctorPaymentDto.account_Holder_name != null &&
      createDoctorPaymentDto.account_Number != null &&
      createDoctorPaymentDto.cheque_Amount != null &&
      createDoctorPaymentDto.cheque_Number != null &&
      doctorauth.Wallet >= createDoctorPaymentDto.cheque_Amount
    ) {
      Object.assign(doctorPayment, createDoctorPaymentDto);
      check = true;
      const doctor = await DoctorProfile.findOne({
        where: { user: createDoctorPaymentDto.doctor },
        relations: ['user'],
      });
      doctor.about = createDoctorPaymentDto.about;
      await DoctorProfile.save(doctor);

      const authtable = await User.findOne({
        where: { id: createDoctorPaymentDto.doctor },
      });
      authtable.totalWithdrawn =
        authtable.totalWithdrawn + createDoctorPaymentDto.cheque_Amount;
      authtable.Wallet =
        authtable.Wallet - createDoctorPaymentDto.cheque_Amount;
      await User.save(authtable);
    }

    if (check) {
      return await DoctorPayment.save(doctorPayment);
    } else {
      throw new ConflictException('Wallet amount is less than withdraw.');
    }
  }

  async deletedoctorPayment(id: number): Promise<void> {
    const deletedoctorPayment = await this.doctorPaymentRepository.delete(id);
    if (deletedoctorPayment.affected == 0) {
      throw new NotFoundException(`doctorPayment with ID "${id}" not found `);
    }
  }

  async AdmintodoctorPayment(createPaymentDto: CreatePaymentDto) {
    const doctors = await DoctorPayment.find({ relations: ['doctor'] });
    const arr = [];

    let date1 = createPaymentDto.date1;
    let date2 = createPaymentDto.date2;

    date1 = new Date(date1);
    const date3 =
      date1.getFullYear() +
      '-' +
      (date1.getMonth() + 1) +
      '-' +
      date1.getDate();

    date2 = new Date(date2);
    const date4 =
      date2.getFullYear() +
      '-' +
      (date2.getMonth() + 1) +
      '-' +
      date2.getDate();

    doctors.forEach((element) => {
      let date5 = element.datetime;
      date5 = new Date(date5);
      const date6 =
        date5.getFullYear() +
        '-' +
        (date5.getMonth() + 1) +
        '-' +
        date5.getDate();

      if (date6 >= date3 && date6 <= date4) {
        arr.push({
          doctorId: element.doctor.id,
          doctor_Name: element.doctor.name,
          payment: element.cheque_Amount,
          cheque_Number: element.cheque_Number,
          account_Holder_Name: element.account_Holder_name,
          account_Number: element.account_Number,
          datetime: element.datetime,
        });
      }
    });
    arr.sort(function (a, b) {
      return b.datetime - a.datetime;
    });
    return arr;
  }
}
