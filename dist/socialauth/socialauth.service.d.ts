import 'dotenv/config';
import { Auth } from 'googleapis';
import { User } from 'src/auth/user.entity';
import { JwtService } from '@nestjs/jwt';
import { AuthService } from '../auth/auth.service';
import { UserType } from '../role/roles.entity';
import { CreateSocialauthdto, LoginSocialauthdto } from './dto/createsocialauth.dto';
import { SocialauthRepository } from './socialauth.repository';
export declare class SocialauthService {
    private readonly socialauthRepository;
    private authservices;
    private jwtService;
    private authService;
    oauthClient: Auth.OAuth2Client;
    constructor(socialauthRepository: SocialauthRepository, authservices: AuthService, jwtService: JwtService, authService: AuthService);
    authenticate(createSocialauthdto: CreateSocialauthdto): Promise<User>;
    signIn(loginSocialauthdto: LoginSocialauthdto): Promise<{
        payload: {
            accessToken: string;
            id: number;
            role: number;
            type: UserType;
            email: string;
            name: string;
            profilePicture: string;
            callId: number;
        };
    }>;
}
