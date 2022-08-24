/* eslint-disable prettier/prettier */
import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import { PatientAccountController } from './PatientAccount.controller';
import { PatientAccountRepository } from './PatientAccount.repository';
import { PatientAccountService } from './PatientAccount.service';

@Module({
  imports: [TypeOrmModule.forFeature([PatientAccountRepository])],
  exports: [PatientAccountService, TypeOrmModule],
  controllers: [PatientAccountController],
  providers: [PatientAccountService],
})
export class PatientAccountModule {}
