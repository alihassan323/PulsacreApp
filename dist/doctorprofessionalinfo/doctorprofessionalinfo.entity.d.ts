import { User } from 'src/auth/user.entity';
import { DoctorCategory } from 'src/Doctorcategory/doctorCategory.entity';
import { BaseEntity } from 'typeorm';
export declare class DoctorProfessionalInfo extends BaseEntity {
    id: number;
    consultation_Fee: number;
    experiences: string;
    user: User;
    certifications: certificationProperties[];
    areaofSpeciality: DoctorCategory;
}
export interface certificationProperties {
    certificationName: string;
    certificationFileName?: string;
    cerficationCloudLink: string;
}
