import { GetUserDto } from 'src/auth/dto/update-auth.dto';

/* eslint-disable prettier/prettier */
import {
	Body,
	Controller,
	Delete,
	Get,
	Param,
	Post,
	Put,
} from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';

import { UpdateUsersProfileDto } from './dto/updateuserprofile.dto';
import { UsersprofileService } from './usersprofile.service';

@ApiTags('Patient profile')
@Controller('usersprofile')
export class UsersprofileController {
  constructor(private usersprofileService: UsersprofileService) {}

  @Get()
  getUsersProfile() {
    return this.usersprofileService.getUsersProfile();
  }

  @Get('/:id')
  getuserprofileById(@Param('id') id: number) {
    return this.usersprofileService.getuserprofileById(id);
  }

  @Put('/:id')
  updateuserprofile(
    @Param('id') id: number,
    @Body() updateUsersProfileDto: UpdateUsersProfileDto,
  ) {
    return this.usersprofileService.updateuserprofile(
      id,
      updateUsersProfileDto,
    );
  }

  @Delete('/:id')
  deleteUsersProfile(@Param('id') id: number): Promise<void> {
    return this.usersprofileService.deleteUsersProfile(id);
  }

  // @Post('/UserStatus')
  // getUserByStatus(@Body() getUserDto: GetUserDto) {
  //   return this.usersprofileService.getUserByStatus(getUserDto);
  // }
}
 