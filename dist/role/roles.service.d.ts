import { CreateRoleDto } from './dto/create-role.dto';
import { Role, UserType } from './roles.entity';
import { RoleRepository } from './roles.repository';
export declare class RolesService {
    private roleRepository;
    constructor(roleRepository: RoleRepository);
    getRoles(): Promise<Role[]>;
    getRoleByType(Type: UserType): Promise<Role>;
    createRole(createRoleDto: CreateRoleDto): Promise<Role>;
    deleteRole(id: number): Promise<void>;
}
