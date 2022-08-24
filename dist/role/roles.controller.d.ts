import { CreateRoleDto } from './dto/create-role.dto';
import { Role, UserType } from './roles.entity';
import { RolesService } from './roles.service';
export declare class RolesController {
    private rolesService;
    constructor(rolesService: RolesService);
    getRoles(): Promise<Role[]>;
    getRoleByType(Type: UserType): Promise<Role>;
    createRole(createRoleDto: CreateRoleDto): Promise<Role>;
    deleteRole(id: number): Promise<void>;
}
