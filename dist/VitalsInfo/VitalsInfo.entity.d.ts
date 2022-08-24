import { User } from 'src/auth/user.entity';
import { BaseEntity } from 'typeorm';
export declare class VitalsInfo extends BaseEntity {
    id: number;
    heartRate: string;
    hrv: string;
    stressLevel: string;
    respiratoryLevel: string;
    diastolic: string;
    systolic: string;
    oxygenLevel: string;
    datetime: Date;
    patient: User;
}
