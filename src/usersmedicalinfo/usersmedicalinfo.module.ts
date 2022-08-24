import { AuthModule } from 'src/auth/auth.module';

/* eslint-disable prettier/prettier */
import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import { UsersMedicalInfoServiceController } from './usersmedicalinfo.controller';
import { UsersMedicalInfoRepository } from './usersmedicalinfo.repository';
import { UsersMedicalInfoService } from './usersmedicalinfo.service';

@Module({
  imports: [TypeOrmModule.forFeature([UsersMedicalInfoRepository]), AuthModule],
  exports: [UsersMedicalInfoService, TypeOrmModule],
  controllers: [UsersMedicalInfoServiceController],
  providers: [UsersMedicalInfoService],
})
export class UsersMedicalInfoModule {}
