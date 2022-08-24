/* eslint-disable prettier/prettier */
import { EntityRepository, Repository } from 'typeorm';

import { DoctorProfile } from './doctorprofile.entity';

@EntityRepository(DoctorProfile)
export class DoctorProfileRepository extends Repository<DoctorProfile> {}
