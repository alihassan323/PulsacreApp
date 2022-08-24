import { CreateFavoriteDoctorsDto, DeleteFavoriteDoctorsDto } from './dto/CreatefavoriteDoctors.dto';
import { FavoriteDoctorsService } from './favoriteDoctors.service';
export declare class FavoriteDoctorsController {
    private favoriteDoctorsService;
    constructor(favoriteDoctorsService: FavoriteDoctorsService);
    createfavouritedoctors(createFavoriteDoctorsDto: CreateFavoriteDoctorsDto): Promise<any[]>;
    deletefavdoctor(deleteFavoriteDoctorsDto: DeleteFavoriteDoctorsDto): Promise<void>;
    getfavoritedoctorById(id: number): Promise<any[]>;
}
