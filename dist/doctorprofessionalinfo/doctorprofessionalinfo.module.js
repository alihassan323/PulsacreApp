"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.DoctorProfessionalInfoModule = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const doctorprofessionalinfo_controller_1 = require("./doctorprofessionalinfo.controller");
const doctorprofessionalinfo_repository_1 = require("./doctorprofessionalinfo.repository");
const doctorprofessionalinfo_service_1 = require("./doctorprofessionalinfo.service");
let DoctorProfessionalInfoModule = class DoctorProfessionalInfoModule {
};
DoctorProfessionalInfoModule = __decorate([
    (0, common_1.Module)({
        imports: [typeorm_1.TypeOrmModule.forFeature([doctorprofessionalinfo_repository_1.DoctorProfessionalInfoRepository])],
        exports: [doctorprofessionalinfo_service_1.DoctorProfessionalInfoService, typeorm_1.TypeOrmModule],
        controllers: [doctorprofessionalinfo_controller_1.DoctorProfessionalInfoServiceController],
        providers: [doctorprofessionalinfo_service_1.DoctorProfessionalInfoService],
    })
], DoctorProfessionalInfoModule);
exports.DoctorProfessionalInfoModule = DoctorProfessionalInfoModule;
//# sourceMappingURL=doctorprofessionalinfo.module.js.map