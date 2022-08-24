"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.SocialauthModule = void 0;
const auth_module_1 = require("../auth/auth.module");
const common_1 = require("@nestjs/common");
const jwt_1 = require("@nestjs/jwt");
const passport_1 = require("@nestjs/passport");
const typeorm_1 = require("@nestjs/typeorm");
const socialauth_controller_1 = require("./socialauth.controller");
const socialauth_repository_1 = require("./socialauth.repository");
const socialauth_service_1 = require("./socialauth.service");
let SocialauthModule = class SocialauthModule {
};
SocialauthModule = __decorate([
    (0, common_1.Module)({
        imports: [
            typeorm_1.TypeOrmModule.forFeature([socialauth_repository_1.SocialauthRepository]),
            auth_module_1.AuthModule,
            jwt_1.JwtModule.register({
                secret: 'topsecret',
                signOptions: {
                    expiresIn: 3600,
                },
            }),
            passport_1.PassportModule.register({
                defaultStrategy: 'jwt',
            }),
        ],
        exports: [socialauth_service_1.SocialauthService, typeorm_1.TypeOrmModule],
        controllers: [socialauth_controller_1.SocialauthController],
        providers: [socialauth_service_1.SocialauthService],
    })
], SocialauthModule);
exports.SocialauthModule = SocialauthModule;
//# sourceMappingURL=socialauth.module.js.map