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

import { DoctorCategoryService } from './doctorCategory.service';
import { CreateDoctorCategoryDto } from './dto/create-doctorCategory.dto';
import { UpdateDoctorCategoryDto } from './dto/update-doctorCategory.dto';

@ApiTags('DoctorCategory')
@Controller('DoctorCategory')
export class DoctorCategoryController {
  constructor(private doctorCategoryService: DoctorCategoryService) {}

  @Get()
  getDoctorCategory() {
    return this.doctorCategoryService.getDoctorCategory();
  }
  @Get(':id')
  findDoctorCategoryById(@Param('id') id: number) {
    return this.doctorCategoryService.findDoctorCategoryById(+id);
  }
  @Post()
  createDoctorCategory(
    @Body() createDoctorCategoryDto: CreateDoctorCategoryDto,
  ) {
    return this.doctorCategoryService.createDoctorCategory(
      createDoctorCategoryDto,
    );
  }

  @Delete('/:id')
  deleteDoctorCategory(@Param('id') id: number) {
    return this.doctorCategoryService.deleteDoctorCategory(id);
  }

  @Put(':id')
  updateDoctorCategory(
    @Param('id') id: number,
    @Body() updateDoctorCategoryDto: UpdateDoctorCategoryDto,
  ) {
    return this.doctorCategoryService.updateDoctorCategory(
      id,
      updateDoctorCategoryDto,
    );
  }
}
