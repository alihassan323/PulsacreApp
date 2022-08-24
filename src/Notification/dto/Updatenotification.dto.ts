/* eslint-disable prettier/prettier */
import { PartialType } from '@nestjs/mapped-types';

import { CreateDoctorPaymentDto } from './createNotification.dto';

export class UpdateDoctorPaymentDto extends PartialType(
  CreateDoctorPaymentDto,
) {}
