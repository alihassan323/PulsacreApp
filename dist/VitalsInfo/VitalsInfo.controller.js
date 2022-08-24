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
exports.VitalsInfoController = void 0;
const common_1 = require("@nestjs/common");
const swagger_1 = require("@nestjs/swagger");
const CreateVitalsInfo_dto_1 = require("./dto/CreateVitalsInfo.dto");
const VitalsInfo_service_1 = require("./VitalsInfo.service");
let VitalsInfoController = class VitalsInfoController {
    constructor(VitalsInfoService) {
        this.VitalsInfoService = VitalsInfoService;
    }
    getVitalsInfo() {
        return this.VitalsInfoService.getVitalsInfo();
    }
    CreateVitalsInfo(createVitalsInfoDto) {
        return this.VitalsInfoService.createVitalsInfo(createVitalsInfoDto);
    }
    getVitalsHistory(id) {
        return this.VitalsInfoService.getVitalsHistory(id);
    }
    deleteVitalsInfo(id) {
        return this.VitalsInfoService.deleteVitalsInfo(id);
    }
};
__decorate([
    (0, common_1.Get)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], VitalsInfoController.prototype, "getVitalsInfo", null);
__decorate([
    (0, common_1.Post)(),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [CreateVitalsInfo_dto_1.CreateVitalsInfoDto]),
    __metadata("design:returntype", void 0)
], VitalsInfoController.prototype, "CreateVitalsInfo", null);
__decorate([
    (0, common_1.Get)('/:id/getVitalsHistory'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", void 0)
], VitalsInfoController.prototype, "getVitalsHistory", null);
__decorate([
    (0, common_1.Delete)('/:id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", Promise)
], VitalsInfoController.prototype, "deleteVitalsInfo", null);
VitalsInfoController = __decorate([
    (0, swagger_1.ApiTags)('Vitals Info'),
    (0, common_1.Controller)('VitalsInfo'),
    __metadata("design:paramtypes", [VitalsInfo_service_1.VitalsInfoService])
], VitalsInfoController);
exports.VitalsInfoController = VitalsInfoController;
//# sourceMappingURL=VitalsInfo.controller.js.map