import { CreateDoctorCategoryDto } from './create-doctorCategory.dto';
declare const UpdateDoctorCategoryDto_base: import("@nestjs/mapped-types").MappedType<Partial<CreateDoctorCategoryDto>>;
export declare class UpdateDoctorCategoryDto extends UpdateDoctorCategoryDto_base {
    name: string;
}
export {};
