import { CreateUsersMedicalInfo } from './createusersmedicalinfo.dto';
declare const UpdateUsersMedicalInfo_base: import("@nestjs/mapped-types").MappedType<Partial<CreateUsersMedicalInfo>>;
export declare class UpdateUsersMedicalInfo extends UpdateUsersMedicalInfo_base {
    medical_History: string[];
    medicines: string[];
}
export {};
