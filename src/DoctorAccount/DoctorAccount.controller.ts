/* eslint-disable prettier/prettier */
import { Body, Controller, Delete, Get, Param, Post } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';

import { DoctorAccountService } from './DoctorAccount.service';

@ApiTags('DoctorAccount')
@Controller('doctorAccount')
export class DoctorAccountController {
  constructor(private doctorAccountService: DoctorAccountService) {}

  // @Get()
  // getRoles() {
  //   return this.doctorAccountService.getRoles();
  // }

  // @Post()
  // createRole(@Body() createRoleDto: CreateDoctorAccountDto) {
  //   return this.doctorAccountService.createRole(createRoleDto);
  // }

  // @Delete('/:id')
  // deleteRole(@Param('id') id: number) {
  //   return this.doctorAccountService.deleteRole(id);
  // }
}
