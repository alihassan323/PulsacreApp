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
exports.DoctorProfileController = void 0;
const common_1 = require("@nestjs/common");
const swagger_1 = require("@nestjs/swagger");
const doctorprofile_service_1 = require("./doctorprofile.service");
const updatedoctorprofile_dto_1 = require("./dto/updatedoctorprofile.dto");
let DoctorProfileController = class DoctorProfileController {
    constructor(doctorProfileService) {
        this.doctorProfileService = doctorProfileService;
    }
    getdoctorProfile() {
        return this.doctorProfileService.getdoctorProfile();
    }
    getdoctorprofileById(id) {
        return this.doctorProfileService.getdoctorprofileById(id);
    }
    updatedoctorprofile(id, updateDoctorProfileDto) {
        return this.doctorProfileService.updatedoctorprofile(id, updateDoctorProfileDto);
    }
    deleteDoctorProfile(id) {
        return this.doctorProfileService.deleteDoctorProfile(id);
    }
};
__decorate([
    (0, common_1.Get)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], DoctorProfileController.prototype, "getdoctorProfile", null);
__decorate([
    (0, common_1.Get)('/:id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", void 0)
], DoctorProfileController.prototype, "getdoctorprofileById", null);
__decorate([
    (0, common_1.Put)('/:id'),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, updatedoctorprofile_dto_1.UpdateDoctorProfileDto]),
    __metadata("design:returntype", void 0)
], DoctorProfileController.prototype, "updatedoctorprofile", null);
__decorate([
    (0, common_1.Delete)('/:id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", Promise)
], DoctorProfileController.prototype, "deleteDoctorProfile", null);
DoctorProfileController = __decorate([
    (0, swagger_1.ApiTags)('Doctor profile'),
    (0, common_1.Controller)('Doctorprofile'),
    __metadata("design:paramtypes", [doctorprofile_service_1.DoctorProfileService])
], DoctorProfileController);
exports.DoctorProfileController = DoctorProfileController;
//# sourceMappingURL=doctorprofile.controller.js.map