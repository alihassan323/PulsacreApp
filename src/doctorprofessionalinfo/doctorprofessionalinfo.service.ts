import { isNotEmpty } from 'class-validator';
import { userInfo } from 'os';
import { DoctorProfile } from 'src/Doctorsprofile/doctorprofile.entity';

/* eslint-disable prettier/prettier */
import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';

import { DoctorProfessionalInfo } from './doctorprofessionalinfo.entity';
import { DoctorProfessionalInfoRepository } from './doctorprofessionalinfo.repository';
import { UpdateDoctorProfessionalInfoDto } from './dto/updatedoctorprofessionalinfo.dto';

@Injectable()
export class DoctorProfessionalInfoService {
  constructor(
    @InjectRepository(DoctorProfessionalInfoRepository)
    private doctorProfessionalInfoRepository: DoctorProfessionalInfoRepository,
  ) {}

  async getDoctorProfessionalInfo() {
    const found = await this.doctorProfessionalInfoRepository.find({
      relations: ['user', 'areaofSpeciality'],
    });

    const result = [];
    const doctor = await DoctorProfile.find({
      relations: ['user'],
    });

    found.forEach((element) => {
      delete element.user.password;
      delete element.user.doctorProfile;
      delete element.user.doctorProfessionalInfo;
      delete element.user.usersMedicalInfo;
      delete element.user.usersProfile;
      delete element.certifications;
      delete element.experiences;
      delete element.user.socialauth;
      delete element.user.favoriteDoctors;
      delete element.user.favoriteDoctors1;
      delete element.user.appointmentPayments;
      delete element.user.appointmentPayment;
      doctor.forEach((element1) => {
        delete element1.user.password;
        delete element1.user.doctorProfile;
        delete element1.user.doctorProfessionalInfo;
        delete element1.user.usersMedicalInfo;
        delete element1.user.usersProfile;
        delete element1.user.socialauth;
        delete element1.user.favoriteDoctors;
        delete element1.user.favoriteDoctors1;
        delete element1.user.appointmentPayment;
        delete element1.user.appointmentPayments;

        if (element.user.id === element1.user.id) {
          result.push({
            ...element,
            profilePicture: element1.profilePicture,
            about: element1.about,
            contact: element1.contact,
          });
        }
      });
    });
    return result;
  }

  async getDoctorProfessionalInfoById(id: number) {
    const found = await DoctorProfessionalInfo.findOne({
      where: {
        user: id,
      },
      relations: ['user', 'areaofSpeciality'],
    });
    if (!found) {
      throw new NotFoundException(
        `DoctorProfessionalInfo with UserID"${id}" not found`,
      );
    }
    delete found.user.password;
    delete found.user.appointmentPayment;
    delete found.user.doctorProfessionalInfo;
    //delete found.user.doctorProfile;
    delete found.user.usersProfile;
    delete found.user.usersMedicalInfo;
    delete found.user.socialauth;
    delete found.user.favoriteDoctors;
    delete found.user.favoriteDoctors1;

    return found;
  }

  async deleteDoctorProfessionalInfo(id: number): Promise<void> {
    const result = await this.doctorProfessionalInfoRepository.delete(id);
    if (result.affected == 0) {
      throw new NotFoundException(`MedicalInfo with ID "${id}" not found `);
    }
  }

  async updateDoctorProfessionalInfo(
    id: number,
    updateDoctorProfessionalInfoDto: UpdateDoctorProfessionalInfoDto,
  ) {
    const doctorprofessionalinfo = await DoctorProfessionalInfo.findOne({
      where: { user: id },
      relations: ['user', 'areaofSpeciality'],
    });
    if (updateDoctorProfessionalInfoDto.certifications.length == 0) {
      return 'Certifications should not be empty';
    }
    const object = Object.assign(
      doctorprofessionalinfo,
      updateDoctorProfessionalInfoDto,
    );
    await DoctorProfessionalInfo.save(object);
    delete doctorprofessionalinfo.user.password;
    delete doctorprofessionalinfo.user.doctorPayment;
    delete doctorprofessionalinfo.user.doctorProfessionalInfo;
    delete doctorprofessionalinfo.user.doctorProfile;
    delete doctorprofessionalinfo.user.usersMedicalInfo;
    delete doctorprofessionalinfo.user.usersProfile;
    delete doctorprofessionalinfo.user.socialauth;
    delete doctorprofessionalinfo.user.favoriteDoctors;
    delete doctorprofessionalinfo.user.favoriteDoctors1;

    return object;
  }
}
