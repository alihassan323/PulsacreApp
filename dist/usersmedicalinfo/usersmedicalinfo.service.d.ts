import { UpdateUsersMedicalInfo } from './dto/updateusersmedicalinfo.dto';
import { UsersMedicalInfo } from './usersmedicalinfo.entity';
import { UsersMedicalInfoRepository } from './usersmedicalinfo.repository';
export declare class UsersMedicalInfoService {
    private usersMedicalInfoRepository;
    constructor(usersMedicalInfoRepository: UsersMedicalInfoRepository);
    getUsersMedicalInfo(): Promise<UsersMedicalInfo[]>;
    getUsersMedicalInfoById(id: number): Promise<UsersMedicalInfo>;
    deleteUsersMedicalInfo(id: number): Promise<void>;
    updateUsersMedicalInfo(id: number, updateUsersMedicalInfo: UpdateUsersMedicalInfo): Promise<UsersMedicalInfo>;
}
