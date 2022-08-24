export declare class CreateUerDto {
    email: string;
    password: string;
    confirm_password: string;
    name: string;
    Type: UserType;
    callId: number;
}
export declare enum UserType {
    Admin = "Admin",
    Patient = "Patient",
    Doctor = "Doctor"
}
export declare class FindByEmailDto {
    email: string;
}
export declare class FindByTypelDto {
    Type: UserType;
}
export declare class SendinvitataionDoctor {
    name: string;
    email: string;
}
