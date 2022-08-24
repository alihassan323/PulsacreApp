/* eslint-disable prettier/prettier */
//import * as uuid from 'uuid';
import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';

import { CreateRoleDto } from './dto/create-role.dto';
import { Role, UserType } from './roles.entity';
import { RoleRepository } from './roles.repository';

@Injectable()
export class RolesService {
  constructor(
    @InjectRepository(RoleRepository)
    private roleRepository: RoleRepository,
  ) {}

  async getRoles(): Promise<Role[]> {
    const tasks = await Role.find();
    return tasks;
  }

  async getRoleByType(Type: UserType): Promise<Role> {
    const found = await this.roleRepository.findOne({ Type: Type });
    if (!found) {
      throw new NotFoundException(`Role with Type"${Type}" not found`);
    }
    return found;
  }

  async createRole(createRoleDto: CreateRoleDto): Promise<Role> {
    const task = new Role();
    const createRole = Object.assign(task, createRoleDto);
    await Role.save(createRole);
    return createRole;
  }

  async deleteRole(id: number): Promise<void> {
    const result = await this.roleRepository.delete(id);
    if (result.affected == 0) {
      throw new NotFoundException(`Role with ID "${id}" not found `);
    }
  }
}
