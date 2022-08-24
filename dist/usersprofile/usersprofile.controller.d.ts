import { UpdateUsersProfileDto } from './dto/updateuserprofile.dto';
import { UsersprofileService } from './usersprofile.service';
export declare class UsersprofileController {
    private usersprofileService;
    constructor(usersprofileService: UsersprofileService);
    getUsersProfile(): Promise<import("./usersprofile.entity").UsersProfile[]>;
    getuserprofileById(id: number): Promise<import("./usersprofile.entity").UsersProfile>;
    updateuserprofile(id: number, updateUsersProfileDto: UpdateUsersProfileDto): Promise<import("./usersprofile.entity").UsersProfile>;
    deleteUsersProfile(id: number): Promise<void>;
}
