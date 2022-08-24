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
exports.MailService = void 0;
const mailer_1 = require("@nestjs-modules/mailer");
const common_1 = require("@nestjs/common");
let MailService = class MailService {
    constructor(mailerService) {
        this.mailerService = mailerService;
    }
    async sendForgetPasswordEmail(user, url, mobileUrl) {
        const sgMail = require('@sendgrid/mail');
        sgMail.setApiKey('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');
        const msg = {
            to: user.email,
            from: 'babaarsaeed119@gmail.com',
            subject: 'Forget Password',
            text: 'test',
            html: `<p>Hey${user.name}</p><p>Please click below to reset the password</p>
        <a clicktracking="off" href=${url}>Web forget password</a>
        <a clicktracking="off" href=${mobileUrl}>Mobile forget password</a>
        <p>If you did not request this email you can safely ignore it.</p>`,
        };
        sgMail
            .send(msg)
            .then((response) => {
        })
            .catch((error) => {
            throw new common_1.BadRequestException(error);
        });
    }
    async sendVerificationNumber(email, Name, RandomNumber) {
        const sgMail = require('@sendgrid/mail');
        sgMail.setApiKey('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');
        const msg = {
            to: email,
            from: 'babaarsaeed119@gmail.com',
            subject: 'Verifiication Number',
            text: 'test',
            html: `<p>Hey${Name}</p>
      <p>Verification code for your App is ${RandomNumber}</p>
        </p>`,
        };
        sgMail
            .send(msg)
            .then((response) => {
        })
            .catch((error) => {
            throw new common_1.BadRequestException(error);
        });
    }
    async sendStatusUpdate(email, name, status) {
        const sgMail = require('@sendgrid/mail');
        sgMail.setApiKey('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');
        const msg = {
            to: email,
            from: 'babaarsaeed119@gmail.com',
            subject: 'Status Updates',
            text: 'test',
            html: `<p>Hey ${name}</p>
      <p>Your account status is ${status}</p>
      </p> `,
        };
        sgMail
            .send(msg)
            .then((response) => {
        })
            .catch((error) => {
            throw new common_1.BadRequestException(error);
        });
    }
    async sendInvitation(email, name) {
        const sgMail = require('@sendgrid/mail');
        sgMail.setApiKey('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');
        const msg = {
            to: email,
            from: 'babaarsaeed119@gmail.com',
            subject: 'Invitation for Pulscare',
            text: 'test',
            html: `<p>Hey Dear Dr.${name}</p>
      <p>We are pleased to invite you on our application Pulscare.</p>
      <p>Join Us in this Holy Work.</p>
      <p>Regards Pulscare Team</p>
      </p>`,
        };
        sgMail
            .send(msg)
            .then((response) => {
        })
            .catch((error) => {
            throw new common_1.BadRequestException(error);
        });
    }
};
MailService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [mailer_1.MailerService])
], MailService);
exports.MailService = MailService;
//# sourceMappingURL=mail.service.js.map