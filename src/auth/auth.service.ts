/* eslint-disable prettier/prettier */
import * as bcrypt from 'bcrypt';
import { Exception } from 'handlebars';
import { UpdatedStatus, User } from 'src/auth/user.entity';
import { DoctorCategory } from 'src/Doctorcategory/doctorCategory.entity';
import { DoctorProfessionalInfo } from 'src/doctorprofessionalinfo/doctorprofessionalinfo.entity';
import { DoctorProfile } from 'src/Doctorsprofile/doctorprofile.entity';
import { MailService } from 'src/mail/mail.service';
import { Notification } from 'src/Notification/notification.entity';
import { RolesService } from 'src/role/roles.service';
import { UsersMedicalInfo } from 'src/usersmedicalinfo/usersmedicalinfo.entity';
import { UsersProfile } from 'src/usersprofile/usersprofile.entity';

import {
	BadRequestException,
	HttpException,
	HttpStatus,
	Injectable,
	NotFoundException,
	UnauthorizedException,
} from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { InjectRepository } from '@nestjs/typeorm';

import { DoctorProfileService } from '../Doctorsprofile/doctorprofile.service';
import { FavoriteDoctors } from '../favoriteDoctors/favoriteDoctors.entity';
import { UsersprofileService } from '../usersprofile/usersprofile.service';
import { AuthCredentialDto, UpdateStatusDto } from './dto/auth-credential.dto';
import {
	CreateUerDto,
	FindByEmailDto,
	FindByTypelDto,
	SendinvitataionDoctor,
	UserType,
} from './dto/create-user.dto';
import { ResetPasswordInput } from './dto/ResetPasswordInput.dto';
import {
	DoctorStatusUpdateDto,
	UpdateDoctorDto,
	UpdateUserDto,
} from './dto/update-auth.dto';
import { UserStatus } from './user.entity';
import { UserRepository } from './user.repository';
import { UsersType } from './usertype.model';

@Injectable()
export class AuthService {
  doctorInfo: any = [];
  constructor(
    @InjectRepository(UserRepository)
    private userRepository: UserRepository,
    private jwtService: JwtService,
    private roleServices: RolesService,
    private mailService: MailService,
    private usersProfileService: UsersprofileService,
    private doctorProfileService: DoctorProfileService,
  ) {}
  async signUp(createUerDto: CreateUerDto): Promise<User> {
    try {
      let user = new User();
      // delete createUerDto.confirm_password;
      user = Object.assign(user, createUerDto);
      const Role = await this.roleServices.getRoleByType(createUerDto.Type);
      user.role = Role;
      if (createUerDto.confirm_password == createUerDto.password) {
        const RandomNumber = Math.random().toString().substring(2, 7);
        user.randomNumber = RandomNumber;
        const email = user.email;
        const Name = user.name;
        await this.mailService.sendVerificationNumber(
          email,
          Name,
          RandomNumber,
        );

        await User.save(user);
        delete user.password;

        if (user.role.Type == UserType.Doctor) {
          const doctorProfile = new DoctorProfile();
          doctorProfile.user = user;
          doctorProfile.email = user.email;
          doctorProfile.name = user.name;
          await DoctorProfile.save(doctorProfile);
          const doctorProfessionalInfo = new DoctorProfessionalInfo();
          doctorProfessionalInfo.user = user;
          await DoctorProfessionalInfo.save(doctorProfessionalInfo);
        } else if (user.role.Type == UserType.Patient) {
          const usersProfile = new UsersProfile();
          usersProfile.user = user;
          usersProfile.email = user.email;
          usersProfile.name = user.name;
          await UsersProfile.save(usersProfile);
          const usersMedicalInfo = new UsersMedicalInfo();
          usersMedicalInfo.user = user;
          await UsersMedicalInfo.save(usersMedicalInfo);
        }
        const result: any = {
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
      } else {
        throw new BadRequestException(
          'Password and Confirm_password do not match',
        );
      }
    } catch (error) {
      throw new HttpException(error.message, HttpStatus.INTERNAL_SERVER_ERROR);
    }
  }
  async updateStatus(updateStatusDto: UpdateStatusDto) {
    const { email, randomNumber } = updateStatusDto;
    const user = await this.findUserByEmail({ email });

    if (
      randomNumber == user.randomNumber &&
      user.role.Type == UserType.Patient
    ) {
      user.status = UserStatus.Approved;
      await User.save(user);
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
    } else if (
      randomNumber == user.randomNumber &&
      user.role.Type == UserType.Doctor
    ) {
      user.status = UserStatus.Pending;
      await User.save(user);
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
    } else {
      throw new BadRequestException('Invalid verfication code');
    }
  }

  async signIn(authCredentialDto: AuthCredentialDto) {
    const user = await this.userRepository.signIn(authCredentialDto);
    if (!user) {
      throw new UnauthorizedException('Invalid Credentails');
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
        findnotification.device_Token = authCredentialDto.device_Token;
        await Notification.save(findnotification);
      } else {
        const notification = new Notification();
        notification.patient = user;
        notification.device_Token = authCredentialDto.device_Token;
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

    
     else if (user.role.title == 'Admin') {
      const payload = {
        id: user.id,
        role: user.role.id,
        type: user.role.Type,
        email: user.email,
        name: user.name,
      };

      const accessToken = this.jwtService.sign(payload);
      const newPayload = { ...payload, accessToken };
      return { payload: newPayload };
    } else {
      throw new UnauthorizedException(
       // await this.UserstatusPopUpMsg(user.id),
           `Your Login status is ${user.status}.Please contact to Admin `, 
      );
    }
  }

  async findUserByEmail(findByEmailDto: FindByEmailDto) {
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

  async findUsersByRoles(findByTypelDto: FindByTypelDto) {
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

  async findUserById(id: number): Promise<User> {
    const user = await User.findOne(id, { relations: ['role'] });
    if (!user) {
      throw new NotFoundException(`User with ID"${id}" not found`);
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

  async remove(id: number) {
    await User.delete(id);
  }

  async forgetPassword(email: string) {
    const user = await this.userRepository.findByEmail(email);
    if (!user || !user.email) {
      throw new HttpException(`User not found.`, HttpStatus.CONFLICT);
    }
    const payload = { email: user.email };
    const token = this.jwtService.sign(payload);

    const date = new Date();
    date.setHours(date.getHours() + 24);
    const url = `https://portal.pulscare.app/${token}`;

    const mobileUrl = `http://exampledummy.com/reset/${token}`;
    await this.mailService.sendForgetPasswordEmail(user, url, mobileUrl);
    const userType: UsersType = new UsersType();
    userType.message = 'Email sent successfully';
    userType.accessToken = token;
    return userType;
  }

  async resetPassword(
    resetPasswordInput: ResetPasswordInput,
  ): Promise<UsersType> {
    const isVerify = this.jwtService.verify(resetPasswordInput.token);
    if (!isVerify) {
      throw new HttpException('Invalid Token', HttpStatus.BAD_REQUEST);
    }
    const token = this.jwtService.decode(resetPasswordInput.token);
    const user = await this.userRepository.findByEmail(token['email']);
    if (!user) {
      throw new HttpException('Invalid User', HttpStatus.BAD_REQUEST);
    }
    if (user.password) {
      const isPassMatch = await bcrypt.compare(
        resetPasswordInput.password,
        user.password,
      );
      if (isPassMatch) {
        throw new HttpException(
          'New password should not be same as Old password.',
          HttpStatus.BAD_REQUEST,
        );
      }
    }
    if (resetPasswordInput.password !== resetPasswordInput.confirm_password) {
      throw new BadRequestException('Password do not match');
    }

    user.password = await bcrypt.hash(resetPasswordInput.password, 8);

    const updateUser = await User.save(user);
    if (!updateUser) {
      throw new HttpException('something went wrong', HttpStatus.BAD_REQUEST);
    }
    const userType: UsersType = new UsersType();
    userType.message = 'Password created successfully!';
    return userType;
  }

  async updateDoctorStatus(
    id: number,
    updateDoctorDto: UpdateDoctorDto,
  ): Promise<User> {
    const user = await this.findUserById(id);
    Object.assign(user, updateDoctorDto);
    await User.save(user);
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

  async updateUserStatus(
    id: number,
    updateUserDto: UpdateUserDto,
  ): Promise<User> {
    const user = await this.findUserById(id);
    Object.assign(user, updateUserDto);
    await User.save(user);
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

  async updateDoctorstatustoActive(
    id: number,
    doctorStatusUpdateDto: DoctorStatusUpdateDto,
  ): Promise<User> {
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

    await User.save(doctor);
    if (doctorStatusUpdateDto.updatedstatus == UpdatedStatus.Online) {
      const Patients = await FavoriteDoctors.find({
        where: { doctor: id },
        relations: ['patient'],
      });
      Patients.forEach(async (element) => {
        const notification_Token = await Notification.findOne({
          where: { patient: element.patient.id },
        });
        const Pushy = require('pushy');

        // Plug in your Secret API Key
        // Get it here: https://dashboard.pushy.me/
        const pushyAPI = new Pushy(
          '73ac2490328cf33200ca7992147d0907cc1c98d82bf7769e7963364f2f429f8e',
        );

        // Set push payload data to deliver to device(s)
        const data = {
          message: `Hey.Your Favorite Doctor ${doctor.name} is Online!`,
        };

        // Insert target device token(s) here
        const to = [notification_Token.device_Token];

        // Optionally, send to a publish/subscribe topic instead
        // to = '/topics/news';

        // Set optional push notification options (such as iOS notification fields)
        const options = {
          notification: {
            badge: 1,
            sound: 'ping.aiff',
            title: 'Test Notification',
            body: 'Hello Umar \u270c',
          },
        };

        // Send push notification via the Send Notifications API
        // https://pushy.me/docs/api/send-notifications
        pushyAPI.sendPushNotification(data, to, options, function (err, id) {
          if (err) {
            // return console.log('Fatal Error', err);
          }

          // Log success
          // console.log('Push sent successfully! (ID: ' + id + ')');
        });
      });
    }
    return doctor;
  }

  async getActiveDoctors(id: number) {
    const category = await DoctorCategory.findOne(id);
    const result = [];
    const found = await DoctorProfessionalInfo.find({
      where: { areaofSpeciality: category.id },
      relations: ['user', 'areaofSpeciality'],
    });
    const doctor = await DoctorProfile.find({
      relations: ['user'],
    });

    found.forEach((element) => {
      doctor.forEach((element1) => {
        if (
          element.user.id === element1.user.id &&
          element.user.updatedstatus === UpdatedStatus.Online &&
          element.user.status === UserStatus.Approved
        ) {
          delete element.user.password;
          delete element.user.appointmentPayment;
          delete element.user.appointmentPayments;
          delete element.user.favoriteDoctors;
          delete element.user.favoriteDoctors1;
          result.push({
            ...element,
            profilePicture: element1.profilePicture,
            about: element1.about,
          });
        }
      });
    });
    return result;
  }

  async getDoctor(id: number) {
    const found = await DoctorProfessionalInfo.find({
      where: { user: id },
      relations: ['user', 'areaofSpeciality'],
    });
    const doctor = await DoctorProfile.find({
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
          result.push({
            ...element,
            profilePicture: element1.profilePicture,
            about: element1.about,
          });
        }
      });
    });
    return result;
  }

  async SendInvitationToDocotr(sendinvitataionDoctor: SendinvitataionDoctor) {
    const name = sendinvitataionDoctor.name;
    const email = sendinvitataionDoctor.email;
    await this.mailService.sendInvitation(email, name);
    return 'Doctor invitation sent successfully';
  }

  async UserstatusPopUpMsg(id: number) {
    const user = await User.findOne(id);
    //const arr = [];
    //arr.push({
    const arr = {
      status: user.status,
    }; //});
    return arr;
  }
}
// async userprofiles(id: number) {
//   const doc = await User.findOne({ id });
//   console.log(doc);
//   const user = await UsersProfile.find({
//     where: { user: doc.id },
//     relations: ['user'],
//   });
//   return user;
// }

// async docprofiles(id: number) {
//   console.log(id);
//   const user1 = await DoctorProfile.findOne({
//     where: { user: id },
//     relations: ['user'],
//   });
//   const user = user1.user.id;
//   return user;
// }

//async getActiveDoctors(id: number) {
//   const category = await DoctorCategory.findOne(id);

//   const atts = [];
//   const found = await DoctorProfessionalInfo.find({
//     where: { areaofSpeciality: category.id },
//     relations: ['user', 'areaofSpeciality'],
//   });

//   found.forEach(async (element) => {
//     if (element.user.updatedstatus == UpdatedStatus.Active) {
//       atts.push({
//         id: element.user.id,
//         name: element.user.name,
//         areaofSpeciality: element.areaofSpeciality.name,
//         email: element.user.email,
//         consultation_Fee: element.consultation_Fee,
//         experiences: element.experiences,
//       });
//     }
//   });
//   return atts;
// }

// async getDoctor(id: number) {
//   const found = await DoctorProfessionalInfo.find({
//     where: { user: id },
//     relations: ['user', 'areaofSpeciality'],
//   });
//   const doctor = await DoctorProfile.find({
//     relations: ['user'],
//   });
//   const profileinfo = doctor.map((item) => ({
//     profilePicture: item.profilePicture,
//     about: item.about,
//   }));
//   const result = found.map((item, index) => ({
//     ...item,
//     ...profileinfo[index],
//   }));

//   return result;
// }

// async getrandomdoctorsinfo() {
//   const role = await Role.findOne({ where: { Type: UserType.Doctor } });
//   const doctors = await this.userRepository.find({
//     where: { role: role.id },
//   });
//   doctors.forEach((element) => {
//     delete element.password;
//     delete element.appointmentPayment;
//     delete element.usersProfile;
//     delete element.usersMedicalInfo;
//     delete element.callId;
//     delete element.socialauth;
//     delete element.appointmentPayments;
//     delete element.favoriteDoctors;
//     delete element.favoriteDoctors1;
//   });
//   return doctors;
// }
