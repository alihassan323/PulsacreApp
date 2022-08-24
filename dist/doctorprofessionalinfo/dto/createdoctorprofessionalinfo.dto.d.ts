export declare class CreateDoctorProfessionalInfoDto {
    Area_of_Speciality: number;
    Consultation_Fee: number;
    experiences: string[];
    certifications: certificationProperties[];
}
interface certificationProperties {
    certificationName: string;
    certificationFileName?: string;
    cerficationCloudLink: string;
}
export {};
