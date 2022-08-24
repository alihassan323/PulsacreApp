/* eslint-disable prettier/prettier */
import { User } from 'src/auth/user.entity';
import {
	BaseEntity,
	Entity,
	JoinColumn,
	ManyToOne,
	PrimaryGeneratedColumn,
} from 'typeorm';

@Entity()
export class FavoriteDoctors extends BaseEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @ManyToOne(() => User, (doctor) => doctor.favoriteDoctors1, {
    onDelete: 'CASCADE',
  })
  @JoinColumn({ name: 'doctorId' })
  doctor: User;

  @ManyToOne(() => User, (patient) => patient.favoriteDoctors, {
    onDelete: 'CASCADE',
  })
  @JoinColumn({ name: 'patientId' })
  patient: User;
}
