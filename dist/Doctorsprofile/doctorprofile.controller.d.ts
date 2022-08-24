import { DoctorProfileService } from './doctorprofile.service';
import { UpdateDoctorProfileDto } from './dto/updatedoctorprofile.dto';
export declare class DoctorProfileController {
    private doctorProfileService;
    constructor(doctorProfileService: DoctorProfileService);
    getdoctorProfile(): Promise<import("./doctorprofile.entity").DoctorProfile[]>;
    getdoctorprofileById(id: number): Promise<import("./doctorprofile.entity").DoctorProfile>;
    updatedoctorprofile(id: number, updateDoctorProfileDto: UpdateDoctorProfileDto): Promise<import("./doctorprofile.entity").DoctorProfile>;
    deleteDoctorProfile(id: number): Promise<void>;
}
