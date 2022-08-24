/* eslint-disable prettier/prettier */
import { User } from 'src/auth/user.entity';
import {
	BaseEntity,
	Column,
	CreateDateColumn,
	Entity,
	JoinColumn,
	ManyToOne,
	PrimaryGeneratedColumn,
} from 'typeorm';

@Entity()
export class DoctorPayment extends BaseEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @ManyToOne(() => User, (doctor) => doctor.doctorPayment, {
    onDelete: 'CASCADE',
  })
  @JoinColumn({ name: 'doctorId' })
  doctor: User;

  @Column({ nullable: true })
  cheque_Number: string;

  @Column({ nullable: true })
  account_Number: string;

  @Column({ nullable: true })
  account_Holder_name: string;

  @Column({ nullable: true })
  cheque_Amount: number;

  @CreateDateColumn()
  datetime: Date;
}
