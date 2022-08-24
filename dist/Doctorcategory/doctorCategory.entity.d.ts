import { DoctorProfessionalInfo } from 'src/doctorprofessionalinfo/doctorprofessionalinfo.entity';
import { BaseEntity } from 'typeorm';
export declare class DoctorCategory extends BaseEntity {
    id: number;
    name: string;
    doctorProfessionalInfos: DoctorProfessionalInfo[];
}
