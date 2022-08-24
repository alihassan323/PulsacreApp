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
exports.UsersMedicalInfoService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const usersmedicalinfo_entity_1 = require("./usersmedicalinfo.entity");
const usersmedicalinfo_repository_1 = require("./usersmedicalinfo.repository");
let UsersMedicalInfoService = class UsersMedicalInfoService {
    constructor(usersMedicalInfoRepository) {
        this.usersMedicalInfoRepository = usersMedicalInfoRepository;
    }
    async getUsersMedicalInfo() {
        const found = await this.usersMedicalInfoRepository.find({
            relations: ['user'],
        });
        found.forEach((element) => {
            delete element.user.password;
            delete element.user.appointmentPayment;
            delete element.user.usersMedicalInfo;
            delete element.user.usersProfile;
            delete element.user.doctorProfessionalInfo;
            delete element.user.doctorProfile;
            delete element.user.socialauth;
            delete element.user.favoriteDoctors;
            delete element.user.favoriteDoctors1;
        });
        return found;
    }
    async getUsersMedicalInfoById(id) {
        const found = await this.usersMedicalInfoRepository.findOne({
            where: {
                user: id,
            },
            relations: ['user'],
        });
        if (!found) {
            throw new common_1.NotFoundException(`MedicalInfo with ID"${id}" not found`);
        }
        delete found.user.password;
        delete found.user.appointmentPayment;
        delete found.user.usersMedicalInfo;
        delete found.user.usersProfile;
        delete found.user.doctorPayment;
        delete found.user.doctorProfessionalInfo;
        delete found.user.doctorProfile;
        delete found.user.socialauth;
        delete found.user.favoriteDoctors;
        delete found.user.favoriteDoctors1;
        return found;
    }
    async deleteUsersMedicalInfo(id) {
        const result = await this.usersMedicalInfoRepository.delete(id);
        if (result.affected == 0) {
            throw new common_1.NotFoundException(`MedicalInfo with ID "${id}" not found `);
        }
    }
    async updateUsersMedicalInfo(id, updateUsersMedicalInfo) {
        const usermedicalinfo = await usersmedicalinfo_entity_1.UsersMedicalInfo.findOne({
            where: { user: id },
            relations: ['user'],
        });
        Object.assign(usermedicalinfo, updateUsersMedicalInfo);
        await usersmedicalinfo_entity_1.UsersMedicalInfo.save(usermedicalinfo);
        delete usermedicalinfo.user.password;
        delete usermedicalinfo.user.usersProfile;
        delete usermedicalinfo.user.doctorPayment;
        delete usermedicalinfo.user.doctorProfessionalInfo;
        delete usermedicalinfo.user.doctorProfile;
        delete usermedicalinfo.user.usersMedicalInfo;
        delete usermedicalinfo.user.socialauth;
        delete usermedicalinfo.user.favoriteDoctors;
        delete usermedicalinfo.user.favoriteDoctors1;
        return usermedicalinfo;
    }
};
UsersMedicalInfoService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(usersmedicalinfo_repository_1.UsersMedicalInfoRepository)),
    __metadata("design:paramtypes", [usersmedicalinfo_repository_1.UsersMedicalInfoRepository])
], UsersMedicalInfoService);
exports.UsersMedicalInfoService = UsersMedicalInfoService;
//# sourceMappingURL=usersmedicalinfo.service.js.map