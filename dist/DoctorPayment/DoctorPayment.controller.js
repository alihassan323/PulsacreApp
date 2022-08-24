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
exports.DoctorPaymentController = void 0;
const common_1 = require("@nestjs/common");
const swagger_1 = require("@nestjs/swagger");
const DoctorPayment_service_1 = require("./DoctorPayment.service");
const CreateDoctorPayment_dto_1 = require("./dto/CreateDoctorPayment.dto");
let DoctorPaymentController = class DoctorPaymentController {
    constructor(doctorPaymentService) {
        this.doctorPaymentService = doctorPaymentService;
    }
    getdoctorPayment() {
        return this.doctorPaymentService.getdoctorPayment();
    }
    createDoctorPayment(createDoctorPaymentDto) {
        return this.doctorPaymentService.createDoctorPayment(createDoctorPaymentDto);
    }
    deletedoctorPayment(id) {
        return this.doctorPaymentService.deletedoctorPayment(id);
    }
    getdoctorPaymentById(id) {
        return this.doctorPaymentService.getdoctorPaymentById(id);
    }
    AdmintodoctorPayment(createPaymentDto) {
        return this.doctorPaymentService.AdmintodoctorPayment(createPaymentDto);
    }
};
__decorate([
    (0, common_1.Get)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], DoctorPaymentController.prototype, "getdoctorPayment", null);
__decorate([
    (0, common_1.Post)(),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [CreateDoctorPayment_dto_1.CreateDoctorPaymentDto]),
    __metadata("design:returntype", void 0)
], DoctorPaymentController.prototype, "createDoctorPayment", null);
__decorate([
    (0, common_1.Delete)('/:id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", void 0)
], DoctorPaymentController.prototype, "deletedoctorPayment", null);
__decorate([
    (0, common_1.Get)('/:id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", void 0)
], DoctorPaymentController.prototype, "getdoctorPaymentById", null);
__decorate([
    (0, common_1.Post)('/:AdmintodoctorPayment'),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [CreateDoctorPayment_dto_1.CreatePaymentDto]),
    __metadata("design:returntype", void 0)
], DoctorPaymentController.prototype, "AdmintodoctorPayment", null);
DoctorPaymentController = __decorate([
    (0, swagger_1.ApiTags)('DoctorPayment'),
    (0, common_1.Controller)('DoctorPayment'),
    __metadata("design:paramtypes", [DoctorPayment_service_1.DoctorPaymentService])
], DoctorPaymentController);
exports.DoctorPaymentController = DoctorPaymentController;
//# sourceMappingURL=DoctorPayment.controller.js.map