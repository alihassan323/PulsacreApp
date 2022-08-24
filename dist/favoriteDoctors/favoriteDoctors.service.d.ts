import { DoctorProfessionalInfoService } from 'src/doctorprofessionalinfo/doctorprofessionalinfo.service';
import { CreateFavoriteDoctorsDto, DeleteFavoriteDoctorsDto } from './dto/CreatefavoriteDoctors.dto';
import { FavoriteDoctorsRepository } from './favoriteDoctors.repository';
export declare class FavoriteDoctorsService {
    private favoriteDoctorsRepository;
    private doctorProfessionalInfoService;
    constructor(favoriteDoctorsRepository: FavoriteDoctorsRepository, doctorProfessionalInfoService: DoctorProfessionalInfoService);
    getfavoritedoctorById(id: number): Promise<any[]>;
    createfavouritedoctors(createFavoriteDoctorsDto: CreateFavoriteDoctorsDto): Promise<any[]>;
    deletefavdoctor(deleteFavoriteDoctorsDto: DeleteFavoriteDoctorsDto): Promise<void>;
}
