"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppModule = void 0;
const common_1 = require("@nestjs/common");
const config_1 = require("@nestjs/config");
const typeorm_1 = require("@nestjs/typeorm");
const AppointmentPayment_module_1 = require("./AppointmentPayment/AppointmentPayment.module");
const auth_module_1 = require("./auth/auth.module");
const typrorm_config_1 = require("./config/typrorm.config");
const doctorCategory_module_1 = require("./Doctorcategory/doctorCategory.module");
const DoctorPayment_module_1 = require("./DoctorPayment/DoctorPayment.module");
const doctorprofessionalinfo_module_1 = require("./doctorprofessionalinfo/doctorprofessionalinfo.module");
const doctorprofile_module_1 = require("./Doctorsprofile/doctorprofile.module");
const favoriteDoctors_module_1 = require("./favoriteDoctors/favoriteDoctors.module");
const notification_module_1 = require("./Notification/notification.module");
const PatientAccount_module_1 = require("./PatientAccount/PatientAccount.module");
const roles_module_1 = require("./role/roles.module");
const socialauth_module_1 = require("./socialauth/socialauth.module");
const usersmedicalinfo_module_1 = require("./usersmedicalinfo/usersmedicalinfo.module");
const usersprofile_module_1 = require("./usersprofile/usersprofile.module");
const VitalsInfo_module_1 = require("./VitalsInfo/VitalsInfo.module");
let AppModule = class AppModule {
};
AppModule = __decorate([
    (0, common_1.Module)({
        imports: [
            typeorm_1.TypeOrmModule.forRoot(typrorm_config_1.typeOrmConfig),
            roles_module_1.RolesModule,
            auth_module_1.AuthModule,
            usersprofile_module_1.UsersprofileModule,
            usersmedicalinfo_module_1.UsersMedicalInfoModule,
            doctorprofile_module_1.DoctorProfileModule,
            doctorprofessionalinfo_module_1.DoctorProfessionalInfoModule,
            doctorCategory_module_1.DoctorCategoryModule,
            PatientAccount_module_1.PatientAccountModule,
            AppointmentPayment_module_1.AppointmentPaymentModule,
            DoctorPayment_module_1.DoctorPaymentModule,
            socialauth_module_1.SocialauthModule,
            favoriteDoctors_module_1.FavoriteDoctorsModule,
            notification_module_1.NotificationModule,
            VitalsInfo_module_1.VitalsInfoModule,
            config_1.ConfigModule.forRoot(),
        ],
    })
], AppModule);
exports.AppModule = AppModule;
//# sourceMappingURL=app.module.js.map