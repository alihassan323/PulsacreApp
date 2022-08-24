import { User } from 'src/auth/user.entity';
import { DoctorProfessionalInfoService } from 'src/doctorprofessionalinfo/doctorprofessionalinfo.service';

/* eslint-disable prettier/prettier */
import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';

import { CreateFavoriteDoctorsDto, DeleteFavoriteDoctorsDto } from './dto/CreatefavoriteDoctors.dto';
import { FavoriteDoctors } from './favoriteDoctors.entity';
import { FavoriteDoctorsRepository } from './favoriteDoctors.repository';

@Injectable()
export class FavoriteDoctorsService {
  constructor(
    @InjectRepository(FavoriteDoctorsRepository)
    private favoriteDoctorsRepository: FavoriteDoctorsRepository,
    private doctorProfessionalInfoService: DoctorProfessionalInfoService,
  ) {}

  async getfavoritedoctorById(id: number) {
    const doctors = await this.favoriteDoctorsRepository.find({
      where: { patient: id },
      relations: ['doctor'],
    });
    const arr = [];
    const professionalinfo =
      await this.doctorProfessionalInfoService.getDoctorProfessionalInfo();
    doctors.forEach((element) => {
      professionalinfo.forEach((element1) => {
        if (element1.user.id == element.doctor.id) {
          arr.push({
            id: element1.user.id,
            name: element1.user.name,
            profilePicture: element1.profilePicture,
            consultation_Fee: element1.consultation_Fee,
            updatedStatus: element1.user.updatedstatus,
            callId: element1.user.callId,
            areaofSpeciality: element1.areaofSpeciality,
          });
        }
      });
    });
    return arr;
  }

  async createfavouritedoctors(
    createFavoriteDoctorsDto: CreateFavoriteDoctorsDto,
  ) {
    const doctors = await User.findOne({
      where: { id: createFavoriteDoctorsDto.doctor },
    });
    const patients = await User.findOne({
      where: { id: createFavoriteDoctorsDto.patient },
    });

    const favoriteDoctors = new FavoriteDoctors();
    Object.assign(favoriteDoctors, createFavoriteDoctorsDto);
    await FavoriteDoctors.save(favoriteDoctors);

    const arr = [];
    delete doctors.appointmentPayment;
    delete doctors.appointmentPayments;
    delete doctors.doctorPayment;
    delete doctors.doctorProfessionalInfo;
    delete doctors.doctorProfile;
    delete doctors.password;
    delete doctors.usersMedicalInfo;
    delete doctors.usersProfile;
    delete doctors.socialauth;
    delete doctors.randomNumber;
    delete doctors.favoriteDoctors;
    delete doctors.favoriteDoctors1;

    delete patients.appointmentPayment;
    delete patients.appointmentPayments;
    delete patients.doctorPayment;
    delete patients.doctorProfessionalInfo;
    delete patients.doctorProfile;
    delete patients.password;
    delete patients.usersMedicalInfo;
    delete patients.usersProfile;
    delete patients.socialauth;
    delete patients.randomNumber;
    delete patients.favoriteDoctors;
    delete patients.favoriteDoctors1;

    arr.push(doctors, patients);
    return arr;
  }

  async deletefavdoctor(deleteFavoriteDoctorsDto:DeleteFavoriteDoctorsDto): Promise<void> {
    const user = await this.favoriteDoctorsRepository.findOne({
      where: {doctor: deleteFavoriteDoctorsDto.doctor,patient:deleteFavoriteDoctorsDto.patient}
    });
    const result = await this.favoriteDoctorsRepository.delete(user.id);
    if (result.affected == 0) {
      throw new NotFoundException(`Doctor with ID "${deleteFavoriteDoctorsDto.doctor}" not found `);
    }
  }
}
