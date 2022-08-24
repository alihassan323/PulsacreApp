import { UpdateUsersProfileDto } from './dto/updateuserprofile.dto';
import { UsersProfile } from './usersprofile.entity';
import { UsersProfileRepository } from './usersprofile.repository';
export declare class UsersprofileService {
    private usersProfileRepository;
    constructor(usersProfileRepository: UsersProfileRepository);
    getUsersProfile(): Promise<UsersProfile[]>;
    getuserprofileById(id: number): Promise<UsersProfile>;
    deleteUsersProfile(id: number): Promise<void>;
    updateuserprofile(id: number, updateUsersProfileDto: UpdateUsersProfileDto): Promise<UsersProfile>;
}
