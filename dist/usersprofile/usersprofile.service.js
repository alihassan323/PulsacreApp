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
exports.UsersprofileService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const usersprofile_entity_1 = require("./usersprofile.entity");
const usersprofile_repository_1 = require("./usersprofile.repository");
let UsersprofileService = class UsersprofileService {
    constructor(usersProfileRepository) {
        this.usersProfileRepository = usersProfileRepository;
    }
    async getUsersProfile() {
        const found = await this.usersProfileRepository.find({
            relations: ['user'],
        });
        found.forEach((element) => {
            delete element.user.password;
            delete element.user.usersProfile;
            delete element.user.usersMedicalInfo;
            delete element.user.appointmentPayment;
            delete element.user.doctorProfile;
            delete element.user.doctorProfessionalInfo;
            delete element.user.doctorPayment;
            delete element.user.socialauth;
            delete element.user.favoriteDoctors;
            delete element.user.favoriteDoctors1;
            delete element.user.appointmentPayments;
            delete element.user.vitalsInfo;
            delete element.user.notification;
        });
        return found;
    }
    async getuserprofileById(id) {
        const found = await this.usersProfileRepository.findOne({
            where: { user: id },
            relations: ['user'],
        });
        if (!found) {
            throw new common_1.NotFoundException(`UsersProfile with ID"${id}" not found`);
        }
        delete found.user.password;
        delete found.user.usersProfile;
        delete found.user.usersMedicalInfo;
        delete found.user.appointmentPayment;
        delete found.user.doctorProfile;
        delete found.user.doctorProfessionalInfo;
        delete found.user.doctorPayment;
        delete found.user.socialauth;
        delete found.user.favoriteDoctors;
        delete found.user.favoriteDoctors1;
        delete found.user.appointmentPayments;
        delete found.user.vitalsInfo;
        delete found.user.notification;
        return found;
    }
    async deleteUsersProfile(id) {
        const result = await this.usersProfileRepository.delete(id);
        if (result.affected == 0) {
            throw new common_1.NotFoundException(`UsersProfile with ID "${id}" not found `);
        }
    }
    async updateuserprofile(id, updateUsersProfileDto) {
        const userprofile = await usersprofile_entity_1.UsersProfile.findOne({
            where: { user: id },
            relations: ['user'],
        });
        Object.assign(userprofile, updateUsersProfileDto);
        await usersprofile_entity_1.UsersProfile.save(userprofile);
        delete userprofile.user.password;
        delete userprofile.user.appointmentPayment;
        delete userprofile.user.appointmentPayments;
        delete userprofile.user.favoriteDoctors;
        delete userprofile.user.favoriteDoctors1;
        delete userprofile.user.doctorPayment;
        delete userprofile.user.doctorProfessionalInfo;
        delete userprofile.user.doctorProfile;
        delete userprofile.user.usersMedicalInfo;
        delete userprofile.user.socialauth;
        return userprofile;
    }
};
UsersprofileService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(usersprofile_repository_1.UsersProfileRepository)),
    __metadata("design:paramtypes", [usersprofile_repository_1.UsersProfileRepository])
], UsersprofileService);
exports.UsersprofileService = UsersprofileService;
//# sourceMappingURL=usersprofile.service.js.map