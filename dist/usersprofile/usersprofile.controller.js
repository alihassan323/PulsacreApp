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
exports.UsersprofileController = void 0;
const common_1 = require("@nestjs/common");
const swagger_1 = require("@nestjs/swagger");
const updateuserprofile_dto_1 = require("./dto/updateuserprofile.dto");
const usersprofile_service_1 = require("./usersprofile.service");
let UsersprofileController = class UsersprofileController {
    constructor(usersprofileService) {
        this.usersprofileService = usersprofileService;
    }
    getUsersProfile() {
        return this.usersprofileService.getUsersProfile();
    }
    getuserprofileById(id) {
        return this.usersprofileService.getuserprofileById(id);
    }
    updateuserprofile(id, updateUsersProfileDto) {
        return this.usersprofileService.updateuserprofile(id, updateUsersProfileDto);
    }
    deleteUsersProfile(id) {
        return this.usersprofileService.deleteUsersProfile(id);
    }
};
__decorate([
    (0, common_1.Get)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], UsersprofileController.prototype, "getUsersProfile", null);
__decorate([
    (0, common_1.Get)('/:id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", void 0)
], UsersprofileController.prototype, "getuserprofileById", null);
__decorate([
    (0, common_1.Put)('/:id'),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, updateuserprofile_dto_1.UpdateUsersProfileDto]),
    __metadata("design:returntype", void 0)
], UsersprofileController.prototype, "updateuserprofile", null);
__decorate([
    (0, common_1.Delete)('/:id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", Promise)
], UsersprofileController.prototype, "deleteUsersProfile", null);
UsersprofileController = __decorate([
    (0, swagger_1.ApiTags)('Patient profile'),
    (0, common_1.Controller)('usersprofile'),
    __metadata("design:paramtypes", [usersprofile_service_1.UsersprofileService])
], UsersprofileController);
exports.UsersprofileController = UsersprofileController;
//# sourceMappingURL=usersprofile.controller.js.map