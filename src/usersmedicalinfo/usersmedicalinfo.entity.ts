/* eslint-disable prettier/prettier */
import { MaxLength } from 'class-validator';
import { User } from 'src/auth/user.entity';
import {
	BaseEntity,
	Column,
	Entity,
	JoinColumn,
	OneToOne,
	PrimaryGeneratedColumn,
	Unique,
} from 'typeorm';

@Entity()
@Unique(['user'])
export class UsersMedicalInfo extends BaseEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ nullable: true, array: true })
  @MaxLength(200)
  medical_History: string;

  @Column({ nullable: true, array: true })
  @MaxLength(100)
  medicines: string;

  @OneToOne(() => User, (user) => user.usersMedicalInfo, {
    onDelete: 'CASCADE',
  }) // specify inverse side as a second parameter
  @JoinColumn()
  user: User;
}
