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
exports.DoctorAccount = void 0;
const user_entity_1 = require("../auth/user.entity");
const typeorm_1 = require("typeorm");
let DoctorAccount = class DoctorAccount extends typeorm_1.BaseEntity {
};
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)(),
    __metadata("design:type", Number)
], DoctorAccount.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => user_entity_1.User, (doctor) => doctor.id),
    (0, typeorm_1.JoinColumn)({ name: 'doctorId' }),
    __metadata("design:type", user_entity_1.User)
], DoctorAccount.prototype, "doctor", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], DoctorAccount.prototype, "accountnumber", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], DoctorAccount.prototype, "accountHolderName", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], DoctorAccount.prototype, "availableearning", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], DoctorAccount.prototype, "totalEarning", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], DoctorAccount.prototype, "withdraw", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], DoctorAccount.prototype, "chequeNumber", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], DoctorAccount.prototype, "chequeamount", void 0);
DoctorAccount = __decorate([
    (0, typeorm_1.Entity)()
], DoctorAccount);
exports.DoctorAccount = DoctorAccount;
//# sourceMappingURL=DoctorAccount.entity.js.map