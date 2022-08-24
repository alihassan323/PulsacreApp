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
export class VitalsInfo extends BaseEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ nullable: true })
  heartRate: string;

  @Column({ nullable: true })
  hrv: string;

  @Column({ nullable: true })
  stressLevel: string;

  @Column({ nullable: true })
  respiratoryLevel: string;

  @Column({ nullable: true })
  diastolic: string;

  @Column({ nullable: true })
  systolic: string;

  @Column({ nullable: true })
  oxygenLevel: string;

  @CreateDateColumn()
  datetime: Date;

  @ManyToOne(() => User, (patient) => patient.vitalsInfo, {
    onDelete: 'CASCADE',
  })
  @JoinColumn({ name: 'patientId' })
  patient: User;
}
