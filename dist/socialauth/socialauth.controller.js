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
exports.SocialauthController = void 0;
const common_1 = require("@nestjs/common");
const swagger_1 = require("@nestjs/swagger");
const createsocialauth_dto_1 = require("./dto/createsocialauth.dto");
const socialauth_service_1 = require("./socialauth.service");
let SocialauthController = class SocialauthController {
    constructor(socialauthService) {
        this.socialauthService = socialauthService;
    }
    authenticate(createSocialauthdto) {
        return this.socialauthService.authenticate(createSocialauthdto);
    }
    signIn(loginSocialauthdto) {
        return this.socialauthService.signIn(loginSocialauthdto);
    }
};
__decorate([
    (0, common_1.Post)('/SignUp'),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [createsocialauth_dto_1.CreateSocialauthdto]),
    __metadata("design:returntype", void 0)
], SocialauthController.prototype, "authenticate", null);
__decorate([
    (0, common_1.Post)('/signIn'),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [createsocialauth_dto_1.LoginSocialauthdto]),
    __metadata("design:returntype", void 0)
], SocialauthController.prototype, "signIn", null);
SocialauthController = __decorate([
    (0, swagger_1.ApiTags)('Socialauth'),
    (0, common_1.Controller)('Socialauth'),
    __metadata("design:paramtypes", [socialauth_service_1.SocialauthService])
], SocialauthController);
exports.SocialauthController = SocialauthController;
//# sourceMappingURL=socialauth.controller.js.map