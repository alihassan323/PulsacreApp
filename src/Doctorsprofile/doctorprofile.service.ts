/* eslint-disable prettier/prettier */
import { User } from 'src/auth/user.entity';
import { DoctorPayment } from 'src/DoctorPayment/DoctorPayment.entity';
import { DoctorPaymentService } from 'src/DoctorPayment/DoctorPayment.service';

import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';

import { DoctorProfile } from './doctorprofile.entity';
import { DoctorProfileRepository } from './doctorprofile.repository';
import { UpdateDoctorProfileDto } from './dto/updatedoctorprofile.dto';

@Injectable()
export class DoctorProfileService {
  constructor(
    @InjectRepository(DoctorProfileRepository)
    private doctorProfileRepository: DoctorProfileRepository,
    private doctorPaymentService: DoctorPaymentService,
  ) {}

  async getdoctorProfile(): Promise<DoctorProfile[]> {
    const found = await this.doctorProfileRepository.find({
      relations: ['user'],
    });
    const doctors = [];

    const found2 = await DoctorPayment.find({ relations: ['doctor'] });
    found2.sort(function (a, b) {
      return a.id - b.id;
    });
    doctors.push(...found);
    found.forEach((element, index) => {
      delete element.user.password;
      delete element.user.doctorProfile;
      delete element.user.usersProfile;
      delete element.user.usersMedicalInfo;
      delete element.user.socialauth;
      delete element.user.appointmentPayment;
      delete element.user.appointmentPayments,
        delete element.user.favoriteDoctors,
        delete element.user.favoriteDoctors1,
        delete element.user.vitalsInfo,
        found2.forEach((payment) => {
          if (element.user.id === payment.doctor.id) {
            const temp = {
              ...element,
              payment: {
                id: payment.id,
                cheque_Number: payment.cheque_Number,
                account_Number: payment.account_Number,
                account_Holder_name: payment.account_Holder_name,
                cheque_Amount: payment.cheque_Amount,
                datetime: payment.datetime,
              },
            };
            doctors[index] = temp;
          }
        });
    });
    return doctors;
  }

  async getdoctorprofileById(id: number): Promise<DoctorProfile> {
    const found = await DoctorProfile.findOne({
      where: { user: id },
      relations: ['user'],
    });
    if (!found) {
      throw new NotFoundException(`UsersProfile with ID"${id}" not found`);
    }
    delete found.user.password;
    delete found.user.doctorProfile;
    delete found.user.socialauth;
    delete found.user.doctorProfessionalInfo;
    delete found.user.usersProfile;
    delete found.user.usersMedicalInfo;
    delete found.user.socialauth;
    delete found.user.favoriteDoctors,
    delete found.user.favoriteDoctors1;
    delete found.user.appointmentPayment;
    delete found.user.appointmentPayments;
    delete found.user.vitalsInfo;
    delete found.user.notification
    
    return found;
  }

  async updatedoctorprofile(
    id: number,
    updateDoctorProfileDto: UpdateDoctorProfileDto,
  ): Promise<DoctorProfile> {
    const doctorprofile = await DoctorProfile.findOne({
      where: { user: id },
      relations: ['user'],
    });
    Object.assign(doctorprofile, updateDoctorProfileDto);
    const user = await User.findOne({ where: { id: doctorprofile.user.id } });
    user.name = doctorprofile.name;
    await User.save(user);
    await DoctorProfile.save(doctorprofile);
    delete doctorprofile.user.password;
    delete doctorprofile.user.usersProfile;
    delete doctorprofile.user.doctorPayment;
    delete doctorprofile.user.doctorProfessionalInfo;
    delete doctorprofile.user.doctorProfile;
    delete doctorprofile.user.usersMedicalInfo;
    delete doctorprofile.user.socialauth;
    delete doctorprofile.user.favoriteDoctors1;
    delete doctorprofile.user.favoriteDoctors1;
    return doctorprofile;
  }

  async deleteDoctorProfile(id: number): Promise<void> {
    const result = await this.doctorProfileRepository.delete(id);
    if (result.affected == 0) {
      throw new NotFoundException(`Doctor Profile with ID "${id}" not found `);
    }
  }
}
