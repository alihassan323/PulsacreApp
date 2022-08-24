import { DoctorProfessionalInfoService } from './doctorprofessionalinfo.service';
import { UpdateDoctorProfessionalInfoDto } from './dto/updatedoctorprofessionalinfo.dto';
export declare class DoctorProfessionalInfoServiceController {
    private doctorProfessionalInfoService;
    constructor(doctorProfessionalInfoService: DoctorProfessionalInfoService);
    getDoctorProfessionalInfo(): Promise<any[]>;
    getDoctorProfessionalInfoById(id: number): Promise<import("./doctorprofessionalinfo.entity").DoctorProfessionalInfo>;
    deleteDoctorProfessionalInfo(id: number): Promise<void>;
    updateDoctorProfessionalInfo(id: number, updateDoctorProfessionalInfoDto: UpdateDoctorProfessionalInfoDto): Promise<"Certifications should not be empty" | (import("./doctorprofessionalinfo.entity").DoctorProfessionalInfo & UpdateDoctorProfessionalInfoDto)>;
}
