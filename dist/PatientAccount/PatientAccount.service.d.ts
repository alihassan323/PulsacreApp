import { CreatePatientAccountDto } from './dto/CreatePatientAccount.dto';
import { PatientAccount } from './PatientAccount.entity';
import { PatientAccountRepository } from './PatientAccount.repository';
export declare class PatientAccountService {
    private patientAccountRepository;
    constructor(patientAccountRepository: PatientAccountRepository);
    getPatientAccount(): Promise<any[]>;
    getPatientAccountById(id: number): Promise<any[]>;
    createPatientAccount(createPatientAccountDto: CreatePatientAccountDto): Promise<PatientAccount>;
    getPatientavailablecredit(id: number): Promise<string>;
    getpatienttransactiondetails(id: number): Promise<any[]>;
    updateAmount(id: number): Promise<string>;
}
