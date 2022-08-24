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
exports.AuthService = void 0;
const bcrypt = require("bcrypt");
const user_entity_1 = require("./user.entity");
const doctorCategory_entity_1 = require("../Doctorcategory/doctorCategory.entity");
const doctorprofessionalinfo_entity_1 = require("../doctorprofessionalinfo/doctorprofessionalinfo.entity");
const doctorprofile_entity_1 = require("../Doctorsprofile/doctorprofile.entity");
const mail_service_1 = require("../mail/mail.service");
const notification_entity_1 = require("../Notification/notification.entity");
const roles_service_1 = require("../role/roles.service");
const usersmedicalinfo_entity_1 = require("../usersmedicalinfo/usersmedicalinfo.entity");
const usersprofile_entity_1 = require("../usersprofile/usersprofile.entity");
const common_1 = require("@nestjs/common");
const jwt_1 = require("@nestjs/jwt");
const typeorm_1 = require("@nestjs/typeorm");
const doctorprofile_service_1 = require("../Doctorsprofile/doctorprofile.service");
const favoriteDoctors_entity_1 = require("../favoriteDoctors/favoriteDoctors.entity");
const usersprofile_service_1 = require("../usersprofile/usersprofile.service");
const create_user_dto_1 = require("./dto/create-user.dto");
const user_entity_2 = require("./user.entity");
const user_repository_1 = require("./user.repository");
const usertype_model_1 = require("./usertype.model");
let AuthService = class AuthService {
    constructor(userRepository, jwtService, roleServices, mailService, usersProfileService, doctorProfileService) {
        this.userRepository = userRepository;
        this.jwtService = jwtService;
        this.roleServices = roleServices;
        this.mailService = mailService;
        this.usersProfileService = usersProfileService;
        this.doctorProfileService = doctorProfileService;
        this.doctorInfo = [];
    }
    async signUp(createUerDto) {
        try {
            let user = new user_entity_1.User();
            user = Object.assign(user, createUerDto);
            const Role = await this.roleServices.getRoleByType(createUerDto.Type);
            user.role = Role;
            if (createUerDto.confirm_password == createUerDto.password) {
                const RandomNumber = Math.random().toString().substring(2, 7);
                user.randomNumber = RandomNumber;
                const email = user.email;
                const Name = user.name;
                await this.mailService.sendVerificationNumber(email, Name, RandomNumber);
                await user_entity_1.User.save(user);
                delete user.password;
                if (user.role.Type == create_user_dto_1.UserType.Doctor) {
                    const doctorProfile = new doctorprofile_entity_1.DoctorProfile();
                    doctorProfile.user = user;
                    doctorProfile.email = user.email;
                    doctorProfile.name = user.name;
                    await doctorprofile_entity_1.DoctorProfile.save(doctorProfile);
                    const doctorProfessionalInfo = new doctorprofessionalinfo_entity_1.DoctorProfessionalInfo();
                    doctorProfessionalInfo.user = user;
                    await doctorprofessionalinfo_entity_1.DoctorProfessionalInfo.save(doctorProfessionalInfo);
                }
                else if (user.role.Type == create_user_dto_1.UserType.Patient) {
                    const usersProfile = new usersprofile_entity_1.UsersProfile();
                    usersProfile.user = user;
                    usersProfile.email = user.email;
                    usersProfile.name = user.name;
                    await usersprofile_entity_1.UsersProfile.save(usersProfile);
                    const usersMedicalInfo = new usersmedicalinfo_entity_1.UsersMedicalInfo();
                    usersMedicalInfo.user = user;
                    await usersmedicalinfo_entity_1.UsersMedicalInfo.save(usersMedicalInfo);
                }
                const result = {
                    email: user.email,
                    name: user.name,
                    Type: createUerDto.Type,
                    callId: user.callId,
                    role: user.role,
                    randomNumber: user.randomNumber,
                    updatedstatus: 'Offline',
                    Wallet: 0,
                    totalWithdrawn: 0,
                    totalEarning: 0,
                    totalPaid: 0,
                    id: user.id,
                    status: 'Pending',
                    created_at: user.created_at,
                    updated_at: user.updated_at,
                };
                return result;
            }
            else {
                throw new common_1.BadRequestException('Password and Confirm_password do not match');
            }
        }
        catch (error) {
            throw new common_1.HttpException(error.message, common_1.HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }
    async updateStatus(updateStatusDto) {
        const { email, randomNumber } = updateStatusDto;
        const user = await this.findUserByEmail({ email });
        if (randomNumber == user.randomNumber &&
            user.role.Type == create_user_dto_1.UserType.Patient) {
            user.status = user_entity_2.UserStatus.Approved;
            await user_entity_1.User.save(user);
            delete user.password;
            delete user.doctorProfessionalInfo;
            delete user.doctorProfile;
            delete user.usersProfile;
            delete user.usersMedicalInfo;
            delete user.socialauth;
            delete user.appointmentPayment;
            delete user.appointmentPayments;
            delete user.favoriteDoctors;
            delete user.favoriteDoctors1;
            delete user.Wallet;
            return user;
        }
        else if (randomNumber == user.randomNumber &&
            user.role.Type == create_user_dto_1.UserType.Doctor) {
            user.status = user_entity_2.UserStatus.Pending;
            await user_entity_1.User.save(user);
            delete user.password;
            delete user.doctorProfessionalInfo;
            delete user.doctorProfile;
            delete user.usersProfile;
            delete user.usersMedicalInfo;
            delete user.socialauth;
            delete user.appointmentPayment;
            delete user.appointmentPayments;
            delete user.favoriteDoctors;
            delete user.favoriteDoctors1;
            delete user.Wallet;
            return user;
        }
        else {
            throw new common_1.BadRequestException('Invalid verfication code');
        }
    }
    async signIn(authCredentialDto) {
        const user = await this.userRepository.signIn(authCredentialDto);
        if (!user) {
            throw new common_1.UnauthorizedException('Invalid Credentails');
        }
        const id = user.id;
        const users = await usersprofile_entity_1.UsersProfile.findOne({ where: { user: id } });
        const doctors = await doctorprofile_entity_1.DoctorProfile.findOne({ where: { user: id } });
        if (user.status == user_entity_2.UserStatus.Approved && user.role.title == 'Patient') {
            const payload = {
                id: user.id,
                role: user.role.id,
                type: user.role.Type,
                email: user.email,
                name: user.name,
                profilePicture: users.profilePicture,
                callId: user.callId,
            };
            const accessToken = this.jwtService.sign(payload);
            const newPayload = Object.assign(Object.assign({}, payload), { accessToken });
            const findnotification = await notification_entity_1.Notification.findOne({
                where: { patient: payload.id },
            });
            if (findnotification) {
                findnotification.device_Token = authCredentialDto.device_Token;
                await notification_entity_1.Notification.save(findnotification);
            }
            else {
                const notification = new notification_entity_1.Notification();
                notification.patient = user;
                notification.device_Token = authCredentialDto.device_Token;
                await notification_entity_1.Notification.save(notification);
            }
            return { payload: newPayload };
        }
        else if (user.status == user_entity_2.UserStatus.Approved &&
            user.role.Type == 'Doctor') {
            const payload = {
                id: user.id,
                role: user.role.id,
                type: user.role.Type,
                email: user.email,
                name: user.name,
                profilePicture: doctors.profilePicture,
                callId: user.callId,
            };
            const accessToken = this.jwtService.sign(payload);
            const newPayload = Object.assign(Object.assign({}, payload), { accessToken });
            const doctors1 = await user_entity_1.User.findOne({ where: { id: id } });
            if (doctors1) {
                doctors1.updatedstatus = user_entity_1.UpdatedStatus.Online;
                await user_entity_1.User.save(doctors1);
            }
            return { payload: newPayload };
        }
        else if (user.role.title == 'Admin') {
            const payload = {
                id: user.id,
                role: user.role.id,
                type: user.role.Type,
                email: user.email,
                name: user.name,
            };
            const accessToken = this.jwtService.sign(payload);
            const newPayload = Object.assign(Object.assign({}, payload), { accessToken });
            return { payload: newPayload };
        }
        else {
            throw new common_1.UnauthorizedException(`Your Login status is ${user.status}.Please contact to Admin `);
        }
    }
    async findUserByEmail(findByEmailDto) {
        const { email } = findByEmailDto;
        const user = await this.userRepository.findByEmail(email);
        delete user.password;
        delete user.doctorPayment;
        delete user.doctorProfessionalInfo;
        delete user.doctorProfile;
        delete user.usersProfile;
        delete user.usersMedicalInfo;
        delete user.socialauth;
        delete user.appointmentPayment;
        delete user.appointmentPayments;
        delete user.favoriteDoctors;
        delete user.favoriteDoctors1;
        delete user.Wallet;
        return user;
    }
    async findAllUsers() {
        const doctors = await this.doctorProfileService.getdoctorProfile();
        const users = await this.usersProfileService.getUsersProfile();
        const doc = [];
        doctors.forEach((element) => {
            doc.push({
                id: element.user.id,
                name: element.name,
                type: 'Doctor',
                status: element.user.status,
                email: element.email,
                date: element.user.created_at,
                picture: element.profilePicture,
            });
        });
        users.forEach((element) => {
            doc.push({
                id: element.user.id,
                name: element.name,
                type: 'Patient',
                status: element.user.status,
                email: element.email,
                date: element.user.created_at,
                picture: element.profilePicture,
            });
        });
        doc.sort(function (a, b) {
            return b.id - a.id;
        });
        return doc;
    }
    async findUsersByRoles(findByTypelDto) {
        const Role = await this.roleServices.getRoleByType(findByTypelDto.Type);
        const found = await this.userRepository.find({
            where: { role: Role.id },
            relations: ['role'],
        });
        found.forEach((element) => {
            delete element.password;
            delete element.doctorPayment;
            delete element.doctorProfessionalInfo;
            delete element.doctorProfile;
            delete element.usersMedicalInfo;
            delete element.usersProfile;
            delete element.socialauth;
            delete element.appointmentPayment;
            delete element.appointmentPayments;
            delete element.favoriteDoctors;
            delete element.favoriteDoctors1;
            delete element.Wallet;
        });
        return found;
    }
    async findUserById(id) {
        const user = await user_entity_1.User.findOne(id, { relations: ['role'] });
        if (!user) {
            throw new common_1.NotFoundException(`User with ID"${id}" not found`);
        }
        delete user.password;
        delete user.doctorPayment;
        delete user.doctorProfessionalInfo;
        delete user.doctorProfile;
        delete user.usersProfile;
        delete user.usersMedicalInfo;
        delete user.socialauth;
        delete user.appointmentPayment;
        delete user.appointmentPayments;
        delete user.favoriteDoctors;
        delete user.favoriteDoctors1;
        delete user.Wallet;
        return user;
    }
    async remove(id) {
        await user_entity_1.User.delete(id);
    }
    async forgetPassword(email) {
        const user = await this.userRepository.findByEmail(email);
        if (!user || !user.email) {
            throw new common_1.HttpException(`User not found.`, common_1.HttpStatus.CONFLICT);
        }
        const payload = { email: user.email };
        const token = this.jwtService.sign(payload);
        const date = new Date();
        date.setHours(date.getHours() + 24);
        const url = `https://portal.pulscare.app/${token}`;
        const mobileUrl = `http://exampledummy.com/reset/${token}`;
        await this.mailService.sendForgetPasswordEmail(user, url, mobileUrl);
        const userType = new usertype_model_1.UsersType();
        userType.message = 'Email sent successfully';
        userType.accessToken = token;
        return userType;
    }
    async resetPassword(resetPasswordInput) {
        const isVerify = this.jwtService.verify(resetPasswordInput.token);
        if (!isVerify) {
            throw new common_1.HttpException('Invalid Token', common_1.HttpStatus.BAD_REQUEST);
        }
        const token = this.jwtService.decode(resetPasswordInput.token);
        const user = await this.userRepository.findByEmail(token['email']);
        if (!user) {
            throw new common_1.HttpException('Invalid User', common_1.HttpStatus.BAD_REQUEST);
        }
        if (user.password) {
            const isPassMatch = await bcrypt.compare(resetPasswordInput.password, user.password);
            if (isPassMatch) {
                throw new common_1.HttpException('New password should not be same as Old password.', common_1.HttpStatus.BAD_REQUEST);
            }
        }
        if (resetPasswordInput.password !== resetPasswordInput.confirm_password) {
            throw new common_1.BadRequestException('Password do not match');
        }
        user.password = await bcrypt.hash(resetPasswordInput.password, 8);
        const updateUser = await user_entity_1.User.save(user);
        if (!updateUser) {
            throw new common_1.HttpException('something went wrong', common_1.HttpStatus.BAD_REQUEST);
        }
        const userType = new usertype_model_1.UsersType();
        userType.message = 'Password created successfully!';
        return userType;
    }
    async updateDoctorStatus(id, updateDoctorDto) {
        const user = await this.findUserById(id);
        Object.assign(user, updateDoctorDto);
        await user_entity_1.User.save(user);
        const email = user.email;
        const status = user.status;
        const name = user.status;
        await this.mailService.sendStatusUpdate(email, name, status);
        delete user.password;
        delete user.appointmentPayment;
        delete user.appointmentPayments;
        delete user.favoriteDoctors;
        delete user.favoriteDoctors1;
        delete user.Wallet;
        delete user.doctorProfessionalInfo;
        delete user.doctorProfile;
        delete user.socialauth;
        delete user.doctorPayment;
        delete user.patientAccount;
        return user;
    }
    async updateUserStatus(id, updateUserDto) {
        const user = await this.findUserById(id);
        Object.assign(user, updateUserDto);
        await user_entity_1.User.save(user);
        const email = user.email;
        const status = user.status;
        const name = user.name;
        await this.mailService.sendStatusUpdate(email, name, status);
        delete user.password;
        delete user.appointmentPayment;
        delete user.appointmentPayments;
        delete user.favoriteDoctors;
        delete user.favoriteDoctors1;
        delete user.Wallet;
        delete user.doctorProfessionalInfo;
        delete user.doctorProfile;
        delete user.socialauth;
        delete user.doctorPayment;
        delete user.patientAccount;
        return user;
    }
    async updateDoctorstatustoActive(id, doctorStatusUpdateDto) {
        const doctor = await this.findUserById(id);
        Object.assign(doctor, doctorStatusUpdateDto);
        delete doctor.password;
        delete doctor.appointmentPayment;
        delete doctor.appointmentPayments;
        delete doctor.favoriteDoctors;
        delete doctor.favoriteDoctors1;
        delete doctor.usersProfile;
        delete doctor.socialauth;
        delete doctor.appointmentPayment;
        delete doctor.appointmentPayments;
        delete doctor.favoriteDoctors;
        delete doctor.favoriteDoctors1;
        delete doctor.Wallet;
        delete doctor.notification;
        await user_entity_1.User.save(doctor);
        if (doctorStatusUpdateDto.updatedstatus == user_entity_1.UpdatedStatus.Online) {
            const Patients = await favoriteDoctors_entity_1.FavoriteDoctors.find({
                where: { doctor: id },
                relations: ['patient'],
            });
            Patients.forEach(async (element) => {
                const notification_Token = await notification_entity_1.Notification.findOne({
                    where: { patient: element.patient.id },
                });
                const Pushy = require('pushy');
                const pushyAPI = new Pushy('73ac2490328cf33200ca7992147d0907cc1c98d82bf7769e7963364f2f429f8e');
                const data = {
                    message: `Hey.Your Favorite Doctor ${doctor.name} is Online!`,
                };
                const to = [notification_Token.device_Token];
                const options = {
                    notification: {
                        badge: 1,
                        sound: 'ping.aiff',
                        title: 'Test Notification',
                        body: 'Hello Umar \u270c',
                    },
                };
                pushyAPI.sendPushNotification(data, to, options, function (err, id) {
                    if (err) {
                    }
                });
            });
        }
        return doctor;
    }
    async getActiveDoctors(id) {
        const category = await doctorCategory_entity_1.DoctorCategory.findOne(id);
        const result = [];
        const found = await doctorprofessionalinfo_entity_1.DoctorProfessionalInfo.find({
            where: { areaofSpeciality: category.id },
            relations: ['user', 'areaofSpeciality'],
        });
        const doctor = await doctorprofile_entity_1.DoctorProfile.find({
            relations: ['user'],
        });
        found.forEach((element) => {
            doctor.forEach((element1) => {
                if (element.user.id === element1.user.id &&
                    element.user.updatedstatus === user_entity_1.UpdatedStatus.Online &&
                    element.user.status === user_entity_2.UserStatus.Approved) {
                    delete element.user.password;
                    delete element.user.appointmentPayment;
                    delete element.user.appointmentPayments;
                    delete element.user.favoriteDoctors;
                    delete element.user.favoriteDoctors1;
                    result.push(Object.assign(Object.assign({}, element), { profilePicture: element1.profilePicture, about: element1.about }));
                }
            });
        });
        return result;
    }
    async getDoctor(id) {
        const found = await doctorprofessionalinfo_entity_1.DoctorProfessionalInfo.find({
            where: { user: id },
            relations: ['user', 'areaofSpeciality'],
        });
        const doctor = await doctorprofile_entity_1.DoctorProfile.find({
            relations: ['user'],
        });
        const result = [];
        found.forEach((element) => {
            doctor.forEach((element1) => {
                if (element.user.id === element1.user.id) {
                    delete element.user.password;
                    delete element.user.appointmentPayment;
                    delete element.user.appointmentPayments;
                    delete element.user.favoriteDoctors;
                    delete element.user.favoriteDoctors1;
                    delete element.user.doctorProfessionalInfo;
                    result.push(Object.assign(Object.assign({}, element), { profilePicture: element1.profilePicture, about: element1.about }));
                }
            });
        });
        return result;
    }
    async SendInvitationToDocotr(sendinvitataionDoctor) {
        const name = sendinvitataionDoctor.name;
        const email = sendinvitataionDoctor.email;
        await this.mailService.sendInvitation(email, name);
        return 'Doctor invitation sent successfully';
    }
    async UserstatusPopUpMsg(id) {
        const user = await user_entity_1.User.findOne(id);
        const arr = {
            status: user.status,
        };
        return arr;
    }
};
AuthService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(user_repository_1.UserRepository)),
    __metadata("design:paramtypes", [user_repository_1.UserRepository,
        jwt_1.JwtService,
        roles_service_1.RolesService,
        mail_service_1.MailService,
        usersprofile_service_1.UsersprofileService,
        doctorprofile_service_1.DoctorProfileService])
], AuthService);
exports.AuthService = AuthService;
//# sourceMappingURL=auth.service.js.map