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
exports.DoctorCategoryController = void 0;
const common_1 = require("@nestjs/common");
const swagger_1 = require("@nestjs/swagger");
const doctorCategory_service_1 = require("./doctorCategory.service");
const create_doctorCategory_dto_1 = require("./dto/create-doctorCategory.dto");
const update_doctorCategory_dto_1 = require("./dto/update-doctorCategory.dto");
let DoctorCategoryController = class DoctorCategoryController {
    constructor(doctorCategoryService) {
        this.doctorCategoryService = doctorCategoryService;
    }
    getDoctorCategory() {
        return this.doctorCategoryService.getDoctorCategory();
    }
    findDoctorCategoryById(id) {
        return this.doctorCategoryService.findDoctorCategoryById(+id);
    }
    createDoctorCategory(createDoctorCategoryDto) {
        return this.doctorCategoryService.createDoctorCategory(createDoctorCategoryDto);
    }
    deleteDoctorCategory(id) {
        return this.doctorCategoryService.deleteDoctorCategory(id);
    }
    updateDoctorCategory(id, updateDoctorCategoryDto) {
        return this.doctorCategoryService.updateDoctorCategory(id, updateDoctorCategoryDto);
    }
};
__decorate([
    (0, common_1.Get)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], DoctorCategoryController.prototype, "getDoctorCategory", null);
__decorate([
    (0, common_1.Get)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", void 0)
], DoctorCategoryController.prototype, "findDoctorCategoryById", null);
__decorate([
    (0, common_1.Post)(),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_doctorCategory_dto_1.CreateDoctorCategoryDto]),
    __metadata("design:returntype", void 0)
], DoctorCategoryController.prototype, "createDoctorCategory", null);
__decorate([
    (0, common_1.Delete)('/:id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", void 0)
], DoctorCategoryController.prototype, "deleteDoctorCategory", null);
__decorate([
    (0, common_1.Put)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, update_doctorCategory_dto_1.UpdateDoctorCategoryDto]),
    __metadata("design:returntype", void 0)
], DoctorCategoryController.prototype, "updateDoctorCategory", null);
DoctorCategoryController = __decorate([
    (0, swagger_1.ApiTags)('DoctorCategory'),
    (0, common_1.Controller)('DoctorCategory'),
    __metadata("design:paramtypes", [doctorCategory_service_1.DoctorCategoryService])
], DoctorCategoryController);
exports.DoctorCategoryController = DoctorCategoryController;
//# sourceMappingURL=doctorCategory.controller.js.map