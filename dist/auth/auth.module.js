"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AuthModule = void 0;
const mail_module_1 = require("../mail/mail.module");
const common_1 = require("@nestjs/common");
const jwt_1 = require("@nestjs/jwt");
const passport_1 = require("@nestjs/passport");
const typeorm_1 = require("@nestjs/typeorm");
const doctorprofile_module_1 = require("../Doctorsprofile/doctorprofile.module");
const roles_module_1 = require("../role/roles.module");
const usersprofile_module_1 = require("../usersprofile/usersprofile.module");
const auth_controller_1 = require("./auth.controller");
const auth_service_1 = require("./auth.service");
const jwt_strategy_1 = require("./jwt.strategy");
const user_repository_1 = require("./user.repository");
let AuthModule = class AuthModule {
};
AuthModule = __decorate([
    (0, common_1.Module)({
        imports: [
            roles_module_1.RolesModule,
            mail_module_1.MailModule,
            doctorprofile_module_1.DoctorProfileModule,
            usersprofile_module_1.UsersprofileModule,
            typeorm_1.TypeOrmModule.forFeature([user_repository_1.UserRepository]),
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
        controllers: [auth_controller_1.AuthController],
        providers: [auth_service_1.AuthService, jwt_strategy_1.JwtStrategy],
        exports: [jwt_strategy_1.JwtStrategy, passport_1.PassportModule, auth_service_1.AuthService],
    })
], AuthModule);
exports.AuthModule = AuthModule;
//# sourceMappingURL=auth.module.js.map