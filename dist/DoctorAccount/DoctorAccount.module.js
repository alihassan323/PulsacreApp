"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.DoctorAccountModule = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const DoctorAccount_controller_1 = require("./DoctorAccount.controller");
const DoctorAccount_repository_1 = require("./DoctorAccount.repository");
const DoctorAccount_service_1 = require("./DoctorAccount.service");
let DoctorAccountModule = class DoctorAccountModule {
};
DoctorAccountModule = __decorate([
    (0, common_1.Module)({
        imports: [typeorm_1.TypeOrmModule.forFeature([DoctorAccount_repository_1.DoctorAccountRepository])],
        exports: [DoctorAccount_service_1.DoctorAccountService, typeorm_1.TypeOrmModule],
        controllers: [DoctorAccount_controller_1.DoctorAccountController],
        providers: [DoctorAccount_service_1.DoctorAccountService],
    })
], DoctorAccountModule);
exports.DoctorAccountModule = DoctorAccountModule;
//# sourceMappingURL=DoctorAccount.module.js.map