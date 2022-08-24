import { DoctorPayment } from './DoctorPayment.entity';
import { DoctorPaymentRepository } from './DoctorPayment.repository';
import { CreateDoctorPaymentDto, CreatePaymentDto } from './dto/CreateDoctorPayment.dto';
export declare class DoctorPaymentService {
    private doctorPaymentRepository;
    constructor(doctorPaymentRepository: DoctorPaymentRepository);
    getdoctorPayment(): Promise<DoctorPayment[]>;
    getdoctorPaymentById(id: number): Promise<DoctorPayment[]>;
    createDoctorPayment(createDoctorPaymentDto: CreateDoctorPaymentDto): Promise<DoctorPayment>;
    deletedoctorPayment(id: number): Promise<void>;
    AdmintodoctorPayment(createPaymentDto: CreatePaymentDto): Promise<any[]>;
}
