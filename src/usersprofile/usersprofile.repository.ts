/* eslint-disable prettier/prettier */
import { EntityRepository, Repository } from 'typeorm';

import { UsersProfile } from './usersprofile.entity';

@EntityRepository(UsersProfile)
export class UsersProfileRepository extends Repository<UsersProfile> {}
