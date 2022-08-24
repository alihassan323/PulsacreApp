import { Repository } from 'typeorm';
import { Socialauth } from './socialauth.entity';
export declare class SocialauthRepository extends Repository<Socialauth> {
    findByEmail(email: string): Promise<Socialauth>;
}
