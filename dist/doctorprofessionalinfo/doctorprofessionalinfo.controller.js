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
exports.DoctorProfessionalInfoServiceController = void 0;
const common_1 = require("@nestjs/common");
const swagger_1 = require("@nestjs/swagger");
const doctorprofessionalinfo_service_1 = require("./doctorprofessionalinfo.service");
const updatedoctorprofessionalinfo_dto_1 = require("./dto/updatedoctorprofessionalinfo.dto");
let DoctorProfessionalInfoServiceController = class DoctorProfessionalInfoServiceController {
    constructor(doctorProfessionalInfoService) {
        this.doctorProfessionalInfoService = doctorProfessionalInfoService;
    }
    getDoctorProfessionalInfo() {
        return this.doctorProfessionalInfoService.getDoctorProfessionalInfo();
    }
    getDoctorProfessionalInfoById(id) {
        return this.doctorProfessionalInfoService.getDoctorProfessionalInfoById(id);
    }
    deleteDoctorProfessionalInfo(id) {
        return this.doctorProfessionalInfoService.deleteDoctorProfessionalInfo(id);
    }
    updateDoctorProfessionalInfo(id, updateDoctorProfessionalInfoDto) {
        return this.doctorProfessionalInfoService.updateDoctorProfessionalInfo(id, updateDoctorProfessionalInfoDto);
    }
};
__decorate([
    (0, common_1.Get)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], DoctorProfessionalInfoServiceController.prototype, "getDoctorProfessionalInfo", null);
__decorate([
    (0, common_1.Get)('/:id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", void 0)
], DoctorProfessionalInfoServiceController.prototype, "getDoctorProfessionalInfoById", null);
__decorate([
    (0, common_1.Delete)('/:id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", Promise)
], DoctorProfessionalInfoServiceController.prototype, "deleteDoctorProfessionalInfo", null);
__decorate([
    (0, common_1.Put)('/:id'),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, updatedoctorprofessionalinfo_dto_1.UpdateDoctorProfessionalInfoDto]),
    __metadata("design:returntype", void 0)
], DoctorProfessionalInfoServiceController.prototype, "updateDoctorProfessionalInfo", null);
DoctorProfessionalInfoServiceController = __decorate([
    (0, swagger_1.ApiTags)('Doctor Professional Info'),
    (0, common_1.Controller)('doctorprofessionalinfo'),
    __metadata("design:paramtypes", [doctorprofessionalinfo_service_1.DoctorProfessionalInfoService])
], DoctorProfessionalInfoServiceController);
exports.DoctorProfessionalInfoServiceController = DoctorProfessionalInfoServiceController;
//# sourceMappingURL=doctorprofessionalinfo.controller.js.map