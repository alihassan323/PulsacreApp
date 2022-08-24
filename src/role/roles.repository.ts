/* eslint-disable prettier/prettier */
import { Role } from 'src/role/roles.entity';
/* eslint-disable prettier/prettier */
import { EntityRepository, Repository } from 'typeorm';

@EntityRepository(Role)
export class RoleRepository extends Repository<Role> {}
