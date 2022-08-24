import { User } from 'src/auth/user.entity';
import { BaseEntity } from 'typeorm';
export declare class FavoriteDoctors extends BaseEntity {
    id: number;
    doctor: User;
    patient: User;
}
