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
exports.AppointmentPaymentService = void 0;
const user_entity_1 = require("../auth/user.entity");
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const DoctorPayment_entity_1 = require("../DoctorPayment/DoctorPayment.entity");
const doctorprofessionalinfo_entity_1 = require("../doctorprofessionalinfo/doctorprofessionalinfo.entity");
const AppointmentPayment_entity_1 = require("./AppointmentPayment.entity");
const AppointmentPayment_repository_1 = require("./AppointmentPayment.repository");
let AppointmentPaymentService = class AppointmentPaymentService {
    constructor(appointmentPaymentRepository) {
        this.appointmentPaymentRepository = appointmentPaymentRepository;
    }
    async todayPatientsandEarning(id) {
        const foundDoctor = await this.appointmentPaymentRepository.find({
            where: { doctor: id },
        });
        const today = new Date();
        const f1 = today.getFullYear() +
            '-' +
            (today.getMonth() + 1) +
            '-' +
            today.getDate();
        const arr = [];
        let earned = 0;
        foundDoctor.forEach((element) => {
            let date1 = element.datetime;
            date1 = new Date(date1);
            const date = date1.getFullYear() +
                '-' +
                (date1.getMonth() + 1) +
                '-' +
                date1.getDate();
            if (f1 == date) {
                arr.push({ element });
                earned += element.amountPaid;
            }
        });
        const finalarray = {
            PatientsToday: arr.length,
            Earned: earned,
        };
        return finalarray;
    }
    async createappointmentPayment(createPatientAppointmentDto) {
        const appointmentPayment = new AppointmentPayment_entity_1.AppointmentPayment();
        Object.assign(appointmentPayment, createPatientAppointmentDto);
        const doctorpro = await doctorprofessionalinfo_entity_1.DoctorProfessionalInfo.findOne({
            where: { user: createPatientAppointmentDto.doctor },
        });
        const doctor = await user_entity_1.User.findOne({
            where: { id: createPatientAppointmentDto.doctor },
        });
        const patient = await user_entity_1.User.findOne({
            where: { id: createPatientAppointmentDto.patient },
        });
        appointmentPayment.amountPaid = doctorpro.consultation_Fee;
        if (patient.Wallet >= doctorpro.consultation_Fee) {
            patient.Wallet = patient.Wallet - doctorpro.consultation_Fee;
            doctor.Wallet = doctor.Wallet + doctorpro.consultation_Fee;
            doctor.totalEarning = doctor.totalEarning + doctorpro.consultation_Fee;
            await user_entity_1.User.save(patient);
            await user_entity_1.User.save(doctor);
            await AppointmentPayment_entity_1.AppointmentPayment.save(appointmentPayment);
            const Patient1 = await AppointmentPayment_entity_1.AppointmentPayment.find({
                where: { patient: appointmentPayment.patient },
            });
            let TotalPaid = 0;
            Patient1.forEach((element) => {
                TotalPaid += element.amountPaid;
            });
            const patient2 = await user_entity_1.User.findOne({
                where: { id: createPatientAppointmentDto.patient },
            });
            patient2.totalPaid = TotalPaid;
            await user_entity_1.User.save(patient2);
            return appointmentPayment;
        }
        else {
            throw new common_1.ConflictException(`Call can't proceed because your Wallet Amount is less than Doctor consultation_fee`);
        }
    }
    async getDoctorTotalEarning(id) {
        const doctor = await AppointmentPayment_entity_1.AppointmentPayment.find({ where: { doctor: id } });
        let totalearning = 0;
        doctor.forEach((element) => {
            totalearning += element.amountPaid;
        });
        const finalarray = {
            TotalEarning: totalearning,
        };
        return finalarray;
    }
    async getDoctorTotalWithdrawn(id) {
        const doctor = await user_entity_1.User.findOne({ where: { id: id } });
        const totalwithdrawn = {
            totalWithdrawn: doctor.totalWithdrawn,
        };
        return totalwithdrawn;
    }
    async getDoctorAvailableBalance(id) {
        const doctor = await user_entity_1.User.findOne({ where: { id: id } });
        const Availablebalance = {
            availablebalance: doctor.Wallet,
        };
        return Availablebalance;
    }
    async getDoctorSummary(id) {
        const doctor = await AppointmentPayment_entity_1.AppointmentPayment.find({ where: { doctor: id } });
        let totalearning = 0;
        doctor.forEach((element) => {
            totalearning += element.amountPaid;
        });
        const finalarray = {
            totalEarning: totalearning,
        };
        const user = await user_entity_1.User.findOne({ where: { id: id } });
        user.totalEarning = totalearning;
        await user_entity_1.User.save(user);
        const doctor1 = await user_entity_1.User.findOne({ where: { id: id } });
        const totalwithdrawn = {
            totalWithdrawn: doctor1.totalWithdrawn,
        };
        const doctor2 = await user_entity_1.User.findOne({ where: { id: id } });
        const Availablebalance = {
            availableBalance: doctor2.Wallet,
        };
        const DoctorSummary = Object.assign(Object.assign(Object.assign({}, finalarray), totalwithdrawn), Availablebalance);
        return DoctorSummary;
    }
    async getDoctorCallHistory(id) {
        const doctor = await AppointmentPayment_entity_1.AppointmentPayment.find({
            where: { doctor: id },
            relations: ['patient'],
        });
        const arr = [];
        doctor.forEach(async (element) => {
            arr.push({
                patientId: element.patient.id,
                name: element.patient.name,
                profilePicture: element.patient.usersProfile.profilePicture,
                dateTime: element.datetime,
            });
        });
        arr.sort(function (a, b) {
            return b.dateTime - a.dateTime;
        });
        return arr;
    }
    async getPatientCallHistory(id) {
        const patient = await AppointmentPayment_entity_1.AppointmentPayment.find({
            where: { patient: id },
            relations: ['doctor'],
        });
        const arr = [];
        patient.forEach(async (element) => {
            arr.push({
                doctorId: element.doctor.id,
                name: element.doctor.name,
                charges: element.amountPaid,
                profilePicture: element.doctor.doctorProfile.profilePicture,
                dateTime: element.datetime,
            });
        });
        arr.sort(function (a, b) {
            return b.dateTime - a.dateTime;
        });
        return arr;
    }
    async getPatientTotalpaid(id) {
        const Patient = await AppointmentPayment_entity_1.AppointmentPayment.find({
            where: { patient: id },
        });
        let TotalPaid = 0;
        Patient.forEach((element) => {
            TotalPaid += element.amountPaid;
        });
        const paid = {
            TotalPaid: TotalPaid,
        };
        return paid;
    }
    async getDoctorTransasctionHistory(id, getDoctorTransactionDto) {
        const arr = [];
        const doctorPayment = await DoctorPayment_entity_1.DoctorPayment.find({ where: { doctor: id } });
        const doctor = await AppointmentPayment_entity_1.AppointmentPayment.find({ where: { doctor: id } });
        let date1 = getDoctorTransactionDto.date1;
        let date2 = getDoctorTransactionDto.date2;
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
        doctor.forEach((element) => {
            let date5 = element.datetime;
            date5 = new Date(date5);
            const date6 = date5.getFullYear() +
                '-' +
                (date5.getMonth() + 1) +
                '-' +
                date5.getDate();
            if (date6 >= date3 && date6 <= date4) {
                arr.push({
                    type: 'Appointment',
                    cash: element.amountPaid,
                    datetime: element.datetime,
                });
            }
        });
        doctorPayment.forEach((element) => {
            let date5 = element.datetime;
            date5 = new Date(date5);
            const date6 = date5.getFullYear() +
                '-' +
                (date5.getMonth() + 1) +
                '-' +
                date5.getDate();
            if (date6 >= date3 && date6 <= date4) {
                arr.push({
                    type: 'Withdrawn Earning',
                    cash: element.cheque_Amount,
                    datetime: element.datetime,
                });
            }
        });
        arr.sort(function (a, b) {
            return b.datetime - a.datetime;
        });
        return arr;
    }
    async getdoctortransactiondetails(id) {
        const doctorPayment = await DoctorPayment_entity_1.DoctorPayment.find({
            where: { doctor: id },
            relations: ['doctor'],
        });
        const appointmentpayment = await AppointmentPayment_entity_1.AppointmentPayment.find({
            where: { doctor: id },
            relations: ['doctor'],
        });
        const arr = [];
        doctorPayment.forEach((element) => {
            arr.push({
                type: 'Withdrawn Earning',
                cash: element.cheque_Amount,
                datetime: element.datetime,
            });
        });
        appointmentpayment.forEach((element1) => {
            arr.push({
                type: 'Appointment',
                cash: element1.amountPaid,
                datetime: element1.datetime,
            });
        });
        arr.sort(function (a, b) {
            return b.datetime - a.datetime;
        });
        return arr;
    }
    async PatienttoAdminPayment(createpatPaymentDto) {
        const patient = await AppointmentPayment_entity_1.AppointmentPayment.find({
            relations: ['patient', 'doctor'],
        });
        const arr = [];
        let date1 = createpatPaymentDto.date1;
        let date2 = createpatPaymentDto.date2;
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
        patient.forEach((element) => {
            let date5 = element.datetime;
            date5 = new Date(date5);
            const date6 = date5.getFullYear() +
                '-' +
                (date5.getMonth() + 1) +
                '-' +
                date5.getDate();
            if (date6 >= date3 && date6 <= date4) {
                arr.push({
                    patientId: element.patient.id,
                    patient_Name: element.patient.name,
                    doctorId: element.doctor.id,
                    doctor_Name: element.doctor.name,
                    payment: element.amountPaid,
                    datetime: element.datetime,
                });
            }
        });
        arr.sort(function (a, b) {
            return b.datetime - a.datetime;
        });
        return arr;
    }
    async appointment(id) {
        await AppointmentPayment_entity_1.AppointmentPayment.delete(id);
    }
};
AppointmentPaymentService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(AppointmentPayment_repository_1.AppointmentPaymentRepository)),
    __metadata("design:paramtypes", [AppointmentPayment_repository_1.AppointmentPaymentRepository])
], AppointmentPaymentService);
exports.AppointmentPaymentService = AppointmentPaymentService;
//# sourceMappingURL=AppointmentPayment.service.js.map