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
exports.DoctorCategoryService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const doctorCategory_entity_1 = require("./doctorCategory.entity");
const doctorCategory_repository_1 = require("./doctorCategory.repository");
let DoctorCategoryService = class DoctorCategoryService {
    constructor(doctorCategoryRepository) {
        this.doctorCategoryRepository = doctorCategoryRepository;
    }
    async getDoctorCategory() {
        const doctorCategory = await doctorCategory_entity_1.DoctorCategory.find();
        return doctorCategory;
    }
    async findDoctorCategoryById(id) {
        const found = await doctorCategory_entity_1.DoctorCategory.findOne(id);
        if (!found) {
            throw new common_1.NotFoundException(`DoctorCategory with id"${id}" not found`);
        }
        return found;
    }
    async createDoctorCategory(createDoctorCategoryDto) {
        const doctorCategory = new doctorCategory_entity_1.DoctorCategory();
        Object.assign(doctorCategory, createDoctorCategoryDto);
        return await doctorCategory_entity_1.DoctorCategory.save(doctorCategory);
    }
    async deleteDoctorCategory(id) {
        const doctorCategory = await this.doctorCategoryRepository.delete(id);
        if (doctorCategory.affected == 0) {
            throw new common_1.NotFoundException(`DoctorCategory with ID "${id}" not found `);
        }
    }
    async updateDoctorCategory(id, updateDoctorCategoryDto) {
        const doctorCategory = await this.findDoctorCategoryById(id);
        Object.assign(doctorCategory, updateDoctorCategoryDto);
        return doctorCategory_entity_1.DoctorCategory.save(doctorCategory);
    }
};
DoctorCategoryService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(doctorCategory_repository_1.DoctorCategoryRepository)),
    __metadata("design:paramtypes", [doctorCategory_repository_1.DoctorCategoryRepository])
], DoctorCategoryService);
exports.DoctorCategoryService = DoctorCategoryService;
//# sourceMappingURL=doctorCategory.service.js.map