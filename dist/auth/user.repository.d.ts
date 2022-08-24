import { Repository } from 'typeorm';
import { AuthCredentialDto } from './dto/auth-credential.dto';
import { User } from './user.entity';
export declare class UserRepository extends Repository<User> {
    findByEmail(email: string): Promise<User>;
    signIn(authCredentialDto: AuthCredentialDto): Promise<User>;
}
