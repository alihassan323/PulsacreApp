/* eslint-disable prettier/prettier */
import { AppointmentPayment } from 'src/AppointmentPayment/AppointmentPayment.entity';
/* eslint-disable prettier/prettier */
import { User } from 'src/auth/user.entity';

//import * as uuid from 'uuid';
import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';

import { CreatePatientAccountDto } from './dto/CreatePatientAccount.dto';
import { UpdatePatientAccountDto } from './dto/UpdatePatientAccount.dto';
import { PatientAccount } from './PatientAccount.entity';
import { PatientAccountRepository } from './PatientAccount.repository';

@Injectable()
export class PatientAccountService {
  constructor(
    @InjectRepository(PatientAccountRepository)
    private patientAccountRepository: PatientAccountRepository,
  ) {}

  async getPatientAccount() {
    const patientsaccounts = await this.patientAccountRepository.find({
      relations: ['patient'],
    });
    const arr = [];
    patientsaccounts.forEach((element) => {
      arr.push({
        userId: element.patient.id,
        name: element.patient.name,
        email: element.patient.email,
        amount: element.amount,
        transaction_id: element.transaction_id,
        datetime: element.datetime,
      });
    });
    return arr;
  }

  async getPatientAccountById(id: number) {
    const patientsaccounts = await this.patientAccountRepository.find({
      where: { patient: id },
      relations: ['patient'],
    });
    const arr = [];
    patientsaccounts.forEach((element) => {
      arr.push({
        id: element.id,
        userId: element.patient.id,
        name: element.patient.name,
        email: element.patient.email,
        amount: element.amount,
        transaction_id: element.transaction_id,
        datetime: element.datetime,
      });
    });

    if (!patientsaccounts) {
      throw new NotFoundException(`Patients Accounts with Id"${id}" not found`);
    }
    return arr;
  }

  async createPatientAccount(createPatientAccountDto: CreatePatientAccountDto) {
    let patientAccount = new PatientAccount();
    patientAccount = Object.assign(patientAccount, createPatientAccountDto);
    await PatientAccount.save(patientAccount);
    const user = await User.findOne({
      where: { id: createPatientAccountDto.patient },
    });
    user.Wallet += createPatientAccountDto.amount;
    await User.save(user);
    return patientAccount;
  }

  async getPatientavailablecredit(id: number) {
    const user = await User.findOne({ where: { id: id } });
    const available_credit = user.Wallet;

    return available_credit?.toLocaleString('en-US');
  }

  async getpatienttransactiondetails(id: number) {
    const patientaccount = await PatientAccount.find({
      where: { patient: id },
      relations: ['patient'],
    });
    const appointmentpayment = await AppointmentPayment.find({
      where: { patient: id },
      relations: ['patient'],
    });
    const arr = [];
    patientaccount.forEach((element) => {
      arr.push({
        type: 'Wallet',
        cash: element.amount,
        datetime: element.datetime,
      });
    });
    appointmentpayment.forEach((element1) => {
      arr.push({
        type: 'Video Call',
        cash: element1.amountPaid,
        datetime: element1.datetime,
      });
    });
    arr.sort(function (a, b) {
      return b.datetime - a.datetime;
    });
    return arr;
  }

  async updateAmount(
    id: number,
  ) {
    const user = await User.findOne({ where: { id: id } });
    user.Wallet=0;
    user.totalEarning=0;
    user.totalPaid=0;
    user.totalEarning=0;
    await User.save(user);
    return 'Record updated';
  }
}
