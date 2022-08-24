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
exports.VitalsInfoService = void 0;
const user_entity_1 = require("../auth/user.entity");
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const VitalsInfo_entity_1 = require("./VitalsInfo.entity");
const VitalsInfo_repository_1 = require("./VitalsInfo.repository");
let VitalsInfoService = class VitalsInfoService {
    constructor(VitalsInfoRepository) {
        this.VitalsInfoRepository = VitalsInfoRepository;
    }
    async createVitalsInfo(createVitalsInfoDto) {
        let vitalsInfo = new VitalsInfo_entity_1.VitalsInfo();
        const user = await user_entity_1.User.findOne({
            where: { id: createVitalsInfoDto.patient },
        });
        vitalsInfo = Object.assign(vitalsInfo, createVitalsInfoDto);
        vitalsInfo.patient = user.id;
        await VitalsInfo_entity_1.VitalsInfo.save(vitalsInfo);
        return vitalsInfo;
    }
    async getVitalsInfo() {
        return await VitalsInfo_entity_1.VitalsInfo.find();
    }
    async getVitalsHistory(id) {
        const vitalsInfo = await VitalsInfo_entity_1.VitalsInfo.find({ where: { patient: id } });
        const arr = [];
        vitalsInfo.forEach((element) => {
            arr.push(element);
        });
        arr.sort(function (a, b) {
            return b.datetime - a.datetime;
        });
        return arr;
    }
    async deleteVitalsInfo(id) {
        const find = await VitalsInfo_entity_1.VitalsInfo.find({ where: { patient: id } });
        find.forEach(async (element) => {
            return await VitalsInfo_entity_1.VitalsInfo.delete(element.id);
        });
    }
};
VitalsInfoService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(VitalsInfo_repository_1.VitalsInfoRepository)),
    __metadata("design:paramtypes", [VitalsInfo_repository_1.VitalsInfoRepository])
], VitalsInfoService);
exports.VitalsInfoService = VitalsInfoService;
//# sourceMappingURL=VitalsInfo.service.js.map