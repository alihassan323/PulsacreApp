import { User } from 'src/auth/user.entity';
import { BaseEntity } from 'typeorm';
export declare class Socialauth extends BaseEntity {
    id: number;
    social_Id: string;
    email: string;
    user: User;
}
