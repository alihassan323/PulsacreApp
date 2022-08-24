import { UserType } from './create-user.dto';
export declare class AuthCredentialDto {
    email: string;
    password: string;
    Type: UserType;
    callId: number;
    device_Token: string;
}
export declare class UpdateStatusDto {
    email: string;
    randomNumber: string;
}
