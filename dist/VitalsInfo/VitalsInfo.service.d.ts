import { CreateVitalsInfoDto } from './dto/CreateVitalsInfo.dto';
import { VitalsInfo } from './VitalsInfo.entity';
import { VitalsInfoRepository } from './VitalsInfo.repository';
export declare class VitalsInfoService {
    private VitalsInfoRepository;
    constructor(VitalsInfoRepository: VitalsInfoRepository);
    createVitalsInfo(createVitalsInfoDto: CreateVitalsInfoDto): Promise<any>;
    getVitalsInfo(): Promise<VitalsInfo[]>;
    getVitalsHistory(id: number): Promise<any[]>;
    deleteVitalsInfo(id: number): Promise<void>;
}
