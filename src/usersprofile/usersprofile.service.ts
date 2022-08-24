/* eslint-disable prettier/prettier */
import { GetUserDto } from 'src/auth/dto/update-auth.dto';

//import * as uuid from 'uuid';
import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';

import { UpdateUsersProfileDto } from './dto/updateuserprofile.dto';
import { UsersProfile } from './usersprofile.entity';
import { UsersProfileRepository } from './usersprofile.repository';

@Injectable()
export class UsersprofileService {
  constructor(
    @InjectRepository(UsersProfileRepository)
    private usersProfileRepository: UsersProfileRepository,
  ) {}

  async getUsersProfile(): Promise<UsersProfile[]> {
    const found = await this.usersProfileRepository.find({
      relations: ['user'],
    });
    found.forEach((element) => {
      delete element.user.password;
      delete element.user.usersProfile;
      delete element.user.usersMedicalInfo;
      delete element.user.appointmentPayment;
      delete element.user.doctorProfile;
      delete element.user.doctorProfessionalInfo;
      delete element.user.doctorPayment;
      delete element.user.socialauth;
      delete element.user.favoriteDoctors;
      delete element.user.favoriteDoctors1;
      delete element.user.appointmentPayments;
      delete element.user.vitalsInfo;
      delete element.user.notification
    });
    return found;
  }

  async getuserprofileById(id: number): Promise<UsersProfile> {
    const found = await this.usersProfileRepository.findOne({
      where: { user: id },
      relations: ['user'],
    });
    if (!found) {
      throw new NotFoundException(`UsersProfile with ID"${id}" not found`);
    }
    delete found.user.password;
    delete found.user.usersProfile;
    delete found.user.usersMedicalInfo;
    delete found.user.appointmentPayment;
    delete found.user.doctorProfile;
    delete found.user.doctorProfessionalInfo;
    delete found.user.doctorPayment;
    delete found.user.socialauth;
    delete found.user.favoriteDoctors;
    delete found.user.favoriteDoctors1;
    delete found.user.appointmentPayments;
    delete found.user.vitalsInfo;
    delete found.user.notification
    return found;
  }

  async deleteUsersProfile(id: number): Promise<void> {
    const result = await this.usersProfileRepository.delete(id);
    if (result.affected == 0) {
      throw new NotFoundException(`UsersProfile with ID "${id}" not found `);
    }
  }

  async updateuserprofile(
    id: number,
    updateUsersProfileDto: UpdateUsersProfileDto,
  ): Promise<UsersProfile> {
    const userprofile = await UsersProfile.findOne({
      where: { user: id },
      relations: ['user'],
    });
    Object.assign(userprofile, updateUsersProfileDto);
    await UsersProfile.save(userprofile);
    delete userprofile.user.password;
    delete userprofile.user.appointmentPayment;
    delete userprofile.user.appointmentPayments;
    delete userprofile.user.favoriteDoctors;
    delete userprofile.user.favoriteDoctors1;
    delete userprofile.user.doctorPayment;
    delete userprofile.user.doctorProfessionalInfo;
    delete userprofile.user.doctorProfile;
    delete userprofile.user.usersMedicalInfo;
    delete userprofile.user.socialauth;

    return userprofile;
  }

  // async getUserByStatus(getUserDto: GetUserDto) {
  //   const atts = [];
  //   const user = await this.getUsersProfile();
  //   user.forEach((element) => {
  //     if (element.user.status == getUserDto.status) {
  //       atts.push(element);
  //     }
  //   });
  //   return atts;
  // }
}
