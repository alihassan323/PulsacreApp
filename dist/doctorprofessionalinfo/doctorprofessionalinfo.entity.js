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
exports.DoctorProfessionalInfo = void 0;
const user_entity_1 = require("../auth/user.entity");
const doctorCategory_entity_1 = require("../Doctorcategory/doctorCategory.entity");
const typeorm_1 = require("typeorm");
let DoctorProfessionalInfo = class DoctorProfessionalInfo extends typeorm_1.BaseEntity {
};
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)(),
    __metadata("design:type", Number)
], DoctorProfessionalInfo.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)({ nullable: true }),
    __metadata("design:type", Number)
], DoctorProfessionalInfo.prototype, "consultation_Fee", void 0);
__decorate([
    (0, typeorm_1.Column)({ nullable: true, array: true }),
    __metadata("design:type", String)
], DoctorProfessionalInfo.prototype, "experiences", void 0);
__decorate([
    (0, typeorm_1.OneToOne)(() => user_entity_1.User, (user) => user.doctorProfessionalInfo, {
        onDelete: 'CASCADE',
    }),
    (0, typeorm_1.JoinColumn)(),
    __metadata("design:type", user_entity_1.User)
], DoctorProfessionalInfo.prototype, "user", void 0);
__decorate([
    (0, typeorm_1.Column)({ nullable: true, type: 'jsonb' }),
    __metadata("design:type", Array)
], DoctorProfessionalInfo.prototype, "certifications", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => doctorCategory_entity_1.DoctorCategory, (areaofSpeciality) => areaofSpeciality.doctorProfessionalInfos, {
        onDelete: 'CASCADE',
    }),
    __metadata("design:type", doctorCategory_entity_1.DoctorCategory)
], DoctorProfessionalInfo.prototype, "areaofSpeciality", void 0);
DoctorProfessionalInfo = __decorate([
    (0, typeorm_1.Entity)(),
    (0, typeorm_1.Unique)(['user'])
], DoctorProfessionalInfo);
exports.DoctorProfessionalInfo = DoctorProfessionalInfo;
//# sourceMappingURL=doctorprofessionalinfo.entity.js.map