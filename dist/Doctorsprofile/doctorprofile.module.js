"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.DoctorProfileModule = void 0;
const DoctorPayment_module_1 = require("../DoctorPayment/DoctorPayment.module");
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const doctorprofile_controller_1 = require("./doctorprofile.controller");
const doctorprofile_repository_1 = require("./doctorprofile.repository");
const doctorprofile_service_1 = require("./doctorprofile.service");
let DoctorProfileModule = class DoctorProfileModule {
};
DoctorProfileModule = __decorate([
    (0, common_1.Module)({
        imports: [typeorm_1.TypeOrmModule.forFeature([doctorprofile_repository_1.DoctorProfileRepository]), DoctorPayment_module_1.DoctorPaymentModule],
        exports: [doctorprofile_service_1.DoctorProfileService, typeorm_1.TypeOrmModule],
        controllers: [doctorprofile_controller_1.DoctorProfileController],
        providers: [doctorprofile_service_1.DoctorProfileService],
    })
], DoctorProfileModule);
exports.DoctorProfileModule = DoctorProfileModule;
//# sourceMappingURL=doctorprofile.module.js.map