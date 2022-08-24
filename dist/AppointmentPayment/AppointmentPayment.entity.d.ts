import { User } from 'src/auth/user.entity';
import { BaseEntity } from 'typeorm';
export declare class AppointmentPayment extends BaseEntity {
    id: number;
    doctor: User;
    patient: User;
    amountPaid: number;
    datetime: Date;
}
