export declare class CreateRoleDto {
    title: string;
    description: string;
    Type: UserType;
}
export declare enum UserType {
    Admin = "Admin",
    Patient = "Patient",
    Doctor = "Doctor"
}
