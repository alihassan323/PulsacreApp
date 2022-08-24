/* eslint-disable prettier/prettier */

import { User } from 'src/auth/user.entity';

import { MailerService } from '@nestjs-modules/mailer';
//import { CreateUsersInput } from 'src/users/users.input';
import { BadRequestException, Injectable } from '@nestjs/common';

import { UserStatus } from '../auth/user.entity';

@Injectable()
export class MailService {
  constructor(private mailerService: MailerService) {}

  async sendForgetPasswordEmail(user, url: string, mobileUrl: string) {
    const sgMail = require('@sendgrid/mail');
    sgMail.setApiKey(
      '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',
    );

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
        // console.log(response[0].statusCode);
        // console.log(response[0].headers);
      })
      .catch((error) => {
        //console.error(error.response.body);
        throw new BadRequestException(error);
      });
  }

  async sendVerificationNumber(
    email: string,
    Name: string,
    RandomNumber: string,
  ) {
    const sgMail = require('@sendgrid/mail');
    sgMail.setApiKey(
      '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',
    );
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
        // console.log(response[0].statusCode);
        // console.log(response[0].headers);
      })
      .catch((error) => {
        // console.error(error.response.body);
        throw new BadRequestException(error);
      });
  }

  async sendStatusUpdate(email: string, name: string, status: UserStatus) {
    const sgMail = require('@sendgrid/mail');
    sgMail.setApiKey(
      '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',
    );
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
        // console.log(response[0].statusCode);
        // console.log(response[0].headers);
      })
      .catch((error) => {
        // console.error(error.response.body);
        throw new BadRequestException(error);
      });
  }

  async sendInvitation(email: string, name: string) {
    const sgMail = require('@sendgrid/mail');
    sgMail.setApiKey(
      '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',
    );
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
        // console.log(response[0].statusCode);
        // console.log(response[0].headers);
      })
      .catch((error) => {
        // console.error(error.response.body);
        throw new BadRequestException(error);
      });
  }

  // async sendRegistrationEmail(user: User, url: string) {
  //   const sgMail = require('@sendgrid/mail');
  //   sgMail.setApiKey(
  //     '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',
  //   );

  //   const msg = {
  //     to: user.email,
  //     from: 'babaarsaeed119@gmail.com',
  //     subject: 'Registration Email', // Subject line
  //     text: 'welcome', // plaintext body
  //     html:
  //       '<p>Hey ' +
  //       user.name +
  //       ',</p><p>Please click below to set the password</p><p><a href=' +
  //       url +
  //       '>set password</a></p><p>If you did not request this email you can safely ignore it.</p>',
  //   };
  //   sgMail
  //     .send(msg)
  //     .then((response) => {
  //       console.log(response[0].statusCode);
  //       console.log(response[0].headers);
  //     })
  //     .catch((error) => {
  //       console.error(error.response.body);
  //       throw new BadRequestException(error);
  //     });
  // }
}
