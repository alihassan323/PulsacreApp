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
Object.defineProperty(exports, "__esModule", { value: true });
exports.UsersMedicalInfo = void 0;
const class_validator_1 = require("class-validator");
const user_entity_1 = require("../auth/user.entity");
const typeorm_1 = require("typeorm");
let UsersMedicalInfo = class UsersMedicalInfo extends typeorm_1.BaseEntity {
};
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)(),
    __metadata("design:type", Number)
], UsersMedicalInfo.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)({ nullable: true, array: true }),
    (0, class_validator_1.MaxLength)(200),
    __metadata("design:type", String)
], UsersMedicalInfo.prototype, "medical_History", void 0);
__decorate([
    (0, typeorm_1.Column)({ nullable: true, array: true }),
    (0, class_validator_1.MaxLength)(100),
    __metadata("design:type", String)
], UsersMedicalInfo.prototype, "medicines", void 0);
__decorate([
    (0, typeorm_1.OneToOne)(() => user_entity_1.User, (user) => user.usersMedicalInfo, {
        onDelete: 'CASCADE',
    }),
    (0, typeorm_1.JoinColumn)(),
    __metadata("design:type", user_entity_1.User)
], UsersMedicalInfo.prototype, "user", void 0);
UsersMedicalInfo = __decorate([
    (0, typeorm_1.Entity)(),
    (0, typeorm_1.Unique)(['user'])
], UsersMedicalInfo);
exports.UsersMedicalInfo = UsersMedicalInfo;
//# sourceMappingURL=usersmedicalinfo.entity.js.map