/* eslint-disable prettier/prettier */
import { EntityRepository, Repository } from 'typeorm';

import { UsersMedicalInfo } from './usersmedicalinfo.entity';

@EntityRepository(UsersMedicalInfo)
export class UsersMedicalInfoRepository extends Repository<UsersMedicalInfo> {}
