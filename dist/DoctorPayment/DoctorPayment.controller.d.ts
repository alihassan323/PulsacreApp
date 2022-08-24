import { DoctorPaymentService } from './DoctorPayment.service';
import { CreateDoctorPaymentDto, CreatePaymentDto } from './dto/CreateDoctorPayment.dto';
export declare class DoctorPaymentController {
    private doctorPaymentService;
    constructor(doctorPaymentService: DoctorPaymentService);
    getdoctorPayment(): Promise<import("./DoctorPayment.entity").DoctorPayment[]>;
    createDoctorPayment(createDoctorPaymentDto: CreateDoctorPaymentDto): Promise<import("./DoctorPayment.entity").DoctorPayment>;
    deletedoctorPayment(id: number): Promise<void>;
    getdoctorPaymentById(id: number): Promise<import("./DoctorPayment.entity").DoctorPayment[]>;
    AdmintodoctorPayment(createPaymentDto: CreatePaymentDto): Promise<any[]>;
}
