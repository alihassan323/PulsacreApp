"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.typeOrmConfig = void 0;
const AppointmentPayment_entity_1 = require("../AppointmentPayment/AppointmentPayment.entity");
const doctorCategory_entity_1 = require("../Doctorcategory/doctorCategory.entity");
const DoctorPayment_entity_1 = require("../DoctorPayment/DoctorPayment.entity");
const doctorprofessionalinfo_entity_1 = require("../doctorprofessionalinfo/doctorprofessionalinfo.entity");
const doctorprofile_entity_1 = require("../Doctorsprofile/doctorprofile.entity");
const favoriteDoctors_entity_1 = require("../favoriteDoctors/favoriteDoctors.entity");
const PatientAccount_entity_1 = require("../PatientAccount/PatientAccount.entity");
const roles_entity_1 = require("../role/roles.entity");
const socialauth_entity_1 = require("../socialauth/socialauth.entity");
const usersmedicalinfo_entity_1 = require("../usersmedicalinfo/usersmedicalinfo.entity");
const usersprofile_entity_1 = require("../usersprofile/usersprofile.entity");
const VitalsInfo_entity_1 = require("../VitalsInfo/VitalsInfo.entity");
const user_entity_1 = require("../auth/user.entity");
const notification_entity_1 = require("../Notification/notification.entity");
exports.typeOrmConfig = {
    type: 'postgres',
    host: 'localhost',
    port: 5432,
    username: 'postgres',
    password: 'ali12911',
    database: 'pulscaredb',
    entities: [
        roles_entity_1.Role,
        user_entity_1.User,
        usersprofile_entity_1.UsersProfile,
        usersmedicalinfo_entity_1.UsersMedicalInfo,
        doctorprofile_entity_1.DoctorProfile,
        doctorprofessionalinfo_entity_1.DoctorProfessionalInfo,
        doctorCategory_entity_1.DoctorCategory,
        PatientAccount_entity_1.PatientAccount,
        AppointmentPayment_entity_1.AppointmentPayment,
        DoctorPayment_entity_1.DoctorPayment,
        socialauth_entity_1.Socialauth,
        favoriteDoctors_entity_1.FavoriteDoctors,
        notification_entity_1.Notification,
        VitalsInfo_entity_1.VitalsInfo
    ],
    synchronize: true,
};
//# sourceMappingURL=typrorm.config.js.map