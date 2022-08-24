/* eslint-disable prettier/prettier */
import { EntityRepository, Repository } from 'typeorm';

import { DoctorCategory } from './doctorCategory.entity';

@EntityRepository(DoctorCategory)
export class DoctorCategoryRepository extends Repository<DoctorCategory> {}
