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
exports.UsersMedicalInfoServiceController = void 0;
const common_1 = require("@nestjs/common");
const swagger_1 = require("@nestjs/swagger");
const updateusersmedicalinfo_dto_1 = require("./dto/updateusersmedicalinfo.dto");
const usersmedicalinfo_service_1 = require("./usersmedicalinfo.service");
let UsersMedicalInfoServiceController = class UsersMedicalInfoServiceController {
    constructor(usersMedicalInfoService) {
        this.usersMedicalInfoService = usersMedicalInfoService;
    }
    getUsersMedicalInfo() {
        return this.usersMedicalInfoService.getUsersMedicalInfo();
    }
    getUsersMedicalInfoById(id) {
        return this.usersMedicalInfoService.getUsersMedicalInfoById(id);
    }
    deleteUsersMedicalInfo(id) {
        return this.usersMedicalInfoService.deleteUsersMedicalInfo(id);
    }
    updateUsersMedicalInfo(id, updateUsersMedicalInfo) {
        return this.usersMedicalInfoService.updateUsersMedicalInfo(id, updateUsersMedicalInfo);
    }
};
__decorate([
    (0, common_1.Get)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], UsersMedicalInfoServiceController.prototype, "getUsersMedicalInfo", null);
__decorate([
    (0, common_1.Get)('/:id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", void 0)
], UsersMedicalInfoServiceController.prototype, "getUsersMedicalInfoById", null);
__decorate([
    (0, common_1.Delete)('/:id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", Promise)
], UsersMedicalInfoServiceController.prototype, "deleteUsersMedicalInfo", null);
__decorate([
    (0, common_1.Put)('/:id'),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, updateusersmedicalinfo_dto_1.UpdateUsersMedicalInfo]),
    __metadata("design:returntype", void 0)
], UsersMedicalInfoServiceController.prototype, "updateUsersMedicalInfo", null);
UsersMedicalInfoServiceController = __decorate([
    (0, swagger_1.ApiTags)('Users Medical Info'),
    (0, common_1.Controller)('usersmedicalinfo'),
    __metadata("design:paramtypes", [usersmedicalinfo_service_1.UsersMedicalInfoService])
], UsersMedicalInfoServiceController);
exports.UsersMedicalInfoServiceController = UsersMedicalInfoServiceController;
//# sourceMappingURL=usersmedicalinfo.controller.js.map