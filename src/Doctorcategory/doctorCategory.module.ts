/* eslint-disable prettier/prettier */
import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import { DoctorCategoryController } from './doctorCategory.controller';
import { DoctorCategoryRepository } from './doctorCategory.repository';
import { DoctorCategoryService } from './doctorCategory.service';

@Module({
  imports: [TypeOrmModule.forFeature([DoctorCategoryRepository])],
  exports: [DoctorCategoryService, TypeOrmModule],
  controllers: [DoctorCategoryController],
  providers: [DoctorCategoryService],
})
export class DoctorCategoryModule {}
