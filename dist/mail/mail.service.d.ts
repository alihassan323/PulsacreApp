import { MailerService } from '@nestjs-modules/mailer';
import { UserStatus } from '../auth/user.entity';
export declare class MailService {
    private mailerService;
    constructor(mailerService: MailerService);
    sendForgetPasswordEmail(user: any, url: string, mobileUrl: string): Promise<void>;
    sendVerificationNumber(email: string, Name: string, RandomNumber: string): Promise<void>;
    sendStatusUpdate(email: string, name: string, status: UserStatus): Promise<void>;
    sendInvitation(email: string, name: string): Promise<void>;
}
