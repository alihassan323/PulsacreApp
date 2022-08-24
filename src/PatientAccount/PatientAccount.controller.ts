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

import { CreatePatientAccountDto } from './dto/CreatePatientAccount.dto';
import { UpdatePatientAccountDto } from './dto/UpdatePatientAccount.dto';
import { PatientAccountService } from './PatientAccount.service';

@ApiTags('PatientAccount')
@Controller('PatientAccount')
export class PatientAccountController {
  constructor(private patientAccountService: PatientAccountService) {}

  @Post()
  createPatientAccount(
    @Body() createPatientAccountDto: CreatePatientAccountDto,
  ) {
    return this.patientAccountService.createPatientAccount(
      createPatientAccountDto,
    );
  }

  @Get()
  getPatientAccount() {
    return this.patientAccountService.getPatientAccount();
  }

  @Get('/:id')
  getPatientAccountById(@Param('id') id: number) {
    return this.patientAccountService.getPatientAccountById(id);
  }

  @Get('/:id/availablecredit')
  getPatientavailablecredit(@Param('id') id: number) {
    return this.patientAccountService.getPatientavailablecredit(id);
  }

  @Get('/:id/transactiondetails')
  getpatienttransactiondetails(@Param('id') id: number) {
    return this.patientAccountService.getpatienttransactiondetails(id);
  }

  @Put('/:id/accountsupdatetozero')
  updateAmount(
    @Param('id') id: number,
  ) {
    return this.patientAccountService.updateAmount(id);
  }
}
