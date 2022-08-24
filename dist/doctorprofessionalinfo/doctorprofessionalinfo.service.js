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
exports.DoctorProfessionalInfoService = void 0;
const doctorprofile_entity_1 = require("../Doctorsprofile/doctorprofile.entity");
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const doctorprofessionalinfo_entity_1 = require("./doctorprofessionalinfo.entity");
const doctorprofessionalinfo_repository_1 = require("./doctorprofessionalinfo.repository");
let DoctorProfessionalInfoService = class DoctorProfessionalInfoService {
    constructor(doctorProfessionalInfoRepository) {
        this.doctorProfessionalInfoRepository = doctorProfessionalInfoRepository;
    }
    async getDoctorProfessionalInfo() {
        const found = await this.doctorProfessionalInfoRepository.find({
            relations: ['user', 'areaofSpeciality'],
        });
        const result = [];
        const doctor = await doctorprofile_entity_1.DoctorProfile.find({
            relations: ['user'],
        });
        found.forEach((element) => {
            delete element.user.password;
            delete element.user.doctorProfile;
            delete element.user.doctorProfessionalInfo;
            delete element.user.usersMedicalInfo;
            delete element.user.usersProfile;
            delete element.certifications;
            delete element.experiences;
            delete element.user.socialauth;
            delete element.user.favoriteDoctors;
            delete element.user.favoriteDoctors1;
            delete element.user.appointmentPayments;
            delete element.user.appointmentPayment;
            doctor.forEach((element1) => {
                delete element1.user.password;
                delete element1.user.doctorProfile;
                delete element1.user.doctorProfessionalInfo;
                delete element1.user.usersMedicalInfo;
                delete element1.user.usersProfile;
                delete element1.user.socialauth;
                delete element1.user.favoriteDoctors;
                delete element1.user.favoriteDoctors1;
                delete element1.user.appointmentPayment;
                delete element1.user.appointmentPayments;
                if (element.user.id === element1.user.id) {
                    result.push(Object.assign(Object.assign({}, element), { profilePicture: element1.profilePicture, about: element1.about, contact: element1.contact }));
                }
            });
        });
        return result;
    }
    async getDoctorProfessionalInfoById(id) {
        const found = await doctorprofessionalinfo_entity_1.DoctorProfessionalInfo.findOne({
            where: {
                user: id,
            },
            relations: ['user', 'areaofSpeciality'],
        });
        if (!found) {
            throw new common_1.NotFoundException(`DoctorProfessionalInfo with UserID"${id}" not found`);
        }
        delete found.user.password;
        delete found.user.appointmentPayment;
        delete found.user.doctorProfessionalInfo;
        delete found.user.usersProfile;
        delete found.user.usersMedicalInfo;
        delete found.user.socialauth;
        delete found.user.favoriteDoctors;
        delete found.user.favoriteDoctors1;
        return found;
    }
    async deleteDoctorProfessionalInfo(id) {
        const result = await this.doctorProfessionalInfoRepository.delete(id);
        if (result.affected == 0) {
            throw new common_1.NotFoundException(`MedicalInfo with ID "${id}" not found `);
        }
    }
    async updateDoctorProfessionalInfo(id, updateDoctorProfessionalInfoDto) {
        const doctorprofessionalinfo = await doctorprofessionalinfo_entity_1.DoctorProfessionalInfo.findOne({
            where: { user: id },
            relations: ['user', 'areaofSpeciality'],
        });
        if (updateDoctorProfessionalInfoDto.certifications.length == 0) {
            return 'Certifications should not be empty';
        }
        const object = Object.assign(doctorprofessionalinfo, updateDoctorProfessionalInfoDto);
        await doctorprofessionalinfo_entity_1.DoctorProfessionalInfo.save(object);
        delete doctorprofessionalinfo.user.password;
        delete doctorprofessionalinfo.user.doctorPayment;
        delete doctorprofessionalinfo.user.doctorProfessionalInfo;
        delete doctorprofessionalinfo.user.doctorProfile;
        delete doctorprofessionalinfo.user.usersMedicalInfo;
        delete doctorprofessionalinfo.user.usersProfile;
        delete doctorprofessionalinfo.user.socialauth;
        delete doctorprofessionalinfo.user.favoriteDoctors;
        delete doctorprofessionalinfo.user.favoriteDoctors1;
        return object;
    }
};
DoctorProfessionalInfoService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(doctorprofessionalinfo_repository_1.DoctorProfessionalInfoRepository)),
    __metadata("design:paramtypes", [doctorprofessionalinfo_repository_1.DoctorProfessionalInfoRepository])
], DoctorProfessionalInfoService);
exports.DoctorProfessionalInfoService = DoctorProfessionalInfoService;
//# sourceMappingURL=doctorprofessionalinfo.service.js.map