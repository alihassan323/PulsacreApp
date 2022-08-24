import { User } from 'src/auth/user.entity';
import { BaseEntity } from 'typeorm';
export declare class DoctorProfile extends BaseEntity {
    id: number;
    name: string;
    email: string;
    dob: Date;
    contact: string;
    address: string;
    country: string;
    state: string;
    city: string;
    zipcode: string;
    about: string;
    profilePicture: string;
    user: User;
}
