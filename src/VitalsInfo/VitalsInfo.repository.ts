/* eslint-disable prettier/prettier */
import { EntityRepository, Repository } from 'typeorm';

import { VitalsInfo } from './VitalsInfo.entity';

@EntityRepository(VitalsInfo)
export class VitalsInfoRepository extends Repository<VitalsInfo> {}
