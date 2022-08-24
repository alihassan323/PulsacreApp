"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.User = exports.UpdatedStatus = exports.UserStatus = void 0;
const bcrypt = require("bcrypt");
const class_validator_1 = require("class-validator");
const AppointmentPayment_entity_1 = require("../AppointmentPayment/AppointmentPayment.entity");
const DoctorPayment_entity_1 = require("../DoctorPayment/DoctorPayment.entity");
const doctorprofessionalinfo_entity_1 = require("../doctorprofessionalinfo/doctorprofessionalinfo.entity");
const doctorprofile_entity_1 = require("../Doctorsprofile/doctorprofile.entity");
const favoriteDoctors_entity_1 = require("../favoriteDoctors/favoriteDoctors.entity");
const notification_entity_1 = require("../Notification/notification.entity");
const PatientAccount_entity_1 = require("../PatientAccount/PatientAccount.entity");
const roles_entity_1 = require("../role/roles.entity");
const usersprofile_entity_1 = require("../usersprofile/usersprofile.entity");
const VitalsInfo_entity_1 = require("../VitalsInfo/VitalsInfo.entity");
const typeorm_1 = require("typeorm");
const socialauth_entity_1 = require("../socialauth/socialauth.entity");
const usersmedicalinfo_entity_1 = require("../usersmedicalinfo/usersmedicalinfo.entity");
var UserStatus;
(function (UserStatus) {
    UserStatus["Pending"] = "Pending";
    UserStatus["Suspended"] = "Suspended";
    UserStatus["Approved"] = "Approved";
})(UserStatus = exports.UserStatus || (exports.UserStatus = {}));
var UpdatedStatus;
(function (UpdatedStatus) {
    UpdatedStatus["Online"] = "Online";
    UpdatedStatus["Offline"] = "Offline";
})(UpdatedStatus = exports.UpdatedStatus || (exports.UpdatedStatus = {}));
let User = class User extends typeorm_1.BaseEntity {
    async hashPassword() {
        this.password = await bcrypt.hash(this.password, 8);
    }
    async validatePassword(password) {
        return await bcrypt.compare(password, this.password);
    }
};
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)(),
    __metadata("design:type", Number)
], User.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    (0, class_validator_1.IsEmail)(),
    __metadata("design:type", String)
], User.prototype, "email", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], User.prototype, "password", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], User.prototype, "name", void 0);
__decorate([
    (0, typeorm_1.Column)({ default: 0 }),
    __metadata("design:type", String)
], User.prototype, "randomNumber", void 0);
__decorate([
    (0, typeorm_1.Column)({ default: UpdatedStatus.Offline, nullable: true }),
    __metadata("design:type", String)
], User.prototype, "updatedstatus", void 0);
__decorate([
    (0, typeorm_1.Column)({ default: UserStatus.Pending }),
    __metadata("design:type", String)
], User.prototype, "status", void 0);
__decorate([
    (0, typeorm_1.Column)({ nullable: true }),
    __metadata("design:type", Number)
], User.prototype, "callId", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => roles_entity_1.Role, (role) => role.Type),
    __metadata("design:type", roles_entity_1.Role)
], User.prototype, "role", void 0);
__decorate([
    (0, typeorm_1.OneToOne)(() => notification_entity_1.Notification, (notification) => notification.patient, {
        eager: true,
    }),
    __metadata("design:type", notification_entity_1.Notification)
], User.prototype, "notification", void 0);
__decorate([
    (0, typeorm_1.OneToOne)(() => usersprofile_entity_1.UsersProfile, (UsersProfile) => UsersProfile.user, {
        eager: true,
    }),
    __metadata("design:type", usersprofile_entity_1.UsersProfile)
], User.prototype, "usersProfile", void 0);
__decorate([
    (0, typeorm_1.OneToOne)(() => socialauth_entity_1.Socialauth, (socialauth) => socialauth.user, {
        eager: true,
    }),
    __metadata("design:type", socialauth_entity_1.Socialauth)
], User.prototype, "socialauth", void 0);
__decorate([
    (0, typeorm_1.OneToOne)(() => usersmedicalinfo_entity_1.UsersMedicalInfo, (UsersMedicalInfo) => UsersMedicalInfo.user, {
        eager: true,
    }),
    __metadata("design:type", usersmedicalinfo_entity_1.UsersMedicalInfo)
], User.prototype, "usersMedicalInfo", void 0);
__decorate([
    (0, typeorm_1.OneToOne)(() => doctorprofile_entity_1.DoctorProfile, (doctorProfile) => doctorProfile.user, {
        eager: true,
    }),
    __metadata("design:type", doctorprofile_entity_1.DoctorProfile)
], User.prototype, "doctorProfile", void 0);
__decorate([
    (0, typeorm_1.OneToOne)(() => doctorprofessionalinfo_entity_1.DoctorProfessionalInfo, (DoctorProfessionalInfo) => DoctorProfessionalInfo.user, {
        eager: true,
    }),
    __metadata("design:type", doctorprofessionalinfo_entity_1.DoctorProfessionalInfo)
], User.prototype, "doctorProfessionalInfo", void 0);
__decorate([
    (0, typeorm_1.OneToMany)(() => VitalsInfo_entity_1.VitalsInfo, (vitalsInfo) => vitalsInfo.patient, {
        eager: true,
    }),
    __metadata("design:type", Array)
], User.prototype, "vitalsInfo", void 0);
__decorate([
    (0, typeorm_1.OneToMany)(() => AppointmentPayment_entity_1.AppointmentPayment, (appointmentPayment) => appointmentPayment.doctor, {
        eager: true,
    }),
    __metadata("design:type", Array)
], User.prototype, "appointmentPayment", void 0);
__decorate([
    (0, typeorm_1.OneToMany)(() => AppointmentPayment_entity_1.AppointmentPayment, (appointmentPayment) => appointmentPayment.patient, {
        eager: true,
    }),
    __metadata("design:type", Array)
], User.prototype, "appointmentPayments", void 0);
__decorate([
    (0, typeorm_1.OneToMany)(() => favoriteDoctors_entity_1.FavoriteDoctors, (favoriteDoctors) => favoriteDoctors.patient, {
        eager: true,
    }),
    __metadata("design:type", Array)
], User.prototype, "favoriteDoctors", void 0);
__decorate([
    (0, typeorm_1.OneToMany)(() => favoriteDoctors_entity_1.FavoriteDoctors, (favoriteDoctors1) => favoriteDoctors1.doctor, {
        eager: true,
    }),
    __metadata("design:type", Array)
], User.prototype, "favoriteDoctors1", void 0);
__decorate([
    (0, typeorm_1.OneToMany)(() => DoctorPayment_entity_1.DoctorPayment, (doctorPayment) => doctorPayment.doctor, {
        cascade: true,
    }),
    __metadata("design:type", Array)
], User.prototype, "doctorPayment", void 0);
__decorate([
    (0, typeorm_1.OneToMany)(() => PatientAccount_entity_1.PatientAccount, (patientAccount) => patientAccount.patient, {
        cascade: true,
    }),
    __metadata("design:type", Array)
], User.prototype, "patientAccount", void 0);
__decorate([
    (0, typeorm_1.Column)({ default: 0, nullable: true }),
    __metadata("design:type", Number)
], User.prototype, "Wallet", void 0);
__decorate([
    (0, typeorm_1.Column)({ default: 0, nullable: true }),
    __metadata("design:type", Number)
], User.prototype, "totalWithdrawn", void 0);
__decorate([
    (0, typeorm_1.Column)({ default: 0, nullable: true }),
    __metadata("design:type", Number)
], User.prototype, "totalEarning", void 0);
__decorate([
    (0, typeorm_1.Column)({ default: 0, nullable: true }),
    __metadata("design:type", Number)
], User.prototype, "totalPaid", void 0);
__decorate([
    (0, typeorm_1.CreateDateColumn)(),
    __metadata("design:type", Date)
], User.prototype, "created_at", void 0);
__decorate([
    (0, typeorm_1.UpdateDateColumn)(),
    __metadata("design:type", Date)
], User.prototype, "updated_at", void 0);
__decorate([
    (0, typeorm_1.BeforeInsert)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], User.prototype, "hashPassword", null);
User = __decorate([
    (0, typeorm_1.Entity)(),
    (0, typeorm_1.Unique)(['email'])
], User);
exports.User = User;
//# sourceMappingURL=user.entity.js.map