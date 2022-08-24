"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.DoctorCategoryModule = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const doctorCategory_controller_1 = require("./doctorCategory.controller");
const doctorCategory_repository_1 = require("./doctorCategory.repository");
const doctorCategory_service_1 = require("./doctorCategory.service");
let DoctorCategoryModule = class DoctorCategoryModule {
};
DoctorCategoryModule = __decorate([
    (0, common_1.Module)({
        imports: [typeorm_1.TypeOrmModule.forFeature([doctorCategory_repository_1.DoctorCategoryRepository])],
        exports: [doctorCategory_service_1.DoctorCategoryService, typeorm_1.TypeOrmModule],
        controllers: [doctorCategory_controller_1.DoctorCategoryController],
        providers: [doctorCategory_service_1.DoctorCategoryService],
    })
], DoctorCategoryModule);
exports.DoctorCategoryModule = DoctorCategoryModule;
//# sourceMappingURL=doctorCategory.module.js.map