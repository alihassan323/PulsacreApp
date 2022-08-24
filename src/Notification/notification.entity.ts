/* eslint-disable prettier/prettier */
import { User } from 'src/auth/user.entity';
import {
	BaseEntity,
	Column,
	Entity,
	JoinColumn,
	OneToOne,
	PrimaryGeneratedColumn,
} from 'typeorm';

@Entity()
export class Notification extends BaseEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @OneToOne(() => User, (patient) => patient.notification, {
    onDelete: 'CASCADE',
  })
  @JoinColumn({ name: 'PatientId' })
  patient: User;

  @Column({ nullable: true })
  device_Token: string;
}
