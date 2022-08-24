import { DoctorPaymentService } from 'src/DoctorPayment/DoctorPayment.service';
import { DoctorProfile } from './doctorprofile.entity';
import { DoctorProfileRepository } from './doctorprofile.repository';
import { UpdateDoctorProfileDto } from './dto/updatedoctorprofile.dto';
export declare class DoctorProfileService {
    private doctorProfileRepository;
    private doctorPaymentService;
    constructor(doctorProfileRepository: DoctorProfileRepository, doctorPaymentService: DoctorPaymentService);
    getdoctorProfile(): Promise<DoctorProfile[]>;
    getdoctorprofileById(id: number): Promise<DoctorProfile>;
    updatedoctorprofile(id: number, updateDoctorProfileDto: UpdateDoctorProfileDto): Promise<DoctorProfile>;
    deleteDoctorProfile(id: number): Promise<void>;
}
