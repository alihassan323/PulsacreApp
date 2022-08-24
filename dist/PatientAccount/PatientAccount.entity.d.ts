import { User } from 'src/auth/user.entity';
import { BaseEntity } from 'typeorm';
export declare class PatientAccount extends BaseEntity {
    id: number;
    patient: User;
    amount: number;
    transaction_id: string;
    datetime: Date;
}
