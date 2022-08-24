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
exports.FavoriteDoctorsService = void 0;
const user_entity_1 = require("../auth/user.entity");
const doctorprofessionalinfo_service_1 = require("../doctorprofessionalinfo/doctorprofessionalinfo.service");
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const favoriteDoctors_entity_1 = require("./favoriteDoctors.entity");
const favoriteDoctors_repository_1 = require("./favoriteDoctors.repository");
let FavoriteDoctorsService = class FavoriteDoctorsService {
    constructor(favoriteDoctorsRepository, doctorProfessionalInfoService) {
        this.favoriteDoctorsRepository = favoriteDoctorsRepository;
        this.doctorProfessionalInfoService = doctorProfessionalInfoService;
    }
    async getfavoritedoctorById(id) {
        const doctors = await this.favoriteDoctorsRepository.find({
            where: { patient: id },
            relations: ['doctor'],
        });
        const arr = [];
        const professionalinfo = await this.doctorProfessionalInfoService.getDoctorProfessionalInfo();
        doctors.forEach((element) => {
            professionalinfo.forEach((element1) => {
                if (element1.user.id == element.doctor.id) {
                    arr.push({
                        id: element1.user.id,
                        name: element1.user.name,
                        profilePicture: element1.profilePicture,
                        consultation_Fee: element1.consultation_Fee,
                        updatedStatus: element1.user.updatedstatus,
                        callId: element1.user.callId,
                        areaofSpeciality: element1.areaofSpeciality,
                    });
                }
            });
        });
        return arr;
    }
    async createfavouritedoctors(createFavoriteDoctorsDto) {
        const doctors = await user_entity_1.User.findOne({
            where: { id: createFavoriteDoctorsDto.doctor },
        });
        const patients = await user_entity_1.User.findOne({
            where: { id: createFavoriteDoctorsDto.patient },
        });
        const favoriteDoctors = new favoriteDoctors_entity_1.FavoriteDoctors();
        Object.assign(favoriteDoctors, createFavoriteDoctorsDto);
        await favoriteDoctors_entity_1.FavoriteDoctors.save(favoriteDoctors);
        const arr = [];
        delete doctors.appointmentPayment;
        delete doctors.appointmentPayments;
        delete doctors.doctorPayment;
        delete doctors.doctorProfessionalInfo;
        delete doctors.doctorProfile;
        delete doctors.password;
        delete doctors.usersMedicalInfo;
        delete doctors.usersProfile;
        delete doctors.socialauth;
        delete doctors.randomNumber;
        delete doctors.favoriteDoctors;
        delete doctors.favoriteDoctors1;
        delete patients.appointmentPayment;
        delete patients.appointmentPayments;
        delete patients.doctorPayment;
        delete patients.doctorProfessionalInfo;
        delete patients.doctorProfile;
        delete patients.password;
        delete patients.usersMedicalInfo;
        delete patients.usersProfile;
        delete patients.socialauth;
        delete patients.randomNumber;
        delete patients.favoriteDoctors;
        delete patients.favoriteDoctors1;
        arr.push(doctors, patients);
        return arr;
    }
    async deletefavdoctor(deleteFavoriteDoctorsDto) {
        const user = await this.favoriteDoctorsRepository.findOne({
            where: { doctor: deleteFavoriteDoctorsDto.doctor, patient: deleteFavoriteDoctorsDto.patient }
        });
        const result = await this.favoriteDoctorsRepository.delete(user.id);
        if (result.affected == 0) {
            throw new common_1.NotFoundException(`Doctor with ID "${deleteFavoriteDoctorsDto.doctor}" not found `);
        }
    }
};
FavoriteDoctorsService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(favoriteDoctors_repository_1.FavoriteDoctorsRepository)),
    __metadata("design:paramtypes", [favoriteDoctors_repository_1.FavoriteDoctorsRepository,
        doctorprofessionalinfo_service_1.DoctorProfessionalInfoService])
], FavoriteDoctorsService);
exports.FavoriteDoctorsService = FavoriteDoctorsService;
//# sourceMappingURL=favoriteDoctors.service.js.map