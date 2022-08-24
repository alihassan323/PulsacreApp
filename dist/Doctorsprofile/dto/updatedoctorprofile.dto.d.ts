import { CreateDoctorProfileDto } from './createdoctorprofile.dto';
declare const UpdateDoctorProfileDto_base: import("@nestjs/mapped-types").MappedType<Partial<CreateDoctorProfileDto>>;
export declare class UpdateDoctorProfileDto extends UpdateDoctorProfileDto_base {
    name: string;
    dob: Date;
    contact: string;
    address: string;
    country: string;
    state: string;
    city: string;
    zipcode: string;
    profilePicture: string;
    about: string;
}
export {};
