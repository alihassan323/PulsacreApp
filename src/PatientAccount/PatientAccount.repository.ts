/* eslint-disable prettier/prettier */
import { EntityRepository, Repository } from 'typeorm';

import { PatientAccount } from './PatientAccount.entity';

@EntityRepository(PatientAccount)
export class PatientAccountRepository extends Repository<PatientAccount> {}
