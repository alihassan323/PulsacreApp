import { AuthService } from './auth.service';
import { AuthCredentialDto, UpdateStatusDto } from './dto/auth-credential.dto';
import { CreateUerDto, FindByEmailDto, FindByTypelDto, SendinvitataionDoctor } from './dto/create-user.dto';
import { ForgetPasswordInput } from './dto/ForgetPasswordInput.dto';
import { ResetPasswordInput } from './dto/ResetPasswordInput.dto';
import { DoctorStatusUpdateDto, UpdateDoctorDto, UpdateUserDto } from './dto/update-auth.dto';
import { User } from './user.entity';
import { UsersType } from './usertype.model';
export declare class AuthController {
    private authService;
    constructor(authService: AuthService);
    signUp(createUerDto: CreateUerDto): Promise<User>;
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
    updateDoctorStatus(id: number, updateDoctorDto: UpdateDoctorDto): Promise<User>;
    updateUserStatus(id: number, updateUserDto: UpdateUserDto): Promise<User>;
    updateStatus(updateStatusDto: UpdateStatusDto): Promise<User>;
    updateDoctorstatustoActive(id: number, doctorStatusUpdateDto: DoctorStatusUpdateDto): Promise<User>;
    findUsersByRoles(findByTypelDto: FindByTypelDto): Promise<User[]>;
    findUserByEmail(findByEmailDto: FindByEmailDto): Promise<User>;
    findAllUsers(): Promise<any[]>;
    UserstatusPopUpMsg(id: number): Promise<{
        status: import("./user.entity").UserStatus;
    }>;
    findUserById(id: number): Promise<User>;
    remove(id: number): Promise<void>;
    forgetPassword(forgetPasswordInput: ForgetPasswordInput): Promise<UsersType>;
    resetPassword(resetPasswordInput: ResetPasswordInput): Promise<UsersType>;
    getActiveDoctors(id: number): Promise<any[]>;
    getDoctor(id: number): Promise<any[]>;
    SendInvitationToDocotr(sendinvitataionDoctor: SendinvitataionDoctor): Promise<string>;
}
