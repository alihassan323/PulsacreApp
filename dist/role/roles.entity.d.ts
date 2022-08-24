import { User } from 'src/auth/user.entity';
import { BaseEntity } from 'typeorm';
export declare class Role extends BaseEntity {
    id: number;
    title: string;
    description: string;
    Type: UserType;
    users: User[];
}
export declare enum UserType {
    Admin = "Admin",
    Patient = "Patient",
    Doctor = "Doctor"
}
