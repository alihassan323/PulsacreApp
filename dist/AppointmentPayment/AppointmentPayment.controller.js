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
exports.AppointmentPaymentController = void 0;
const common_1 = require("@nestjs/common");
const swagger_1 = require("@nestjs/swagger");
const AppointmentPayment_service_1 = require("./AppointmentPayment.service");
const CreateAppointmentPayment_dto_1 = require("./dto/CreateAppointmentPayment.dto");
let AppointmentPaymentController = class AppointmentPaymentController {
    constructor(appointmentPaymentService) {
        this.appointmentPaymentService = appointmentPaymentService;
    }
    todayPatientsandEarning(id) {
        return this.appointmentPaymentService.todayPatientsandEarning(id);
    }
    getDoctorTransasctionHistory(id, getDoctorTransactionDto) {
        return this.appointmentPaymentService.getDoctorTransasctionHistory(id, getDoctorTransactionDto);
    }
    getpatienttransactiondetails(id) {
        return this.appointmentPaymentService.getdoctortransactiondetails(id);
    }
    getDoctorSummary(id) {
        return this.appointmentPaymentService.getDoctorSummary(id);
    }
    getDoctorCallHistory(id) {
        return this.appointmentPaymentService.getDoctorCallHistory(id);
    }
    getPatientCallHistory(id) {
        return this.appointmentPaymentService.getPatientCallHistory(id);
    }
    getPatientTotalpaid(id) {
        return this.appointmentPaymentService.getPatientTotalpaid(id);
    }
    createappointmentPayment(createPatientAppointmentDto) {
        return this.appointmentPaymentService.createappointmentPayment(createPatientAppointmentDto);
    }
    AdmintodoctorPayment(createpatPaymentDto) {
        return this.appointmentPaymentService.PatienttoAdminPayment(createpatPaymentDto);
    }
    appointment(id) {
        return this.appointmentPaymentService.appointment(id);
    }
};
__decorate([
    (0, common_1.Get)('/:id/todayPatientsandEarning'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", void 0)
], AppointmentPaymentController.prototype, "todayPatientsandEarning", null);
__decorate([
    (0, common_1.Post)('/:id/getDoctorTransasctionHistory'),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, CreateAppointmentPayment_dto_1.GetDoctorTransactionDto]),
    __metadata("design:returntype", void 0)
], AppointmentPaymentController.prototype, "getDoctorTransasctionHistory", null);
__decorate([
    (0, common_1.Get)('/:id/getdoctortransactiondetails'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", void 0)
], AppointmentPaymentController.prototype, "getpatienttransactiondetails", null);
__decorate([
    (0, common_1.Get)('/:id/getDoctorSummary'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", void 0)
], AppointmentPaymentController.prototype, "getDoctorSummary", null);
__decorate([
    (0, common_1.Get)('/:id/getDoctorCallHistory'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", void 0)
], AppointmentPaymentController.prototype, "getDoctorCallHistory", null);
__decorate([
    (0, common_1.Get)('/:id/getPatientCallHistory'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", void 0)
], AppointmentPaymentController.prototype, "getPatientCallHistory", null);
__decorate([
    (0, common_1.Get)('/:id/getPatientTotalpaid'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", void 0)
], AppointmentPaymentController.prototype, "getPatientTotalpaid", null);
__decorate([
    (0, common_1.Post)(),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [CreateAppointmentPayment_dto_1.CreatePatientAppointmentDto]),
    __metadata("design:returntype", void 0)
], AppointmentPaymentController.prototype, "createappointmentPayment", null);
__decorate([
    (0, common_1.Post)('/:PatienttoAdminPayment'),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [CreateAppointmentPayment_dto_1.CreatepatPaymentDto]),
    __metadata("design:returntype", void 0)
], AppointmentPaymentController.prototype, "AdmintodoctorPayment", null);
__decorate([
    (0, common_1.Delete)('/:id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", void 0)
], AppointmentPaymentController.prototype, "appointment", null);
AppointmentPaymentController = __decorate([
    (0, swagger_1.ApiTags)('AppointmentPayment'),
    (0, common_1.Controller)('AppointmentPayment'),
    __metadata("design:paramtypes", [AppointmentPayment_service_1.AppointmentPaymentService])
], AppointmentPaymentController);
exports.AppointmentPaymentController = AppointmentPaymentController;
//# sourceMappingURL=AppointmentPayment.controller.js.map