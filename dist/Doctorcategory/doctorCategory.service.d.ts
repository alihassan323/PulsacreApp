import { DoctorCategory } from './doctorCategory.entity';
import { DoctorCategoryRepository } from './doctorCategory.repository';
import { CreateDoctorCategoryDto } from './dto/create-doctorCategory.dto';
import { UpdateDoctorCategoryDto } from './dto/update-doctorCategory.dto';
export declare class DoctorCategoryService {
    private doctorCategoryRepository;
    constructor(doctorCategoryRepository: DoctorCategoryRepository);
    getDoctorCategory(): Promise<DoctorCategory[]>;
    findDoctorCategoryById(id: number): Promise<DoctorCategory>;
    createDoctorCategory(createDoctorCategoryDto: CreateDoctorCategoryDto): Promise<DoctorCategory>;
    deleteDoctorCategory(id: number): Promise<void>;
    updateDoctorCategory(id: number, updateDoctorCategoryDto: UpdateDoctorCategoryDto): Promise<DoctorCategory>;
}
