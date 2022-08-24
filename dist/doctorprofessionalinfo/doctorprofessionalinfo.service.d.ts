import { DoctorProfessionalInfo } from './doctorprofessionalinfo.entity';
import { DoctorProfessionalInfoRepository } from './doctorprofessionalinfo.repository';
import { UpdateDoctorProfessionalInfoDto } from './dto/updatedoctorprofessionalinfo.dto';
export declare class DoctorProfessionalInfoService {
    private doctorProfessionalInfoRepository;
    constructor(doctorProfessionalInfoRepository: DoctorProfessionalInfoRepository);
    getDoctorProfessionalInfo(): Promise<any[]>;
    getDoctorProfessionalInfoById(id: number): Promise<DoctorProfessionalInfo>;
    deleteDoctorProfessionalInfo(id: number): Promise<void>;
    updateDoctorProfessionalInfo(id: number, updateDoctorProfessionalInfoDto: UpdateDoctorProfessionalInfoDto): Promise<"Certifications should not be empty" | (DoctorProfessionalInfo & UpdateDoctorProfessionalInfoDto)>;
}
