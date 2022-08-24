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
exports.DoctorPaymentService = void 0;
const user_entity_1 = require("../auth/user.entity");
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const doctorprofile_entity_1 = require("../Doctorsprofile/doctorprofile.entity");
const DoctorPayment_entity_1 = require("./DoctorPayment.entity");
const DoctorPayment_repository_1 = require("./DoctorPayment.repository");
let DoctorPaymentService = class DoctorPaymentService {
    constructor(doctorPaymentRepository) {
        this.doctorPaymentRepository = doctorPaymentRepository;
    }
    async getdoctorPayment() {
        const doctorPayment = await this.doctorPaymentRepository.find({
            relations: ['doctor'],
        });
        doctorPayment.forEach((element) => {
            delete element.doctor.doctorProfile;
            delete element.doctor.doctorProfessionalInfo;
            delete element.doctor.doctorPayment;
            delete element.doctor.usersMedicalInfo;
            delete element.doctor.usersProfile;
            delete element.doctor.appointmentPayment;
            delete element.doctor.password;
            delete element.doctor.notification;
            delete element.doctor.socialauth;
            delete element.doctor.vitalsInfo;
            delete element.doctor.appointmentPayments;
            delete element.doctor.favoriteDoctors;
            delete element.doctor.favoriteDoctors1;
        });
        return doctorPayment;
    }
    async getdoctorPaymentById(id) {
        const doctorPayment = await this.doctorPaymentRepository.find({
            where: { doctor: id },
            relations: ['doctor'],
        });
        doctorPayment.forEach(element => {
            delete element.doctor.appointmentPayment;
            delete element.doctor.appointmentPayments;
            delete element.doctor.doctorProfessionalInfo;
            delete element.doctor.password;
            delete element.doctor.favoriteDoctors;
            delete element.doctor.favoriteDoctors1;
            delete element.doctor.vitalsInfo;
            delete element.doctor.usersProfile;
            delete element.doctor.notification;
            delete element.doctor.socialauth;
            delete element.doctor.usersMedicalInfo;
        });
        doctorPayment.sort(function (a, b) {
            return b.id - a.id;
        });
        return doctorPayment;
    }
    async createDoctorPayment(createDoctorPaymentDto) {
        const doctorauth = await user_entity_1.User.findOne({
            where: { id: createDoctorPaymentDto.doctor },
        });
        const doctorPayment = new DoctorPayment_entity_1.DoctorPayment();
        let check = false;
        if (createDoctorPaymentDto.account_Holder_name != null &&
            createDoctorPaymentDto.account_Number != null &&
            createDoctorPaymentDto.cheque_Amount != null &&
            createDoctorPaymentDto.cheque_Number != null &&
            doctorauth.Wallet >= createDoctorPaymentDto.cheque_Amount) {
            Object.assign(doctorPayment, createDoctorPaymentDto);
            check = true;
            const doctor = await doctorprofile_entity_1.DoctorProfile.findOne({
                where: { user: createDoctorPaymentDto.doctor },
                relations: ['user'],
            });
            doctor.about = createDoctorPaymentDto.about;
            await doctorprofile_entity_1.DoctorProfile.save(doctor);
            const authtable = await user_entity_1.User.findOne({
                where: { id: createDoctorPaymentDto.doctor },
            });
            authtable.totalWithdrawn =
                authtable.totalWithdrawn + createDoctorPaymentDto.cheque_Amount;
            authtable.Wallet =
                authtable.Wallet - createDoctorPaymentDto.cheque_Amount;
            await user_entity_1.User.save(authtable);
        }
        if (check) {
            return await DoctorPayment_entity_1.DoctorPayment.save(doctorPayment);
        }
        else {
            throw new common_1.ConflictException('Wallet amount is less than withdraw.');
        }
    }
    async deletedoctorPayment(id) {
        const deletedoctorPayment = await this.doctorPaymentRepository.delete(id);
        if (deletedoctorPayment.affected == 0) {
            throw new common_1.NotFoundException(`doctorPayment with ID "${id}" not found `);
        }
    }
    async AdmintodoctorPayment(createPaymentDto) {
        const doctors = await DoctorPayment_entity_1.DoctorPayment.find({ relations: ['doctor'] });
        const arr = [];
        let date1 = createPaymentDto.date1;
        let date2 = createPaymentDto.date2;
        date1 = new Date(date1);
        const date3 = date1.getFullYear() +
            '-' +
            (date1.getMonth() + 1) +
            '-' +
            date1.getDate();
        date2 = new Date(date2);
        const date4 = date2.getFullYear() +
            '-' +
            (date2.getMonth() + 1) +
            '-' +
            date2.getDate();
        doctors.forEach((element) => {
            let date5 = element.datetime;
            date5 = new Date(date5);
            const date6 = date5.getFullYear() +
                '-' +
                (date5.getMonth() + 1) +
                '-' +
                date5.getDate();
            if (date6 >= date3 && date6 <= date4) {
                arr.push({
                    doctorId: element.doctor.id,
                    doctor_Name: element.doctor.name,
                    payment: element.cheque_Amount,
                    cheque_Number: element.cheque_Number,
                    account_Holder_Name: element.account_Holder_name,
                    account_Number: element.account_Number,
                    datetime: element.datetime,
                });
            }
        });
        arr.sort(function (a, b) {
            return b.datetime - a.datetime;
        });
        return arr;
    }
};
DoctorPaymentService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(DoctorPayment_repository_1.DoctorPaymentRepository)),
    __metadata("design:paramtypes", [DoctorPayment_repository_1.DoctorPaymentRepository])
], DoctorPaymentService);
exports.DoctorPaymentService = DoctorPaymentService;
//# sourceMappingURL=DoctorPayment.service.js.map