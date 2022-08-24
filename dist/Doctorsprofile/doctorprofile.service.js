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
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.DoctorProfileService = void 0;
const user_entity_1 = require("../auth/user.entity");
const DoctorPayment_entity_1 = require("../DoctorPayment/DoctorPayment.entity");
const DoctorPayment_service_1 = require("../DoctorPayment/DoctorPayment.service");
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const doctorprofile_entity_1 = require("./doctorprofile.entity");
const doctorprofile_repository_1 = require("./doctorprofile.repository");
let DoctorProfileService = class DoctorProfileService {
    constructor(doctorProfileRepository, doctorPaymentService) {
        this.doctorProfileRepository = doctorProfileRepository;
        this.doctorPaymentService = doctorPaymentService;
    }
    async getdoctorProfile() {
        const found = await this.doctorProfileRepository.find({
            relations: ['user'],
        });
        const doctors = [];
        const found2 = await DoctorPayment_entity_1.DoctorPayment.find({ relations: ['doctor'] });
        found2.sort(function (a, b) {
            return a.id - b.id;
        });
        doctors.push(...found);
        found.forEach((element, index) => {
            delete element.user.password;
            delete element.user.doctorProfile;
            delete element.user.usersProfile;
            delete element.user.usersMedicalInfo;
            delete element.user.socialauth;
            delete element.user.appointmentPayment;
            delete element.user.appointmentPayments,
                delete element.user.favoriteDoctors,
                delete element.user.favoriteDoctors1,
                delete element.user.vitalsInfo,
                found2.forEach((payment) => {
                    if (element.user.id === payment.doctor.id) {
                        const temp = Object.assign(Object.assign({}, element), { payment: {
                                id: payment.id,
                                cheque_Number: payment.cheque_Number,
                                account_Number: payment.account_Number,
                                account_Holder_name: payment.account_Holder_name,
                                cheque_Amount: payment.cheque_Amount,
                                datetime: payment.datetime,
                            } });
                        doctors[index] = temp;
                    }
                });
        });
        return doctors;
    }
    async getdoctorprofileById(id) {
        const found = await doctorprofile_entity_1.DoctorProfile.findOne({
            where: { user: id },
            relations: ['user'],
        });
        if (!found) {
            throw new common_1.NotFoundException(`UsersProfile with ID"${id}" not found`);
        }
        delete found.user.password;
        delete found.user.doctorProfile;
        delete found.user.socialauth;
        delete found.user.doctorProfessionalInfo;
        delete found.user.usersProfile;
        delete found.user.usersMedicalInfo;
        delete found.user.socialauth;
        delete found.user.favoriteDoctors,
            delete found.user.favoriteDoctors1;
        delete found.user.appointmentPayment;
        delete found.user.appointmentPayments;
        delete found.user.vitalsInfo;
        delete found.user.notification;
        return found;
    }
    async updatedoctorprofile(id, updateDoctorProfileDto) {
        const doctorprofile = await doctorprofile_entity_1.DoctorProfile.findOne({
            where: { user: id },
            relations: ['user'],
        });
        Object.assign(doctorprofile, updateDoctorProfileDto);
        const user = await user_entity_1.User.findOne({ where: { id: doctorprofile.user.id } });
        user.name = doctorprofile.name;
        await user_entity_1.User.save(user);
        await doctorprofile_entity_1.DoctorProfile.save(doctorprofile);
        delete doctorprofile.user.password;
        delete doctorprofile.user.usersProfile;
        delete doctorprofile.user.doctorPayment;
        delete doctorprofile.user.doctorProfessionalInfo;
        delete doctorprofile.user.doctorProfile;
        delete doctorprofile.user.usersMedicalInfo;
        delete doctorprofile.user.socialauth;
        delete doctorprofile.user.favoriteDoctors1;
        delete doctorprofile.user.favoriteDoctors1;
        return doctorprofile;
    }
    async deleteDoctorProfile(id) {
        const result = await this.doctorProfileRepository.delete(id);
        if (result.affected == 0) {
            throw new common_1.NotFoundException(`Doctor Profile with ID "${id}" not found `);
        }
    }
};
DoctorProfileService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(doctorprofile_repository_1.DoctorProfileRepository)),
    __metadata("design:paramtypes", [doctorprofile_repository_1.DoctorProfileRepository,
        DoctorPayment_service_1.DoctorPaymentService])
], DoctorProfileService);
exports.DoctorProfileService = DoctorProfileService;
//# sourceMappingURL=doctorprofile.service.js.map