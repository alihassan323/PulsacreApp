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
exports.DoctorCategory = void 0;
const doctorprofessionalinfo_entity_1 = require("../doctorprofessionalinfo/doctorprofessionalinfo.entity");
const typeorm_1 = require("typeorm");
let DoctorCategory = class DoctorCategory extends typeorm_1.BaseEntity {
};
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)(),
    __metadata("design:type", Number)
], DoctorCategory.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], DoctorCategory.prototype, "name", void 0);
__decorate([
    (0, typeorm_1.OneToMany)(() => doctorprofessionalinfo_entity_1.DoctorProfessionalInfo, (doctorProfessionalInfos) => doctorProfessionalInfos.areaofSpeciality, {
        cascade: true,
    }),
    __metadata("design:type", Array)
], DoctorCategory.prototype, "doctorProfessionalInfos", void 0);
DoctorCategory = __decorate([
    (0, typeorm_1.Entity)()
], DoctorCategory);
exports.DoctorCategory = DoctorCategory;
//# sourceMappingURL=doctorCategory.entity.js.map