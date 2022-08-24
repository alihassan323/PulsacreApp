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
exports.PatientAccountController = void 0;
const common_1 = require("@nestjs/common");
const swagger_1 = require("@nestjs/swagger");
const CreatePatientAccount_dto_1 = require("./dto/CreatePatientAccount.dto");
const PatientAccount_service_1 = require("./PatientAccount.service");
let PatientAccountController = class PatientAccountController {
    constructor(patientAccountService) {
        this.patientAccountService = patientAccountService;
    }
    createPatientAccount(createPatientAccountDto) {
        return this.patientAccountService.createPatientAccount(createPatientAccountDto);
    }
    getPatientAccount() {
        return this.patientAccountService.getPatientAccount();
    }
    getPatientAccountById(id) {
        return this.patientAccountService.getPatientAccountById(id);
    }
    getPatientavailablecredit(id) {
        return this.patientAccountService.getPatientavailablecredit(id);
    }
    getpatienttransactiondetails(id) {
        return this.patientAccountService.getpatienttransactiondetails(id);
    }
    updateAmount(id) {
        return this.patientAccountService.updateAmount(id);
    }
};
__decorate([
    (0, common_1.Post)(),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [CreatePatientAccount_dto_1.CreatePatientAccountDto]),
    __metadata("design:returntype", void 0)
], PatientAccountController.prototype, "createPatientAccount", null);
__decorate([
    (0, common_1.Get)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], PatientAccountController.prototype, "getPatientAccount", null);
__decorate([
    (0, common_1.Get)('/:id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", void 0)
], PatientAccountController.prototype, "getPatientAccountById", null);
__decorate([
    (0, common_1.Get)('/:id/availablecredit'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", void 0)
], PatientAccountController.prototype, "getPatientavailablecredit", null);
__decorate([
    (0, common_1.Get)('/:id/transactiondetails'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", void 0)
], PatientAccountController.prototype, "getpatienttransactiondetails", null);
__decorate([
    (0, common_1.Put)('/:id/accountsupdatetozero'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", void 0)
], PatientAccountController.prototype, "updateAmount", null);
PatientAccountController = __decorate([
    (0, swagger_1.ApiTags)('PatientAccount'),
    (0, common_1.Controller)('PatientAccount'),
    __metadata("design:paramtypes", [PatientAccount_service_1.PatientAccountService])
], PatientAccountController);
exports.PatientAccountController = PatientAccountController;
//# sourceMappingURL=PatientAccount.controller.js.map