/* eslint-disable prettier/prettier */
import { EntityRepository, Repository } from 'typeorm';

import { Socialauth } from './socialauth.entity';

@EntityRepository(Socialauth)
export class SocialauthRepository extends Repository<Socialauth> {
  async findByEmail(email: string): Promise<Socialauth> {
    return await Socialauth.findOne(
      {
        email: email,
      },
      { relations: ['user'] },
    );
  }
}
