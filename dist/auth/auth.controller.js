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
exports.AuthController = void 0;
const common_1 = require("@nestjs/common");
const swagger_1 = require("@nestjs/swagger");
const auth_service_1 = require("./auth.service");
const auth_credential_dto_1 = require("./dto/auth-credential.dto");
const create_user_dto_1 = require("./dto/create-user.dto");
const ForgetPasswordInput_dto_1 = require("./dto/ForgetPasswordInput.dto");
const ResetPasswordInput_dto_1 = require("./dto/ResetPasswordInput.dto");
const update_auth_dto_1 = require("./dto/update-auth.dto");
let AuthController = class AuthController {
    constructor(authService) {
        this.authService = authService;
    }
    signUp(createUerDto) {
        return this.authService.signUp(createUerDto);
    }
    signIn(authCredentialDto) {
        return this.authService.signIn(authCredentialDto);
    }
    updateDoctorStatus(id, updateDoctorDto) {
        return this.authService.updateDoctorStatus(id, updateDoctorDto);
    }
    updateUserStatus(id, updateUserDto) {
        return this.authService.updateUserStatus(id, updateUserDto);
    }
    updateStatus(updateStatusDto) {
        return this.authService.updateStatus(updateStatusDto);
    }
    updateDoctorstatustoActive(id, doctorStatusUpdateDto) {
        console.log('1');
        return this.authService.updateDoctorstatustoActive(id, doctorStatusUpdateDto);
    }
    findUsersByRoles(findByTypelDto) {
        return this.authService.findUsersByRoles(findByTypelDto);
    }
    findUserByEmail(findByEmailDto) {
        return this.authService.findUserByEmail(findByEmailDto);
    }
    findAllUsers() {
        return this.authService.findAllUsers();
    }
    UserstatusPopUpMsg(id) {
        return this.authService.UserstatusPopUpMsg(id);
    }
    findUserById(id) {
        return this.authService.findUserById(id);
    }
    remove(id) {
        return this.authService.remove(+id);
    }
    forgetPassword(forgetPasswordInput) {
        return this.authService.forgetPassword(forgetPasswordInput.email);
    }
    resetPassword(resetPasswordInput) {
        return this.authService.resetPassword(resetPasswordInput);
    }
    getActiveDoctors(id) {
        return this.authService.getActiveDoctors(id);
    }
    getDoctor(id) {
        return this.authService.getDoctor(id);
    }
    SendInvitationToDocotr(sendinvitataionDoctor) {
        return this.authService.SendInvitationToDocotr(sendinvitataionDoctor);
    }
};
__decorate([
    (0, common_1.Post)('/signup'),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_user_dto_1.CreateUerDto]),
    __metadata("design:returntype", Promise)
], AuthController.prototype, "signUp", null);
__decorate([
    (0, common_1.Post)('/signIn'),
    __param(0, (0, common_1.Body)(common_1.ValidationPipe)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [auth_credential_dto_1.AuthCredentialDto]),
    __metadata("design:returntype", void 0)
], AuthController.prototype, "signIn", null);
__decorate([
    (0, common_1.Put)(':id/DoctorStatus'),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, update_auth_dto_1.UpdateDoctorDto]),
    __metadata("design:returntype", void 0)
], AuthController.prototype, "updateDoctorStatus", null);
__decorate([
    (0, common_1.Put)(':id/UserStatus'),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, update_auth_dto_1.UpdateUserDto]),
    __metadata("design:returntype", void 0)
], AuthController.prototype, "updateUserStatus", null);
__decorate([
    (0, common_1.Put)('/updateStatus'),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [auth_credential_dto_1.UpdateStatusDto]),
    __metadata("design:returntype", void 0)
], AuthController.prototype, "updateStatus", null);
__decorate([
    (0, common_1.Put)(':id/ActiveDoctor'),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, update_auth_dto_1.DoctorStatusUpdateDto]),
    __metadata("design:returntype", void 0)
], AuthController.prototype, "updateDoctorstatustoActive", null);
__decorate([
    (0, common_1.Post)('/roleType'),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_user_dto_1.FindByTypelDto]),
    __metadata("design:returntype", void 0)
], AuthController.prototype, "findUsersByRoles", null);
__decorate([
    (0, common_1.Post)('/useremail'),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_user_dto_1.FindByEmailDto]),
    __metadata("design:returntype", void 0)
], AuthController.prototype, "findUserByEmail", null);
__decorate([
    (0, common_1.Get)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], AuthController.prototype, "findAllUsers", null);
__decorate([
    (0, common_1.Get)('/:id/PopUpmsg'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", void 0)
], AuthController.prototype, "UserstatusPopUpMsg", null);
__decorate([
    (0, common_1.Get)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", void 0)
], AuthController.prototype, "findUserById", null);
__decorate([
    (0, common_1.Delete)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", void 0)
], AuthController.prototype, "remove", null);
__decorate([
    (0, common_1.Post)('/forgot'),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [ForgetPasswordInput_dto_1.ForgetPasswordInput]),
    __metadata("design:returntype", void 0)
], AuthController.prototype, "forgetPassword", null);
__decorate([
    (0, common_1.Post)('/resetPasswordInput'),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [ResetPasswordInput_dto_1.ResetPasswordInput]),
    __metadata("design:returntype", Promise)
], AuthController.prototype, "resetPassword", null);
__decorate([
    (0, common_1.Get)('/:id/ActiveDoctors'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", void 0)
], AuthController.prototype, "getActiveDoctors", null);
__decorate([
    (0, common_1.Get)('/:id/getDoctor'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", void 0)
], AuthController.prototype, "getDoctor", null);
__decorate([
    (0, common_1.Post)('/sendinvitation'),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_user_dto_1.SendinvitataionDoctor]),
    __metadata("design:returntype", void 0)
], AuthController.prototype, "SendInvitationToDocotr", null);
AuthController = __decorate([
    (0, swagger_1.ApiTags)('auth'),
    (0, common_1.Controller)('auth'),
    __metadata("design:paramtypes", [auth_service_1.AuthService])
], AuthController);
exports.AuthController = AuthController;
//# sourceMappingURL=auth.controller.js.map