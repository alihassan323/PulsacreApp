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
exports.FavoriteDoctorsController = void 0;
const common_1 = require("@nestjs/common");
const swagger_1 = require("@nestjs/swagger");
const CreatefavoriteDoctors_dto_1 = require("./dto/CreatefavoriteDoctors.dto");
const favoriteDoctors_service_1 = require("./favoriteDoctors.service");
let FavoriteDoctorsController = class FavoriteDoctorsController {
    constructor(favoriteDoctorsService) {
        this.favoriteDoctorsService = favoriteDoctorsService;
    }
    createfavouritedoctors(createFavoriteDoctorsDto) {
        return this.favoriteDoctorsService.createfavouritedoctors(createFavoriteDoctorsDto);
    }
    deletefavdoctor(deleteFavoriteDoctorsDto) {
        return this.favoriteDoctorsService.deletefavdoctor(deleteFavoriteDoctorsDto);
    }
    getfavoritedoctorById(id) {
        return this.favoriteDoctorsService.getfavoritedoctorById(id);
    }
};
__decorate([
    (0, common_1.Post)(),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [CreatefavoriteDoctors_dto_1.CreateFavoriteDoctorsDto]),
    __metadata("design:returntype", void 0)
], FavoriteDoctorsController.prototype, "createfavouritedoctors", null);
__decorate([
    (0, common_1.Delete)('/:id'),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [CreatefavoriteDoctors_dto_1.DeleteFavoriteDoctorsDto]),
    __metadata("design:returntype", void 0)
], FavoriteDoctorsController.prototype, "deletefavdoctor", null);
__decorate([
    (0, common_1.Get)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", void 0)
], FavoriteDoctorsController.prototype, "getfavoritedoctorById", null);
FavoriteDoctorsController = __decorate([
    (0, swagger_1.ApiTags)('FavoriteDoctors'),
    (0, common_1.Controller)('FavoriteDoctors'),
    __metadata("design:paramtypes", [favoriteDoctors_service_1.FavoriteDoctorsService])
], FavoriteDoctorsController);
exports.FavoriteDoctorsController = FavoriteDoctorsController;
//# sourceMappingURL=favoriteDoctors.controller.js.map