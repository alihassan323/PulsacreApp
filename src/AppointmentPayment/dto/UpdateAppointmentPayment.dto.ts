/* eslint-disable prettier/prettier */
import { PartialType } from '@nestjs/mapped-types';

import { CreatePatientAppointmentDto } from './CreateAppointmentPayment.dto';

export class UpdatePatientAppointmentDto extends PartialType(
  CreatePatientAppointmentDto,
) {}
