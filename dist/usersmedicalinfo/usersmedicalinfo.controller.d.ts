import { UpdateUsersMedicalInfo } from './dto/updateusersmedicalinfo.dto';
import { UsersMedicalInfoService } from './usersmedicalinfo.service';
export declare class UsersMedicalInfoServiceController {
    private usersMedicalInfoService;
    constructor(usersMedicalInfoService: UsersMedicalInfoService);
    getUsersMedicalInfo(): Promise<import("./usersmedicalinfo.entity").UsersMedicalInfo[]>;
    getUsersMedicalInfoById(id: number): Promise<import("./usersmedicalinfo.entity").UsersMedicalInfo>;
    deleteUsersMedicalInfo(id: number): Promise<void>;
    updateUsersMedicalInfo(id: number, updateUsersMedicalInfo: UpdateUsersMedicalInfo): Promise<import("./usersmedicalinfo.entity").UsersMedicalInfo>;
}
