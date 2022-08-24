import { User } from 'src/auth/user.entity';
import { BaseEntity } from 'typeorm';
export declare class UsersMedicalInfo extends BaseEntity {
    id: number;
    medical_History: string;
    medicines: string;
    user: User;
}
