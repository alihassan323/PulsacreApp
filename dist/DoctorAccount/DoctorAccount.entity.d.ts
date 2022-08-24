import { User } from 'src/auth/user.entity';
import { BaseEntity } from 'typeorm';
export declare class DoctorAccount extends BaseEntity {
    id: number;
    doctor: User;
    accountnumber: string;
    accountHolderName: string;
    availableearning: string;
    totalEarning: string;
    withdraw: string;
    chequeNumber: string;
    chequeamount: string;
}
