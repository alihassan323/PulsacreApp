/* eslint-disable prettier/prettier */
//import * as uuid from 'uuid';
import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';

import { DoctorCategory } from './doctorCategory.entity';
import { DoctorCategoryRepository } from './doctorCategory.repository';
import { CreateDoctorCategoryDto } from './dto/create-doctorCategory.dto';
import { UpdateDoctorCategoryDto } from './dto/update-doctorCategory.dto';

@Injectable()
export class DoctorCategoryService {
  constructor(
    @InjectRepository(DoctorCategoryRepository)
    private doctorCategoryRepository: DoctorCategoryRepository,
  ) {}

  async getDoctorCategory(): Promise<DoctorCategory[]> {
    const doctorCategory = await DoctorCategory.find();
    return doctorCategory;
  }

  async findDoctorCategoryById(id: number) {
    const found = await DoctorCategory.findOne(id);
    if (!found) {
      throw new NotFoundException(`DoctorCategory with id"${id}" not found`);
    }
    return found;
  }

  async createDoctorCategory(
    createDoctorCategoryDto: CreateDoctorCategoryDto,
  ): Promise<DoctorCategory> {
    const doctorCategory = new DoctorCategory();
    Object.assign(doctorCategory, createDoctorCategoryDto);
    return await DoctorCategory.save(doctorCategory);
  }

  async deleteDoctorCategory(id: number): Promise<void> {
    const doctorCategory = await this.doctorCategoryRepository.delete(id);
    if (doctorCategory.affected == 0) {
      throw new NotFoundException(`DoctorCategory with ID "${id}" not found `);
    }
  }

  async updateDoctorCategory(
    id: number,
    updateDoctorCategoryDto: UpdateDoctorCategoryDto,
  ): Promise<DoctorCategory> {
    const doctorCategory = await this.findDoctorCategoryById(id);
    Object.assign(doctorCategory, updateDoctorCategoryDto);
    return DoctorCategory.save(doctorCategory);
  }
}
