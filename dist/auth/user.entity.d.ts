import { AppointmentPayment } from 'src/AppointmentPayment/AppointmentPayment.entity';
import { DoctorPayment } from 'src/DoctorPayment/DoctorPayment.entity';
import { DoctorProfessionalInfo } from 'src/doctorprofessionalinfo/doctorprofessionalinfo.entity';
import { DoctorProfile } from 'src/Doctorsprofile/doctorprofile.entity';
import { FavoriteDoctors } from 'src/favoriteDoctors/favoriteDoctors.entity';
import { Notification } from 'src/Notification/notification.entity';
import { PatientAccount } from 'src/PatientAccount/PatientAccount.entity';
import { Role } from 'src/role/roles.entity';
import { UsersProfile } from 'src/usersprofile/usersprofile.entity';
import { VitalsInfo } from 'src/VitalsInfo/VitalsInfo.entity';
import { BaseEntity } from 'typeorm';
import { Socialauth } from '../socialauth/socialauth.entity';
import { UsersMedicalInfo } from '../usersmedicalinfo/usersmedicalinfo.entity';
export declare enum UserStatus {
    Pending = "Pending",
    Suspended = "Suspended",
    Approved = "Approved"
}
export declare enum UpdatedStatus {
    Online = "Online",
    Offline = "Offline"
}
export declare class User extends BaseEntity {
    id: number;
    email: string;
    password: string;
    name: string;
    randomNumber: string;
    updatedstatus: UpdatedStatus;
    status: UserStatus;
    callId: number;
    role: Role;
    notification: Notification;
    usersProfile: UsersProfile;
    socialauth: Socialauth;
    usersMedicalInfo: UsersMedicalInfo;
    doctorProfile: DoctorProfile;
    doctorProfessionalInfo: DoctorProfessionalInfo;
    vitalsInfo: VitalsInfo[];
    appointmentPayment: AppointmentPayment[];
    appointmentPayments: AppointmentPayment[];
    favoriteDoctors: FavoriteDoctors[];
    favoriteDoctors1: FavoriteDoctors[];
    doctorPayment: DoctorPayment[];
    patientAccount: PatientAccount[];
    Wallet: number;
    totalWithdrawn: number;
    totalEarning: number;
    totalPaid: number;
    created_at: Date;
    updated_at: Date;
    hashPassword(): Promise<void>;
    validatePassword(password: string): Promise<boolean>;
}
