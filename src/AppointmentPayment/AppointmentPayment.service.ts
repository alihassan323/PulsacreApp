/* eslint-disable prettier/prettier */
import { User } from 'src/auth/user.entity';

//import * as uuid from 'uuid';
import { ConflictException, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';

import { DoctorPayment } from '../DoctorPayment/DoctorPayment.entity';
import { DoctorProfessionalInfo } from '../doctorprofessionalinfo/doctorprofessionalinfo.entity';
import { AppointmentPayment } from './AppointmentPayment.entity';
import { AppointmentPaymentRepository } from './AppointmentPayment.repository';
import {
	CreatePatientAppointmentDto,
	CreatepatPaymentDto,
	GetDoctorTransactionDto,
} from './dto/CreateAppointmentPayment.dto';

@Injectable()
export class AppointmentPaymentService {
  constructor(
    @InjectRepository(AppointmentPaymentRepository)
    private appointmentPaymentRepository: AppointmentPaymentRepository,
  ) {}

  async todayPatientsandEarning(id: number) {
    const foundDoctor = await this.appointmentPaymentRepository.find({
      where: { doctor: id },
    });

    const today = new Date();
    const f1 =
      today.getFullYear() +
      '-' +
      (today.getMonth() + 1) +
      '-' +
      today.getDate();
    const arr = [];
    let earned = 0;
    foundDoctor.forEach((element) => {
      let date1 = element.datetime;
      date1 = new Date(date1);
      const date =
        date1.getFullYear() +
        '-' +
        (date1.getMonth() + 1) +
        '-' +
        date1.getDate();
      if (f1 == date) {
        arr.push({ element });
        earned += element.amountPaid;
      }
    });
    const finalarray = {
      PatientsToday: arr.length,
      Earned: earned,
    };
    return finalarray;
  }

  async createappointmentPayment(
    createPatientAppointmentDto: CreatePatientAppointmentDto,
  ) {
    const appointmentPayment = new AppointmentPayment();
    Object.assign(appointmentPayment, createPatientAppointmentDto);

    const doctorpro = await DoctorProfessionalInfo.findOne({
      where: { user: createPatientAppointmentDto.doctor },
    });
    const doctor = await User.findOne({
      where: { id: createPatientAppointmentDto.doctor },
    });
    const patient = await User.findOne({
      where: { id: createPatientAppointmentDto.patient },
    });
    appointmentPayment.amountPaid = doctorpro.consultation_Fee;
    if (patient.Wallet >= doctorpro.consultation_Fee) {
      patient.Wallet = patient.Wallet - doctorpro.consultation_Fee;
      doctor.Wallet = doctor.Wallet + doctorpro.consultation_Fee;
      doctor.totalEarning = doctor.totalEarning + doctorpro.consultation_Fee; 
      await User.save(patient);
      await User.save(doctor);
      await AppointmentPayment.save(appointmentPayment);

      const Patient1 = await AppointmentPayment.find({
        where: { patient: appointmentPayment.patient },
      });
      let TotalPaid = 0;
      Patient1.forEach((element) => {
        TotalPaid += element.amountPaid;
      });

      const patient2 = await User.findOne({
        where: { id: createPatientAppointmentDto.patient },
      });
      patient2.totalPaid = TotalPaid;
      await User.save(patient2);

      return appointmentPayment;
    } else {
      throw new ConflictException(
        `Call can't proceed because your Wallet Amount is less than Doctor consultation_fee`,
      );
    }
  }
  async getDoctorTotalEarning(id: number) {
    const doctor = await AppointmentPayment.find({ where: { doctor: id } });
    let totalearning = 0;
    doctor.forEach((element) => {
      totalearning += element.amountPaid;
    });
    const finalarray = {
      TotalEarning: totalearning,
    };

    return finalarray;
  }

  async getDoctorTotalWithdrawn(id: number) {
    const doctor = await User.findOne({ where: { id: id } });
    const totalwithdrawn = {
      totalWithdrawn: doctor.totalWithdrawn,
    };
    return totalwithdrawn;
  }

  async getDoctorAvailableBalance(id: number) {
    const doctor = await User.findOne({ where: { id: id } });
    const Availablebalance = {
      availablebalance: doctor.Wallet,
    };
    return Availablebalance;
  }

  async getDoctorSummary(id: number) {
    const doctor = await AppointmentPayment.find({ where: { doctor: id } });
    let totalearning = 0;
    doctor.forEach((element) => {
      totalearning += element.amountPaid;
    });
    const finalarray = {
      totalEarning: totalearning,
    };
    const user = await User.findOne({ where: { id: id } });
    user.totalEarning = totalearning;
    await User.save(user);

    const doctor1 = await User.findOne({ where: { id: id } });
    const totalwithdrawn = {
      totalWithdrawn: doctor1.totalWithdrawn,
    };

    const doctor2 = await User.findOne({ where: { id: id } });
    const Availablebalance = {
      availableBalance: doctor2.Wallet,
    };

    const DoctorSummary = {
      ...finalarray,
      ...totalwithdrawn,
      ...Availablebalance,
    };

    return DoctorSummary;
  }

  async getDoctorCallHistory(id: number) {
    const doctor = await AppointmentPayment.find({
      where: { doctor: id },
      relations: ['patient'],
    });
    const arr = [];
    doctor.forEach(async (element) => {
      arr.push({
        patientId: element.patient.id,
        name: element.patient.name,
        profilePicture: element.patient.usersProfile.profilePicture,
        dateTime: element.datetime,
      });
    });
    arr.sort(function (a, b) {
      return b.dateTime - a.dateTime;
    });

    return arr;
  }

  async getPatientCallHistory(id: number) {
    const patient = await AppointmentPayment.find({
      where: { patient: id },
      relations: ['doctor'],
    });
    const arr = [];
    patient.forEach(async (element) => {
      arr.push({
        doctorId: element.doctor.id,
        name: element.doctor.name,
        charges: element.amountPaid,
        profilePicture: element.doctor.doctorProfile.profilePicture,
        dateTime: element.datetime,
      });
    });
    arr.sort(function (a, b) {
      return b.dateTime - a.dateTime;
    });
    return arr;
  }

  async getPatientTotalpaid(id: number) {
    const Patient = await AppointmentPayment.find({
      where: { patient: id },
    });
    let TotalPaid = 0;
    Patient.forEach((element) => {
      TotalPaid += element.amountPaid;
    });

    const paid = {
      TotalPaid: TotalPaid,
    };

    return paid;
  }

  async getDoctorTransasctionHistory(
    id: number,
    getDoctorTransactionDto: GetDoctorTransactionDto,
  ) {
    const arr = [];
    const doctorPayment = await DoctorPayment.find({ where: { doctor: id } });
    const doctor = await AppointmentPayment.find({ where: { doctor: id } });
    let date1 = getDoctorTransactionDto.date1;
    let date2 = getDoctorTransactionDto.date2;

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

    doctor.forEach((element) => {
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
          type: 'Appointment',
          cash: element.amountPaid,
          datetime: element.datetime,
        });
      }
    });

    doctorPayment.forEach((element) => {
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
          type: 'Withdrawn Earning',
          cash: element.cheque_Amount,
          datetime: element.datetime,
        });
      }
    });
    arr.sort(function (a, b) {
      return b.datetime - a.datetime;
    });
    return arr;
  }

  async getdoctortransactiondetails(id: number) {
    const doctorPayment = await DoctorPayment.find({
      where: { doctor: id },
      relations: ['doctor'],
    });
    const appointmentpayment = await AppointmentPayment.find({
      where: { doctor: id },
      relations: ['doctor'],
    });
    const arr = [];
    doctorPayment.forEach((element) => {
      arr.push({
        type: 'Withdrawn Earning',
        cash: element.cheque_Amount,
        datetime: element.datetime,
      });
    });
    appointmentpayment.forEach((element1) => {
      arr.push({
        type: 'Appointment',
        cash: element1.amountPaid,
        datetime: element1.datetime,
      });
    });
    arr.sort(function (a, b) {
      return b.datetime - a.datetime;
    });
    return arr;
  }

  async PatienttoAdminPayment(createpatPaymentDto: CreatepatPaymentDto) {
    const patient = await AppointmentPayment.find({
      relations: ['patient', 'doctor'],
    });
    const arr = [];
    let date1 = createpatPaymentDto.date1;
    let date2 = createpatPaymentDto.date2;

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

    patient.forEach((element) => {
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
          patientId: element.patient.id,
          patient_Name: element.patient.name,
          doctorId: element.doctor.id,
          doctor_Name: element.doctor.name,
          payment: element.amountPaid,
          datetime: element.datetime,
        });
      }
    });
    arr.sort(function (a, b) {
      return b.datetime - a.datetime;
    });
    return arr;
  }

  async appointment(id: number) {
    await AppointmentPayment.delete(id);
  }
}
