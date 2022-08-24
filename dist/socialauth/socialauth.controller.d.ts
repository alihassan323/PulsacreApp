import { CreateSocialauthdto, LoginSocialauthdto } from './dto/createsocialauth.dto';
import { SocialauthService } from './socialauth.service';
export declare class SocialauthController {
    private socialauthService;
    constructor(socialauthService: SocialauthService);
    authenticate(createSocialauthdto: CreateSocialauthdto): Promise<import("../auth/user.entity").User>;
    signIn(loginSocialauthdto: LoginSocialauthdto): Promise<{
        payload: {
            accessToken: string;
            id: number;
            role: number;
            type: import("../role/roles.entity").UserType;
            email: string;
            name: string;
            profilePicture: string;
            callId: number;
        };
    }>;
}
