"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppointmentPaymentModule = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const AppointmentPayment_controller_1 = require("./AppointmentPayment.controller");
const AppointmentPayment_repository_1 = require("./AppointmentPayment.repository");
const AppointmentPayment_service_1 = require("./AppointmentPayment.service");
let AppointmentPaymentModule = class AppointmentPaymentModule {
};
AppointmentPaymentModule = __decorate([
    (0, common_1.Module)({
        imports: [typeorm_1.TypeOrmModule.forFeature([AppointmentPayment_repository_1.AppointmentPaymentRepository])],
        exports: [AppointmentPayment_service_1.AppointmentPaymentService, typeorm_1.TypeOrmModule],
        controllers: [AppointmentPayment_controller_1.AppointmentPaymentController],
        providers: [AppointmentPayment_service_1.AppointmentPaymentService],
    })
], AppointmentPaymentModule);
exports.AppointmentPaymentModule = AppointmentPaymentModule;
//# sourceMappingURL=AppointmentPayment.module.js.map