import { User } from 'src/auth/user.entity';
import { BaseEntity } from 'typeorm';
export declare class DoctorPayment extends BaseEntity {
    id: number;
    doctor: User;
    cheque_Number: string;
    account_Number: string;
    account_Holder_name: string;
    cheque_Amount: number;
    datetime: Date;
}
