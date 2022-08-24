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
exports.PatientAccountService = void 0;
const AppointmentPayment_entity_1 = require("../AppointmentPayment/AppointmentPayment.entity");
const user_entity_1 = require("../auth/user.entity");
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const PatientAccount_entity_1 = require("./PatientAccount.entity");
const PatientAccount_repository_1 = require("./PatientAccount.repository");
let PatientAccountService = class PatientAccountService {
    constructor(patientAccountRepository) {
        this.patientAccountRepository = patientAccountRepository;
    }
    async getPatientAccount() {
        const patientsaccounts = await this.patientAccountRepository.find({
            relations: ['patient'],
        });
        const arr = [];
        patientsaccounts.forEach((element) => {
            arr.push({
                userId: element.patient.id,
                name: element.patient.name,
                email: element.patient.email,
                amount: element.amount,
                transaction_id: element.transaction_id,
                datetime: element.datetime,
            });
        });
        return arr;
    }
    async getPatientAccountById(id) {
        const patientsaccounts = await this.patientAccountRepository.find({
            where: { patient: id },
            relations: ['patient'],
        });
        const arr = [];
        patientsaccounts.forEach((element) => {
            arr.push({
                id: element.id,
                userId: element.patient.id,
                name: element.patient.name,
                email: element.patient.email,
                amount: element.amount,
                transaction_id: element.transaction_id,
                datetime: element.datetime,
            });
        });
        if (!patientsaccounts) {
            throw new common_1.NotFoundException(`Patients Accounts with Id"${id}" not found`);
        }
        return arr;
    }
    async createPatientAccount(createPatientAccountDto) {
        let patientAccount = new PatientAccount_entity_1.PatientAccount();
        patientAccount = Object.assign(patientAccount, createPatientAccountDto);
        await PatientAccount_entity_1.PatientAccount.save(patientAccount);
        const user = await user_entity_1.User.findOne({
            where: { id: createPatientAccountDto.patient },
        });
        user.Wallet += createPatientAccountDto.amount;
        await user_entity_1.User.save(user);
        return patientAccount;
    }
    async getPatientavailablecredit(id) {
        const user = await user_entity_1.User.findOne({ where: { id: id } });
        const available_credit = user.Wallet;
        return available_credit === null || available_credit === void 0 ? void 0 : available_credit.toLocaleString('en-US');
    }
    async getpatienttransactiondetails(id) {
        const patientaccount = await PatientAccount_entity_1.PatientAccount.find({
            where: { patient: id },
            relations: ['patient'],
        });
        const appointmentpayment = await AppointmentPayment_entity_1.AppointmentPayment.find({
            where: { patient: id },
            relations: ['patient'],
        });
        const arr = [];
        patientaccount.forEach((element) => {
            arr.push({
                type: 'Wallet',
                cash: element.amount,
                datetime: element.datetime,
            });
        });
        appointmentpayment.forEach((element1) => {
            arr.push({
                type: 'Video Call',
                cash: element1.amountPaid,
                datetime: element1.datetime,
            });
        });
        arr.sort(function (a, b) {
            return b.datetime - a.datetime;
        });
        return arr;
    }
    async updateAmount(id) {
        const user = await user_entity_1.User.findOne({ where: { id: id } });
        user.Wallet = 0;
        user.totalEarning = 0;
        user.totalPaid = 0;
        user.totalEarning = 0;
        await user_entity_1.User.save(user);
        return 'Record updated';
    }
};
PatientAccountService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(PatientAccount_repository_1.PatientAccountRepository)),
    __metadata("design:paramtypes", [PatientAccount_repository_1.PatientAccountRepository])
], PatientAccountService);
exports.PatientAccountService = PatientAccountService;
//# sourceMappingURL=PatientAccount.service.js.map