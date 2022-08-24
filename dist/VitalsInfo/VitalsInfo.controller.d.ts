import { CreateVitalsInfoDto } from './dto/CreateVitalsInfo.dto';
import { VitalsInfoService } from './VitalsInfo.service';
export declare class VitalsInfoController {
    private VitalsInfoService;
    constructor(VitalsInfoService: VitalsInfoService);
    getVitalsInfo(): Promise<import("./VitalsInfo.entity").VitalsInfo[]>;
    CreateVitalsInfo(createVitalsInfoDto: CreateVitalsInfoDto): Promise<any>;
    getVitalsHistory(id: number): Promise<any[]>;
    deleteVitalsInfo(id: number): Promise<void>;
}
