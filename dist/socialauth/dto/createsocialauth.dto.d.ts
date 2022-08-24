import { UserType } from 'src/role/roles.entity';
export declare class CreateSocialauthdto {
    email: string;
    social_Id: string;
    name: string;
    Type: UserType;
    callId: number;
}
export declare class LoginSocialauthdto {
    email: string;
    Type: UserType;
    device_Token: string;
    social_Id: string;
}
