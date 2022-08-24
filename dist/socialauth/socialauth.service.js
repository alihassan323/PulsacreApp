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
exports.SocialauthService = void 0;
require("dotenv/config");
const googleapis_1 = require("googleapis");
const handlebars_1 = require("handlebars");
const user_entity_1 = require("../auth/user.entity");
const doctorprofile_entity_1 = require("../Doctorsprofile/doctorprofile.entity");
const notification_entity_1 = require("../Notification/notification.entity");
const usersprofile_entity_1 = require("../usersprofile/usersprofile.entity");
const common_1 = require("@nestjs/common");
const jwt_1 = require("@nestjs/jwt");
const auth_service_1 = require("../auth/auth.service");
const roles_entity_1 = require("../role/roles.entity");
const socialauth_entity_1 = require("./socialauth.entity");
const socialauth_repository_1 = require("./socialauth.repository");
let SocialauthService = class SocialauthService {
    constructor(socialauthRepository, authservices, jwtService, authService) {
        this.socialauthRepository = socialauthRepository;
        this.authservices = authservices;
        this.jwtService = jwtService;
        this.authService = authService;
        this.oauthClient = new googleapis_1.google.auth.OAuth2(process.env.clientID, process.env.clientSecret);
    }
    async authenticate(createSocialauthdto) {
        const find = await user_entity_1.User.findOne({
            where: { email: createSocialauthdto.email },
        });
        if (find) {
            throw new common_1.ConflictException('Email already exist');
        }
        try {
            if (createSocialauthdto.Type == roles_entity_1.UserType.Patient) {
                if (createSocialauthdto) {
                    const user = {
                        name: createSocialauthdto.name,
                        email: createSocialauthdto.email,
                        password: 'Test@1234',
                        confirm_password: 'Test@1234',
                        Type: createSocialauthdto.Type,
                        callId: createSocialauthdto.callId,
                        status: user_entity_1.UserStatus.Approved,
                    };
                    const createduser = await this.authservices.signUp(user);
                    const socialauth = new socialauth_entity_1.Socialauth();
                    const social = {
                        social_Id: createSocialauthdto.social_Id,
                        email: createSocialauthdto.email,
                        user: createduser.id,
                    };
                    Object.assign(socialauth, social);
                    await socialauth_entity_1.Socialauth.save(socialauth);
                    return createduser;
                }
            }
            else if (createSocialauthdto.Type == roles_entity_1.UserType.Doctor) {
                if (createSocialauthdto) {
                    const user = {
                        name: createSocialauthdto.name,
                        email: createSocialauthdto.email,
                        password: 'Test@1234',
                        confirm_password: 'Test@1234',
                        Type: createSocialauthdto.Type,
                        callId: createSocialauthdto.callId,
                    };
                    const createduser = await this.authservices.signUp(user);
                    const socialauth = new socialauth_entity_1.Socialauth();
                    const social = {
                        social_Id: createSocialauthdto.social_Id,
                        email: createSocialauthdto.email,
                        user: createduser.id,
                    };
                    Object.assign(socialauth, social);
                    await socialauth_entity_1.Socialauth.save(socialauth);
                    return createduser;
                }
            }
        }
        catch (error) {
            throw new handlebars_1.Exception('Invalid Action');
        }
    }
    async signIn(loginSocialauthdto) {
        let Social;
        if (loginSocialauthdto.email) {
            Social = await socialauth_entity_1.Socialauth.findOne({
                where: {
                    email: loginSocialauthdto.email,
                    social_Id: loginSocialauthdto.social_Id,
                },
                relations: ['user'],
            });
        }
        if (!Social) {
            throw new common_1.UnauthorizedException('User not found');
        }
        const role = await roles_entity_1.Role.findOne({ Type: loginSocialauthdto.Type });
        const user = await user_entity_1.User.findOne({
            where: { role: role.id, id: Social.user.id },
            relations: ['role'],
        });
        if (!user || user == undefined || user == null) {
            throw new common_1.NotFoundException(`User not found`);
        }
        const id = user.id;
        const users = await usersprofile_entity_1.UsersProfile.findOne({ where: { user: id } });
        const doctors = await doctorprofile_entity_1.DoctorProfile.findOne({ where: { user: id } });
        if (user.status == user_entity_1.UserStatus.Approved && user.role.title == 'Patient') {
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
                findnotification.device_Token = loginSocialauthdto.device_Token;
                await notification_entity_1.Notification.save(findnotification);
            }
            else {
                const notification = new notification_entity_1.Notification();
                notification.patient = user;
                notification.device_Token = loginSocialauthdto.device_Token;
                await notification_entity_1.Notification.save(notification);
            }
            return { payload: newPayload };
        }
        else if (user.status == user_entity_1.UserStatus.Approved &&
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
        else {
            throw new common_1.UnauthorizedException(`Your Login status is ${user.status}.Please contact to Admin `);
        }
    }
};
SocialauthService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [socialauth_repository_1.SocialauthRepository,
        auth_service_1.AuthService,
        jwt_1.JwtService,
        auth_service_1.AuthService])
], SocialauthService);
exports.SocialauthService = SocialauthService;
//# sourceMappingURL=socialauth.service.js.map