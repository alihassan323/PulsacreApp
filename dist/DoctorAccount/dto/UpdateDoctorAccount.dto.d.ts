import { CreateDoctorAccountDto } from './CreateDoctorAccount.dto';
declare const UpdateDoctorAccountDto_base: import("@nestjs/mapped-types").MappedType<Partial<CreateDoctorAccountDto>>;
export declare class UpdateDoctorAccountDto extends UpdateDoctorAccountDto_base {
    accountnumber: string;
    accountHolderName: string;
    chequeNumber: string;
    chequeamount: string;
}
export {};
