import { CreatePatientAccountDto } from './dto/CreatePatientAccount.dto';
import { PatientAccountService } from './PatientAccount.service';
export declare class PatientAccountController {
    private patientAccountService;
    constructor(patientAccountService: PatientAccountService);
    createPatientAccount(createPatientAccountDto: CreatePatientAccountDto): Promise<import("./PatientAccount.entity").PatientAccount>;
    getPatientAccount(): Promise<any[]>;
    getPatientAccountById(id: number): Promise<any[]>;
    getPatientavailablecredit(id: number): Promise<string>;
    getpatienttransactiondetails(id: number): Promise<any[]>;
    updateAmount(id: number): Promise<string>;
}
