/* eslint-disable prettier/prettier */
import { Body, Controller, Post } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';

import {
	CreateSocialauthdto,
	LoginSocialauthdto,
} from './dto/createsocialauth.dto';
import { SocialauthService } from './socialauth.service';

@ApiTags('Socialauth')
@Controller('Socialauth')
export class SocialauthController {
  constructor(private socialauthService: SocialauthService) {}

  @Post('/SignUp')
  authenticate(@Body() createSocialauthdto: CreateSocialauthdto) {
    return this.socialauthService.authenticate(createSocialauthdto);
  }

  @Post('/signIn')
  signIn(@Body() loginSocialauthdto: LoginSocialauthdto) {
    return this.socialauthService.signIn(loginSocialauthdto);
  }

  // @Post('/facebook')
  // Facebookauthenticate(@Body() facebookSocialauthdto: FacebookSocialauthdto) {
  //   return this.socialauthService.Facebookauthenticate(facebookSocialauthdto);
  // }

  // @Delete('/:id')
  // deleteUsersMedicalInfo(@Param('id') id: number): Promise<void> {
  //   return this.usersMedicalInfoService.deleteUsersMedicalInfo(id);
  // }

  // @Put('/:id')
  // updateUsersMedicalInfo(
  //   @Param('id') id: number,
  //   @Body() updateUsersMedicalInfo: UpdateUsersMedicalInfo,
  // ) {
  //   return this.usersMedicalInfoService.updateUsersMedicalInfo(
  //     id,
  //     updateUsersMedicalInfo,
  //   );
  // }
}
