"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.UsersMedicalInfoModule = void 0;
const auth_module_1 = require("../auth/auth.module");
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const usersmedicalinfo_controller_1 = require("./usersmedicalinfo.controller");
const usersmedicalinfo_repository_1 = require("./usersmedicalinfo.repository");
const usersmedicalinfo_service_1 = require("./usersmedicalinfo.service");
let UsersMedicalInfoModule = class UsersMedicalInfoModule {
};
UsersMedicalInfoModule = __decorate([
    (0, common_1.Module)({
        imports: [typeorm_1.TypeOrmModule.forFeature([usersmedicalinfo_repository_1.UsersMedicalInfoRepository]), auth_module_1.AuthModule],
        exports: [usersmedicalinfo_service_1.UsersMedicalInfoService, typeorm_1.TypeOrmModule],
        controllers: [usersmedicalinfo_controller_1.UsersMedicalInfoServiceController],
        providers: [usersmedicalinfo_service_1.UsersMedicalInfoService],
    })
], UsersMedicalInfoModule);
exports.UsersMedicalInfoModule = UsersMedicalInfoModule;
//# sourceMappingURL=usersmedicalinfo.module.js.map