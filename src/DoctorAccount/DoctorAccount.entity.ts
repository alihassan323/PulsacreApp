/* eslint-disable prettier/prettier */
import { User } from 'src/auth/user.entity';
import {
	BaseEntity,
	Column,
	Entity,
	JoinColumn,
	ManyToOne,
	PrimaryGeneratedColumn,
} from 'typeorm';

@Entity()
export class DoctorAccount extends BaseEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @ManyToOne(() => User, (doctor) => doctor.id)
  @JoinColumn({ name: 'doctorId' })
  doctor: User;

  @Column()
  accountnumber: string;

  @Column()
  accountHolderName: string;

  @Column()
  availableearning: string;

  @Column()
  totalEarning: string;

  @Column()
  withdraw: string;

  @Column()
  chequeNumber: string;

  @Column()
  chequeamount: string;
}
