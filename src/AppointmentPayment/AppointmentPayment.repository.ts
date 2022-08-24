/* eslint-disable prettier/prettier */
import { EntityRepository, Repository } from 'typeorm';

import { AppointmentPayment } from './AppointmentPayment.entity';

@EntityRepository(AppointmentPayment)
export class AppointmentPaymentRepository extends Repository<AppointmentPayment> {}
