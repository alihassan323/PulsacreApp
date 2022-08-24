/* eslint-disable prettier/prettier */
//import * as uuid from 'uuid';
import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';

import { DoctorAccount } from './DoctorAccount.entity';
import { DoctorAccountRepository } from './DoctorAccount.repository';

@Injectable()
export class DoctorAccountService {
  constructor(
    @InjectRepository(DoctorAccountRepository)
    private doctorAccountRepository: DoctorAccountRepository,
  ) {}

  async getRoles(): Promise<DoctorAccount[]> {
    const tasks = await this.doctorAccountRepository.find();
    return tasks;
  }

  // async getRoleByType(Type: UserType): Promise<DoctorAccount> {
  //   const found = await this.doctorAccountRepository.findOne({ Type: Type });
  //   if (!found) {
  //     throw new NotFoundException(`Role with Type"${Type}" not found`);
  //   }
  //   return found;
  // }

  // async createRole(createRoleDto: CreateRoleDto): Promise<DoctorAccount> {
  //   const task = new Role();
  //   const createRole = Object.assign(task, createRoleDto);
  //   await Role.save(createRole);
  //   return createRole;
  // }

  async deleteRole(id: number): Promise<void> {
    const result = await this.doctorAccountRepository.delete(id);
    if (result.affected == 0) {
      throw new NotFoundException(`Role with ID "${id}" not found `);
    }
  }
}
