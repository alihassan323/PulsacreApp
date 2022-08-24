import 'dotenv/config';

/* eslint-disable prettier/prettier */
import { Auth, google } from 'googleapis';
import { Exception } from 'handlebars';
import { UpdatedStatus, User, UserStatus } from 'src/auth/user.entity';
import { DoctorProfile } from 'src/Doctorsprofile/doctorprofile.entity';
import { Notification } from 'src/Notification/notification.entity';
import { UsersProfile } from 'src/usersprofile/usersprofile.entity';

import {
	BadRequestException,
	ConflictException,
	Injectable,
	NotFoundException,
	UnauthorizedException,
} from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';

import { AuthService } from '../auth/auth.service';
import { Role, UserType } from '../role/roles.entity';
import {
	CreateSocialauthdto,
	LoginSocialauthdto,
} from './dto/createsocialauth.dto';
import { Socialauth } from './socialauth.entity';
import { SocialauthRepository } from './socialauth.repository';

@Injectable()
export class SocialauthService {
  oauthClient: Auth.OAuth2Client;
  constructor(
    private readonly socialauthRepository: SocialauthRepository,
    private authservices: AuthService,
    private jwtService: JwtService,
    private authService: AuthService,
  ) {
    this.oauthClient = new google.auth.OAuth2(
      process.env.clientID,
      process.env.clientSecret,
    );
  }

  async authenticate(createSocialauthdto: CreateSocialauthdto) {
    const find = await User.findOne({
      where: { email: createSocialauthdto.email },
    });
    if (find) {
      throw new ConflictException('Email already exist');
    }
    try {
      if (createSocialauthdto.Type == UserType.Patient) {
        if (createSocialauthdto) {
          const user = {
            name: createSocialauthdto.name,
            email: createSocialauthdto.email,
            password: 'Test@1234',
            confirm_password: 'Test@1234',
            Type: createSocialauthdto.Type,
            callId: createSocialauthdto.callId,
            status: UserStatus.Approved,
          };
          const createduser = await this.authservices.signUp(user);
          const socialauth = new Socialauth();
          const social = {
            social_Id: createSocialauthdto.social_Id,
            email: createSocialauthdto.email,
            user: createduser.id,
          };
          Object.assign(socialauth, social);
          await Socialauth.save(socialauth);
          return createduser;
        }
      } else if (createSocialauthdto.Type == UserType.Doctor) {
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

          const socialauth = new Socialauth();
          const social = {
            social_Id: createSocialauthdto.social_Id,
            email: createSocialauthdto.email,
            user: createduser.id,
          };
          Object.assign(socialauth, social);
          await Socialauth.save(socialauth);
          return createduser;
        }
      }
    } catch (error) {
      throw new Exception('Invalid Action');
    }
  }

  async signIn(loginSocialauthdto: LoginSocialauthdto) {
    let Social: any;

    if (loginSocialauthdto.email) {
      Social = await Socialauth.findOne({
        where: {
          email: loginSocialauthdto.email,
          social_Id: loginSocialauthdto.social_Id,
        },
        relations: ['user'],
      });
    }
    if (!Social) {
      throw new UnauthorizedException('User not found');
    }

    const role = await Role.findOne({ Type: loginSocialauthdto.Type });

    const user = await User.findOne({
      where: { role: role.id, id: Social.user.id },
      relations: ['role'],
    });
    if (!user || user == undefined || user == null) {
      throw new NotFoundException(`User not found`);
    }
    const id = user.id;
    const users = await UsersProfile.findOne({ where: { user: id } });
    const doctors = await DoctorProfile.findOne({ where: { user: id } });
    if (user.status == UserStatus.Approved && user.role.title == 'Patient') {
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
      const newPayload = { ...payload, accessToken };
      const findnotification = await Notification.findOne({
        where: { patient: payload.id },
      });
      if (findnotification) {
        findnotification.device_Token = loginSocialauthdto.device_Token;
        await Notification.save(findnotification);
      } else {
        const notification = new Notification();
        notification.patient = user;
        notification.device_Token = loginSocialauthdto.device_Token;
        await Notification.save(notification);
      }
      return { payload: newPayload };
    } else if (
      user.status == UserStatus.Approved &&
      user.role.Type == 'Doctor'
    ) {
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
      const newPayload = { ...payload, accessToken };
      const doctors1 = await User.findOne({ where: { id: id } });
      if (doctors1) {
        doctors1.updatedstatus = UpdatedStatus.Online;
        await User.save(doctors1);
      }
      return { payload: newPayload };

    }
   else {
      //return await this.authService.UserstatusPopUpMsg(user.id);
      throw new UnauthorizedException(
           `Your Login status is ${user.status}.Please contact to Admin `,
      );
    }

    // async Facebookauthenticate(facebookSocialauthdto: FacebookSocialauthdto) {
    //   if (facebookSocialauthdto.Type == UserType.Patient) {
    //     if (facebookSocialauthdto) {
    //       const user = {
    //         name: facebookSocialauthdto.name,
    //         email: facebookSocialauthdto.email,
    //         password: 'Test@1234',
    //         confirm_password: 'Test@1234',
    //         Type: facebookSocialauthdto.Type,
    //         callId: facebookSocialauthdto.callId,
    //         status: UserStatus.Approved,
    //       };
    //       const createduser = await this.authservices.signUp(user);

    //       const socialauth = new Socialauth();
    //       const social = {
    //         social_Id: facebookSocialauthdto.social_Id,
    //         email: facebookSocialauthdto.email,
    //         socialType: 'facebook',
    //         user: createduser.id,
    //       };
    //       Object.assign(socialauth, social);
    //       await Socialauth.save(socialauth);
    //       return createduser;
    //     }
    //   } else if (facebookSocialauthdto.Type == UserType.Doctor) {
    //     if (facebookSocialauthdto) {
    //       const user = {
    //         name: facebookSocialauthdto.name,
    //         email: facebookSocialauthdto.email,
    //         password: 'Test@1234',
    //         confirm_password: 'Test@1234',
    //         Type: facebookSocialauthdto.Type,
    //         callId: facebookSocialauthdto.callId,
    //       };
    //       const createduser = await this.authservices.signUp(user);

    //       const socialauth = new Socialauth();
    //       const social = {
    //         social_Id: facebookSocialauthdto.social_Id,
    //         email: facebookSocialauthdto.email,
    //         socialType: 'facebook',
    //         user: createduser.id,
    //       };
    //       Object.assign(socialauth, social);
    //       await Socialauth.save(socialauth);
    //       return createduser;
    //     }
    //   }
    // }
  }

  // async fbtokeninfo(token) {
  //   return axios
  //     .get(
  //       `https://graph.facebook.com/v14.0/me?fields=id,name,email&access_token=${token}`,
  //     )
  //     .then((response) => {
  //       if (response.status === 200) {
  //         return response.data;
  //       } else {
  //         return null;
  //       }
  //     });
  // }
}
