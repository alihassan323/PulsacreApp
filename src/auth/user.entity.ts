/* eslint-disable prettier/prettier */
import * as bcrypt from 'bcrypt';
import { IsEmail } from 'class-validator';
import { AppointmentPayment } from 'src/AppointmentPayment/AppointmentPayment.entity';
import { DoctorAccount } from 'src/DoctorAccount/DoctorAccount.entity';
import { DoctorPayment } from 'src/DoctorPayment/DoctorPayment.entity';
import { DoctorProfessionalInfo } from 'src/doctorprofessionalinfo/doctorprofessionalinfo.entity';
import { DoctorProfile } from 'src/Doctorsprofile/doctorprofile.entity';
import { FavoriteDoctors } from 'src/favoriteDoctors/favoriteDoctors.entity';
import { Notification } from 'src/Notification/notification.entity';
import { PatientAccount } from 'src/PatientAccount/PatientAccount.entity';
import { Role } from 'src/role/roles.entity';
import { UsersProfile } from 'src/usersprofile/usersprofile.entity';
import { VitalsInfo } from 'src/VitalsInfo/VitalsInfo.entity';
import {
	BaseEntity,
	BeforeInsert,
	Column,
	CreateDateColumn,
	Entity,
	ManyToOne,
	OneToMany,
	OneToOne,
	PrimaryGeneratedColumn,
	Unique,
	UpdateDateColumn,
} from 'typeorm';

import { Socialauth } from '../socialauth/socialauth.entity';
import { UsersMedicalInfo } from '../usersmedicalinfo/usersmedicalinfo.entity';

export enum UserStatus {
  Pending = 'Pending',
  Suspended = 'Suspended',
  Approved = 'Approved',
}

export enum UpdatedStatus {
  Online = 'Online',
  Offline = 'Offline',
}
@Entity()
@Unique(['email'])
export class User extends BaseEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  @IsEmail()
  email: string;

  @Column()
  password: string;

  @Column()
  name: string;

  @Column({ default: 0 })
  randomNumber: string;

  @Column({ default: UpdatedStatus.Offline, nullable: true })
  updatedstatus: UpdatedStatus;

  @Column({ default: UserStatus.Pending })
  status: UserStatus;

  @Column({ nullable: true })
  callId: number;

  @ManyToOne(() => Role, (role) => role.Type)
  role: Role;

  @OneToOne(() => Notification, (notification) => notification.patient, {
    eager: true,
  })
  notification: Notification;

  @OneToOne(() => UsersProfile, (UsersProfile) => UsersProfile.user, {
    eager: true,
  })
  usersProfile: UsersProfile;

  @OneToOne(() => Socialauth, (socialauth) => socialauth.user, {
    eager: true,
  })
  socialauth: Socialauth;

  @OneToOne(
    () => UsersMedicalInfo,
    (UsersMedicalInfo) => UsersMedicalInfo.user,
    {
      eager: true,
    },
  )
  usersMedicalInfo: UsersMedicalInfo;

  @OneToOne(() => DoctorProfile, (doctorProfile) => doctorProfile.user, {
    eager: true,
  })
  doctorProfile: DoctorProfile;

  @OneToOne(
    () => DoctorProfessionalInfo,
    (DoctorProfessionalInfo) => DoctorProfessionalInfo.user,
    {
      eager: true,
    },
  )
  doctorProfessionalInfo: DoctorProfessionalInfo;

  @OneToMany(() => VitalsInfo, (vitalsInfo) => vitalsInfo.patient, {
    eager: true,
  })
  vitalsInfo: VitalsInfo[];

  @OneToMany(
    () => AppointmentPayment,
    (appointmentPayment) => appointmentPayment.doctor,
    {
      eager: true,
    },
  )
  appointmentPayment: AppointmentPayment[];

  @OneToMany(
    () => AppointmentPayment,
    (appointmentPayment) => appointmentPayment.patient,
    {
      eager: true,
    },
  )
  appointmentPayments: AppointmentPayment[];

  @OneToMany(
    () => FavoriteDoctors,
    (favoriteDoctors) => favoriteDoctors.patient,
    {
      eager: true,
    },
  )
  favoriteDoctors: FavoriteDoctors[];

  @OneToMany(
    () => FavoriteDoctors,
    (favoriteDoctors1) => favoriteDoctors1.doctor,
    {
      eager: true,
    },
  )
  favoriteDoctors1: FavoriteDoctors[];

  @OneToMany(() => DoctorPayment, (doctorPayment) => doctorPayment.doctor, {
    cascade: true,
  })
  doctorPayment: DoctorPayment[];

  @OneToMany(() => PatientAccount, (patientAccount) => patientAccount.patient, {
    cascade: true,
  })
  patientAccount: PatientAccount[];

  // @OneToMany(() => DoctorAccount, (doctorAccount) => doctorAccount.doctor, {
  //   cascade: true,
  // })
  // doctorAccount: DoctorAccount[];

  @Column({ default: 0, nullable: true })
  Wallet: number;

  @Column({ default: 0, nullable: true })
  totalWithdrawn: number;

  @Column({ default: 0, nullable: true })
  totalEarning: number;

  @Column({ default: 0, nullable: true })
  totalPaid: number;

  @CreateDateColumn()
  created_at: Date;

  @UpdateDateColumn()
  updated_at: Date;

  @BeforeInsert()
  async hashPassword() {
    this.password = await bcrypt.hash(this.password, 8);
  }

  async validatePassword(password: string): Promise<boolean> {
    return await bcrypt.compare(password, this.password);
  }
}
