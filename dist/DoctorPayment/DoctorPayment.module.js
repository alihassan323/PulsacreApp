"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.DoctorPaymentModule = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const DoctorPayment_controller_1 = require("./DoctorPayment.controller");
const DoctorPayment_repository_1 = require("./DoctorPayment.repository");
const DoctorPayment_service_1 = require("./DoctorPayment.service");
let DoctorPaymentModule = class DoctorPaymentModule {
};
DoctorPaymentModule = __decorate([
    (0, common_1.Module)({
        imports: [typeorm_1.TypeOrmModule.forFeature([DoctorPayment_repository_1.DoctorPaymentRepository])],
        exports: [DoctorPayment_service_1.DoctorPaymentService, typeorm_1.TypeOrmModule],
        controllers: [DoctorPayment_controller_1.DoctorPaymentController],
        providers: [DoctorPayment_service_1.DoctorPaymentService],
    })
], DoctorPaymentModule);
exports.DoctorPaymentModule = DoctorPaymentModule;
//# sourceMappingURL=DoctorPayment.module.js.map