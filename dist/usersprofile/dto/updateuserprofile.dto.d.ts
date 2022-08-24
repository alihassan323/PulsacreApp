import { CreateUsersProfileDto } from './createuserprofile.dto';
declare const UpdateUsersProfileDto_base: import("@nestjs/mapped-types").MappedType<Partial<CreateUsersProfileDto>>;
export declare class UpdateUsersProfileDto extends UpdateUsersProfileDto_base {
    name: string;
    dob: Date;
    contact: string;
    address: string;
    country: string;
    state: string;
    city: string;
    zipcode: string;
    profilePicture: string;
}
export {};
