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
exports.DoctorAccountService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const DoctorAccount_repository_1 = require("./DoctorAccount.repository");
let DoctorAccountService = class DoctorAccountService {
    constructor(doctorAccountRepository) {
        this.doctorAccountRepository = doctorAccountRepository;
    }
    async getRoles() {
        const tasks = await this.doctorAccountRepository.find();
        return tasks;
    }
    async deleteRole(id) {
        const result = await this.doctorAccountRepository.delete(id);
        if (result.affected == 0) {
            throw new common_1.NotFoundException(`Role with ID "${id}" not found `);
        }
    }
};
DoctorAccountService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(DoctorAccount_repository_1.DoctorAccountRepository)),
    __metadata("design:paramtypes", [DoctorAccount_repository_1.DoctorAccountRepository])
], DoctorAccountService);
exports.DoctorAccountService = DoctorAccountService;
//# sourceMappingURL=DoctorAccount.service.js.map