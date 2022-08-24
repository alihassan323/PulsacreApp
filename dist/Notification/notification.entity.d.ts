import { User } from 'src/auth/user.entity';
import { BaseEntity } from 'typeorm';
export declare class Notification extends BaseEntity {
    id: number;
    patient: User;
    device_Token: string;
}
