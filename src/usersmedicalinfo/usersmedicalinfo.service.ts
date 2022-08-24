/* eslint-disable prettier/prettier */
//import * as uuid from 'uuid';
import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';

import { UpdateUsersMedicalInfo } from './dto/updateusersmedicalinfo.dto';
import { UsersMedicalInfo } from './usersmedicalinfo.entity';
import { UsersMedicalInfoRepository } from './usersmedicalinfo.repository';

@Injectable()
export class UsersMedicalInfoService {
  constructor(
    @InjectRepository(UsersMedicalInfoRepository)
    private usersMedicalInfoRepository: UsersMedicalInfoRepository,
  ) {}

  async getUsersMedicalInfo(): Promise<UsersMedicalInfo[]> {
    const found = await this.usersMedicalInfoRepository.find({
      relations: ['user'],
    });
    found.forEach((element) => {
      delete element.user.password;
      delete element.user.appointmentPayment;
      delete element.user.usersMedicalInfo;
      delete element.user.usersProfile;
      delete element.user.doctorProfessionalInfo;
      delete element.user.doctorProfile;
      delete element.user.socialauth;
      delete element.user.favoriteDoctors;
      delete element.user.favoriteDoctors1;
    });
    return found;
  }

  async getUsersMedicalInfoById(id: number): Promise<UsersMedicalInfo> {
    const found = await this.usersMedicalInfoRepository.findOne({
      where: {
        user: id,
      },
      relations: ['user'],
    });
    if (!found) {
      throw new NotFoundException(`MedicalInfo with ID"${id}" not found`);
    }
    delete found.user.password;
    delete found.user.appointmentPayment;
    delete found.user.usersMedicalInfo;
    delete found.user.usersProfile;
    delete found.user.doctorPayment;
    delete found.user.doctorProfessionalInfo;
    delete found.user.doctorProfile;
    delete found.user.socialauth;
    delete found.user.favoriteDoctors;
    delete found.user.favoriteDoctors1;
    return found;
  }

  async deleteUsersMedicalInfo(id: number): Promise<void> {
    const result = await this.usersMedicalInfoRepository.delete(id);
    if (result.affected == 0) {
      throw new NotFoundException(`MedicalInfo with ID "${id}" not found `);
    }
  }

  async updateUsersMedicalInfo(
    id: number,
    updateUsersMedicalInfo: UpdateUsersMedicalInfo,
  ): Promise<UsersMedicalInfo> {
    const usermedicalinfo = await UsersMedicalInfo.findOne({
      where: { user: id },
      relations: ['user'],
    });
    Object.assign(usermedicalinfo, updateUsersMedicalInfo);
    await UsersMedicalInfo.save(usermedicalinfo);
    delete usermedicalinfo.user.password;
    delete usermedicalinfo.user.usersProfile;
    delete usermedicalinfo.user.doctorPayment;
    delete usermedicalinfo.user.doctorProfessionalInfo;
    delete usermedicalinfo.user.doctorProfile;
    delete usermedicalinfo.user.usersMedicalInfo;
    delete usermedicalinfo.user.socialauth;
    delete usermedicalinfo.user.favoriteDoctors;
    delete usermedicalinfo.user.favoriteDoctors1;

    return usermedicalinfo;
  }
}
