import { User } from 'src/auth/user.entity';
import { BaseEntity } from 'typeorm';
export declare class UsersProfile extends BaseEntity {
    id: number;
    name: string;
    email: string;
    dob: Date;
    contact: string;
    address: string;
    zipcode: string;
    country: string;
    city: string;
    state: string;
    profilePicture: string;
    user: User;
}
