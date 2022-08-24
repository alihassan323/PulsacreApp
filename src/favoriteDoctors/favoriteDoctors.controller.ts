/* eslint-disable prettier/prettier */
import { Body, Controller, Delete, Get, Param, Post } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';

import { CreateFavoriteDoctorsDto, DeleteFavoriteDoctorsDto } from './dto/CreatefavoriteDoctors.dto';
import { FavoriteDoctorsService } from './favoriteDoctors.service';

@ApiTags('FavoriteDoctors')
@Controller('FavoriteDoctors')
export class FavoriteDoctorsController {
  constructor(private favoriteDoctorsService: FavoriteDoctorsService) {}

  @Post()
  createfavouritedoctors(
    @Body() createFavoriteDoctorsDto: CreateFavoriteDoctorsDto,
  ) {
    return this.favoriteDoctorsService.createfavouritedoctors(
      createFavoriteDoctorsDto,
    );
  }

  @Delete('/:id')
  deletefavdoctor(@Body() deleteFavoriteDoctorsDto:DeleteFavoriteDoctorsDto) {
    return this.favoriteDoctorsService.deletefavdoctor(deleteFavoriteDoctorsDto);
  }

  @Get(':id')
  getfavoritedoctorById(@Param('id') id: number) {
    return this.favoriteDoctorsService.getfavoritedoctorById(id);
  }
}
