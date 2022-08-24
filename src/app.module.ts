/* eslint-disable prettier/prettier */
import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';

import { AppointmentPaymentModule } from './AppointmentPayment/AppointmentPayment.module';
import { AuthModule } from './auth/auth.module';
import { typeOrmConfig } from './config/typrorm.config';
import { DoctorCategoryModule } from './Doctorcategory/doctorCategory.module';
import { DoctorPaymentModule } from './DoctorPayment/DoctorPayment.module';
import { DoctorProfessionalInfoModule } from './doctorprofessionalinfo/doctorprofessionalinfo.module';
import { DoctorProfileModule } from './Doctorsprofile/doctorprofile.module';
import { FavoriteDoctorsModule } from './favoriteDoctors/favoriteDoctors.module';
import { NotificationModule } from './Notification/notification.module';
import { PatientAccountModule } from './PatientAccount/PatientAccount.module';
import { RolesModule } from './role/roles.module';
import { SocialauthModule } from './socialauth/socialauth.module';
import { UsersMedicalInfoModule } from './usersmedicalinfo/usersmedicalinfo.module';
import { UsersprofileModule } from './usersprofile/usersprofile.module';
import { VitalsInfoModule } from './VitalsInfo/VitalsInfo.module';

@Module({
  imports: [
    TypeOrmModule.forRoot(typeOrmConfig),
    RolesModule,
    AuthModule,
    UsersprofileModule,
    UsersMedicalInfoModule,
    DoctorProfileModule,
    DoctorProfessionalInfoModule,
    DoctorCategoryModule,
    PatientAccountModule,
    AppointmentPaymentModule,
    DoctorPaymentModule,
    SocialauthModule,
    FavoriteDoctorsModule,
    NotificationModule,
    VitalsInfoModule,
    ConfigModule.forRoot(),
  ],
})
export class AppModule {}
