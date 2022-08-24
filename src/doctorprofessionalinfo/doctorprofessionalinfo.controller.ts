/* eslint-disable prettier/prettier */
import { Body, Controller, Delete, Get, Param, Put } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';

import { DoctorProfessionalInfoService } from './doctorprofessionalinfo.service';
import { UpdateDoctorProfessionalInfoDto } from './dto/updatedoctorprofessionalinfo.dto';

@ApiTags('Doctor Professional Info')
@Controller('doctorprofessionalinfo')
export class DoctorProfessionalInfoServiceController {
  constructor(
    private doctorProfessionalInfoService: DoctorProfessionalInfoService,
  ) {}

  @Get()
  getDoctorProfessionalInfo() {
    return this.doctorProfessionalInfoService.getDoctorProfessionalInfo();
  }

  @Get('/:id')
  getDoctorProfessionalInfoById(@Param('id') id: number) {
    return this.doctorProfessionalInfoService.getDoctorProfessionalInfoById(id);
  }

  @Delete('/:id')
  deleteDoctorProfessionalInfo(@Param('id') id: number): Promise<void> {
    return this.doctorProfessionalInfoService.deleteDoctorProfessionalInfo(id);
  }

  @Put('/:id')
  updateDoctorProfessionalInfo(
    @Param('id') id: number,
    @Body() updateDoctorProfessionalInfoDto: UpdateDoctorProfessionalInfoDto,
  ) {
    return this.doctorProfessionalInfoService.updateDoctorProfessionalInfo(
      id,
      updateDoctorProfessionalInfoDto,
    );
  }
}
