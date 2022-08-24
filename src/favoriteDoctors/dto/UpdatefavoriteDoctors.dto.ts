/* eslint-disable prettier/prettier */
import { PartialType } from '@nestjs/mapped-types';

import { CreateFavoriteDoctorsDto } from './CreatefavoriteDoctors.dto';

export class UpdateFavoriteDoctorsDto extends PartialType(
  CreateFavoriteDoctorsDto,
) {}
