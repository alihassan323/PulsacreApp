"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.VitalsInfoModule = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const VitalsInfo_controller_1 = require("./VitalsInfo.controller");
const VitalsInfo_repository_1 = require("./VitalsInfo.repository");
const VitalsInfo_service_1 = require("./VitalsInfo.service");
let VitalsInfoModule = class VitalsInfoModule {
};
VitalsInfoModule = __decorate([
    (0, common_1.Module)({
        imports: [
            typeorm_1.TypeOrmModule.forFeature([VitalsInfo_repository_1.VitalsInfoRepository])
        ],
        exports: [VitalsInfo_service_1.VitalsInfoService, typeorm_1.TypeOrmModule],
        controllers: [VitalsInfo_controller_1.VitalsInfoController],
        providers: [VitalsInfo_service_1.VitalsInfoService],
    })
], VitalsInfoModule);
exports.VitalsInfoModule = VitalsInfoModule;
//# sourceMappingURL=VitalsInfo.module.js.map