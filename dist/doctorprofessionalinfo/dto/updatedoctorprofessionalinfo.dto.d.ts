import { CreateDoctorProfessionalInfoDto } from './createdoctorprofessionalinfo.dto';
declare const UpdateDoctorProfessionalInfoDto_base: import("@nestjs/mapped-types").MappedType<Partial<CreateDoctorProfessionalInfoDto>>;
export declare class UpdateDoctorProfessionalInfoDto extends UpdateDoctorProfessionalInfoDto_base {
    areaofSpeciality: number;
    consultation_Fee: number;
    experiences: string[];
    certifications: [];
}
export {};
