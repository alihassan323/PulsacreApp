import { DoctorCategoryService } from './doctorCategory.service';
import { CreateDoctorCategoryDto } from './dto/create-doctorCategory.dto';
import { UpdateDoctorCategoryDto } from './dto/update-doctorCategory.dto';
export declare class DoctorCategoryController {
    private doctorCategoryService;
    constructor(doctorCategoryService: DoctorCategoryService);
    getDoctorCategory(): Promise<import("./doctorCategory.entity").DoctorCategory[]>;
    findDoctorCategoryById(id: number): Promise<import("./doctorCategory.entity").DoctorCategory>;
    createDoctorCategory(createDoctorCategoryDto: CreateDoctorCategoryDto): Promise<import("./doctorCategory.entity").DoctorCategory>;
    deleteDoctorCategory(id: number): Promise<void>;
    updateDoctorCategory(id: number, updateDoctorCategoryDto: UpdateDoctorCategoryDto): Promise<import("./doctorCategory.entity").DoctorCategory>;
}
