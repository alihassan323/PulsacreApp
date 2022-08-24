/* eslint-disable prettier/prettier */
import { User } from 'src/auth/user.entity';
import {
	BaseEntity,
	Column,
	Entity,
	OneToMany,
	PrimaryGeneratedColumn,
} from 'typeorm';

@Entity()
export class Role extends BaseEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  title: string;

  @Column()
  description: string;

  @Column()
  Type: UserType;

  @OneToMany(() => User, (users) => users.role)
  users: User[];
}

export enum UserType {
  Admin = 'Admin',
  Patient = 'Patient',
  Doctor = 'Doctor',
}
