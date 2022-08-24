import { User } from 'src/auth/user.entity';
import { MailService } from 'src/mail/mail.service';
import { RolesService } from 'src/role/roles.service';
import { JwtService } from '@nestjs/jwt';
import { DoctorProfileService } from '../Doctorsprofile/doctorprofile.service';
import { UsersprofileService } from '../usersprofile/usersprofile.service';
import { AuthCredentialDto, UpdateStatusDto } from './dto/auth-credential.dto';
import { CreateUerDto, FindByEmailDto, FindByTypelDto, SendinvitataionDoctor } from './dto/create-user.dto';
import { ResetPasswordInput } from './dto/ResetPasswordInput.dto';
import { DoctorStatusUpdateDto, UpdateDoctorDto, UpdateUserDto } from './dto/update-auth.dto';
import { UserStatus } from './user.entity';
import { UserRepository } from './user.repository';
import { UsersType } from './usertype.model';
export declare class AuthService {
    private userRepository;
    private jwtService;
    private roleServices;
    private mailService;
    private usersProfileService;
    private doctorProfileService;
    doctorInfo: any;
    constructor(userRepository: UserRepository, jwtService: JwtService, roleServices: RolesService, mailService: MailService, usersProfileService: UsersprofileService, doctorProfileService: DoctorProfileService);
    signUp(createUerDto: CreateUerDto): Promise<User>;
    updateStatus(updateStatusDto: UpdateStatusDto): Promise<User>;
    signIn(authCredentialDto: AuthCredentialDto): Promise<{
        payload: {
            accessToken: string;
            id: number;
            role: number;
            type: import("../role/roles.entity").UserType;
            email: string;
            name: string;
        };
    }>;
    findUserByEmail(findByEmailDto: FindByEmailDto): Promise<User>;
    findAllUsers(): Promise<any[]>;
    findUsersByRoles(findByTypelDto: FindByTypelDto): Promise<User[]>;
    findUserById(id: number): Promise<User>;
    remove(id: number): Promise<void>;
    forgetPassword(email: string): Promise<UsersType>;
    resetPassword(resetPasswordInput: ResetPasswordInput): Promise<UsersType>;
    updateDoctorStatus(id: number, updateDoctorDto: UpdateDoctorDto): Promise<User>;
    updateUserStatus(id: number, updateUserDto: UpdateUserDto): Promise<User>;
    updateDoctorstatustoActive(id: number, doctorStatusUpdateDto: DoctorStatusUpdateDto): Promise<User>;
    getActiveDoctors(id: number): Promise<any[]>;
    getDoctor(id: number): Promise<any[]>;
    SendInvitationToDocotr(sendinvitataionDoctor: SendinvitataionDoctor): Promise<string>;
    UserstatusPopUpMsg(id: number): Promise<{
        status: UserStatus;
    }>;
}
