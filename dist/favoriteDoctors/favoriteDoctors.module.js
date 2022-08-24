"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.FavoriteDoctorsModule = void 0;
const doctorprofessionalinfo_module_1 = require("../doctorprofessionalinfo/doctorprofessionalinfo.module");
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const favoriteDoctors_controller_1 = require("./favoriteDoctors.controller");
const favoriteDoctors_repository_1 = require("./favoriteDoctors.repository");
const favoriteDoctors_service_1 = require("./favoriteDoctors.service");
let FavoriteDoctorsModule = class FavoriteDoctorsModule {
};
FavoriteDoctorsModule = __decorate([
    (0, common_1.Module)({
        imports: [typeorm_1.TypeOrmModule.forFeature([favoriteDoctors_repository_1.FavoriteDoctorsRepository]), doctorprofessionalinfo_module_1.DoctorProfessionalInfoModule],
        exports: [favoriteDoctors_service_1.FavoriteDoctorsService, typeorm_1.TypeOrmModule],
        controllers: [favoriteDoctors_controller_1.FavoriteDoctorsController],
        providers: [favoriteDoctors_service_1.FavoriteDoctorsService],
    })
], FavoriteDoctorsModule);
exports.FavoriteDoctorsModule = FavoriteDoctorsModule;
//# sourceMappingURL=favoriteDoctors.module.js.map