/* eslint-disable prettier/prettier */
import { EntityRepository, Repository } from 'typeorm';

import { DoctorAccount } from './DoctorAccount.entity';

@EntityRepository(DoctorAccount)
export class DoctorAccountRepository extends Repository<DoctorAccount> {}
