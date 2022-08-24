/* eslint-disable prettier/prettier */
import { AppointmentPayment } from 'src/AppointmentPayment/AppointmentPayment.entity';
import { DoctorCategory } from 'src/Doctorcategory/doctorCategory.entity';
import { DoctorPayment } from 'src/DoctorPayment/DoctorPayment.entity';
import { DoctorProfessionalInfo } from 'src/doctorprofessionalinfo/doctorprofessionalinfo.entity';
import { DoctorProfile } from 'src/Doctorsprofile/doctorprofile.entity';
import { FavoriteDoctors } from 'src/favoriteDoctors/favoriteDoctors.entity';
import { PatientAccount } from 'src/PatientAccount/PatientAccount.entity';
import { Role } from 'src/role/roles.entity';
import { Socialauth } from 'src/socialauth/socialauth.entity';
import { UsersMedicalInfo } from 'src/usersmedicalinfo/usersmedicalinfo.entity';
import { UsersProfile } from 'src/usersprofile/usersprofile.entity';
import { VitalsInfo } from 'src/VitalsInfo/VitalsInfo.entity';

import { TypeOrmModuleOptions } from '@nestjs/typeorm';

import { User } from '../auth/user.entity';
import { Notification } from '../Notification/notification.entity';

export const typeOrmConfig: TypeOrmModuleOptions = {
  type: 'postgres',
  host: 'localhost',
  port: 5432,
  username: 'postgres',
  password: 'ali12911',
  database: 'pulscaredb',
  entities: [
    Role,
    User,
    UsersProfile,
    UsersMedicalInfo,
    DoctorProfile,
    DoctorProfessionalInfo,
    DoctorCategory,
    PatientAccount,
    AppointmentPayment,
    DoctorPayment, 
    Socialauth,
    FavoriteDoctors,
    Notification,
    VitalsInfo
  ],
  synchronize: true,
};
