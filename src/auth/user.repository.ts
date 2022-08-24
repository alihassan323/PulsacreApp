/* eslint-disable prettier/prettier */
import { EntityRepository, Repository } from 'typeorm';

import { AuthCredentialDto } from './dto/auth-credential.dto';
import { User } from './user.entity';

@EntityRepository(User)
export class UserRepository extends Repository<User> {
  async findByEmail(email: string): Promise<User> {
    return await User.findOne(
      {
        email: email,
      },
      { relations: ['role'] },
    );
  }

  async signIn(authCredentialDto: AuthCredentialDto): Promise<User> {
    const { email, password, Type } = authCredentialDto;
    const user = await this.findByEmail(email);
    if (
      user &&
      (await user.validatePassword(password)) &&
      user.role.Type == Type
    ) {
      return user;
    }
  }
}
