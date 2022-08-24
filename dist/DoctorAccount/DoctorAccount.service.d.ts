import { DoctorAccount } from './DoctorAccount.entity';
import { DoctorAccountRepository } from './DoctorAccount.repository';
export declare class DoctorAccountService {
    private doctorAccountRepository;
    constructor(doctorAccountRepository: DoctorAccountRepository);
    getRoles(): Promise<DoctorAccount[]>;
    deleteRole(id: number): Promise<void>;
}
