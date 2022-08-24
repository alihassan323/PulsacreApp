/* eslint-disable prettier/prettier */
import { EntityRepository, Repository } from 'typeorm';

import { DoctorProfessionalInfo } from './doctorprofessionalinfo.entity';

@EntityRepository(DoctorProfessionalInfo)
export class DoctorProfessionalInfoRepository extends Repository<DoctorProfessionalInfo> {}
