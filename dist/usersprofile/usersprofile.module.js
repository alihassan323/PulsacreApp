"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.UsersprofileModule = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const usersprofile_controller_1 = require("./usersprofile.controller");
const usersprofile_repository_1 = require("./usersprofile.repository");
const usersprofile_service_1 = require("./usersprofile.service");
let UsersprofileModule = class UsersprofileModule {
};
UsersprofileModule = __decorate([
    (0, common_1.Module)({
        imports: [typeorm_1.TypeOrmModule.forFeature([usersprofile_repository_1.UsersProfileRepository])],
        exports: [usersprofile_service_1.UsersprofileService, typeorm_1.TypeOrmModule],
        controllers: [usersprofile_controller_1.UsersprofileController],
        providers: [usersprofile_service_1.UsersprofileService],
    })
], UsersprofileModule);
exports.UsersprofileModule = UsersprofileModule;
//# sourceMappingURL=usersprofile.module.js.map