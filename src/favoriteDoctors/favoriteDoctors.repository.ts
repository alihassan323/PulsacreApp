/* eslint-disable prettier/prettier */
import { EntityRepository, Repository } from 'typeorm';

import { FavoriteDoctors } from './favoriteDoctors.entity';

@EntityRepository(FavoriteDoctors)
export class FavoriteDoctorsRepository extends Repository<FavoriteDoctors> {}
