/* eslint-disable prettier/prettier */
import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import { DoctorAccountController } from './DoctorAccount.controller';
import { DoctorAccountRepository } from './DoctorAccount.repository';
import { DoctorAccountService } from './DoctorAccount.service';

@Module({
  imports: [TypeOrmModule.forFeature([DoctorAccountRepository])],
  exports: [DoctorAccountService, TypeOrmModule],
  controllers: [DoctorAccountController],
  providers: [DoctorAccountService],
})
export class DoctorAccountModule {}
