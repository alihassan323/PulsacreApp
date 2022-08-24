import { GetDoctorDto } from 'src/auth/dto/update-auth.dto';

/* eslint-disable prettier/prettier */
import {
	Body,
	Controller,
	Delete,
	Get,
	Param,
	Post,
	Put,
} from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';

import { DoctorProfileService } from './doctorprofile.service';
import { UpdateDoctorProfileDto } from './dto/updatedoctorprofile.dto';

@ApiTags('Doctor profile')
@Controller('Doctorprofile')
export class DoctorProfileController {
  constructor(private doctorProfileService: DoctorProfileService) {}

  @Get()
  getdoctorProfile() {
    return this.doctorProfileService.getdoctorProfile();
  }
  // @Get('/getdoctorProfile1')
  // getdoctorProfile1() {
  //   return this.doctorProfileService.getdoctorProfile1();
  // }

  @Get('/:id')
  getdoctorprofileById(@Param('id') id: number) {
    return this.doctorProfileService.getdoctorprofileById(id);
  }

  @Put('/:id')
  updatedoctorprofile(
    @Param('id') id: number,
    @Body() updateDoctorProfileDto: UpdateDoctorProfileDto,
  ) {
    return this.doctorProfileService.updatedoctorprofile(
      id,
      updateDoctorProfileDto,
    );
  }

  @Delete('/:id')
  deleteDoctorProfile(@Param('id') id: number): Promise<void> {
    return this.doctorProfileService.deleteDoctorProfile(id);
  }
}
