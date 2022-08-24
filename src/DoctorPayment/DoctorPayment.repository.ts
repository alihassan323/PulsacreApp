/* eslint-disable prettier/prettier */
import { EntityRepository, Repository } from 'typeorm';

import { DoctorPayment } from './DoctorPayment.entity';

@EntityRepository(DoctorPayment)
export class DoctorPaymentRepository extends Repository<DoctorPayment> {}
