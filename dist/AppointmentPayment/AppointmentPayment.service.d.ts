import { AppointmentPayment } from './AppointmentPayment.entity';
import { AppointmentPaymentRepository } from './AppointmentPayment.repository';
import { CreatePatientAppointmentDto, CreatepatPaymentDto, GetDoctorTransactionDto } from './dto/CreateAppointmentPayment.dto';
export declare class AppointmentPaymentService {
    private appointmentPaymentRepository;
    constructor(appointmentPaymentRepository: AppointmentPaymentRepository);
    todayPatientsandEarning(id: number): Promise<{
        PatientsToday: number;
        Earned: number;
    }>;
    createappointmentPayment(createPatientAppointmentDto: CreatePatientAppointmentDto): Promise<AppointmentPayment>;
    getDoctorTotalEarning(id: number): Promise<{
        TotalEarning: number;
    }>;
    getDoctorTotalWithdrawn(id: number): Promise<{
        totalWithdrawn: number;
    }>;
    getDoctorAvailableBalance(id: number): Promise<{
        availablebalance: number;
    }>;
    getDoctorSummary(id: number): Promise<{
        availableBalance: number;
        totalWithdrawn: number;
        totalEarning: number;
    }>;
    getDoctorCallHistory(id: number): Promise<any[]>;
    getPatientCallHistory(id: number): Promise<any[]>;
    getPatientTotalpaid(id: number): Promise<{
        TotalPaid: number;
    }>;
    getDoctorTransasctionHistory(id: number, getDoctorTransactionDto: GetDoctorTransactionDto): Promise<any[]>;
    getdoctortransactiondetails(id: number): Promise<any[]>;
    PatienttoAdminPayment(createpatPaymentDto: CreatepatPaymentDto): Promise<any[]>;
    appointment(id: number): Promise<void>;
}
