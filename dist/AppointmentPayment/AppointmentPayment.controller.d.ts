import { AppointmentPaymentService } from './AppointmentPayment.service';
import { CreatePatientAppointmentDto, CreatepatPaymentDto, GetDoctorTransactionDto } from './dto/CreateAppointmentPayment.dto';
export declare class AppointmentPaymentController {
    private appointmentPaymentService;
    constructor(appointmentPaymentService: AppointmentPaymentService);
    todayPatientsandEarning(id: number): Promise<{
        PatientsToday: number;
        Earned: number;
    }>;
    getDoctorTransasctionHistory(id: number, getDoctorTransactionDto: GetDoctorTransactionDto): Promise<any[]>;
    getpatienttransactiondetails(id: number): Promise<any[]>;
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
    createappointmentPayment(createPatientAppointmentDto: CreatePatientAppointmentDto): Promise<import("./AppointmentPayment.entity").AppointmentPayment>;
    AdmintodoctorPayment(createpatPaymentDto: CreatepatPaymentDto): Promise<any[]>;
    appointment(id: number): Promise<void>;
}
