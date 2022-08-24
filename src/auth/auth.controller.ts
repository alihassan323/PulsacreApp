/* eslint-disable prettier/prettier */
import {
	Body,
	Controller,
	Delete,
	Get,
	Param,
	Post,
	Put,
	ValidationPipe,
} from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';

import { AuthService } from './auth.service';
import { AuthCredentialDto, UpdateStatusDto } from './dto/auth-credential.dto';
import {
	CreateUerDto,
	FindByEmailDto,
	FindByTypelDto,
	SendinvitataionDoctor,
} from './dto/create-user.dto';
import { ForgetPasswordInput } from './dto/ForgetPasswordInput.dto';
import { ResetPasswordInput } from './dto/ResetPasswordInput.dto';
import {
	DoctorStatusUpdateDto,
	UpdateDoctorDto,
	UpdateUserDto,
} from './dto/update-auth.dto';
import { User } from './user.entity';
import { UsersType } from './usertype.model';

@ApiTags('auth')
@Controller('auth')
export class AuthController {
  constructor(private authService: AuthService) {}

  @Post('/signup')
  signUp(@Body() createUerDto: CreateUerDto): Promise<User> {
    return this.authService.signUp(createUerDto);
  }

  @Post('/signIn')
  signIn(@Body(ValidationPipe) authCredentialDto: AuthCredentialDto) {
    return this.authService.signIn(authCredentialDto);
  }

  @Put(':id/DoctorStatus')
  updateDoctorStatus(
    @Param('id') id: number,
    @Body() updateDoctorDto: UpdateDoctorDto,
  ) {
    return this.authService.updateDoctorStatus(id, updateDoctorDto);
  }

  @Put(':id/UserStatus')
  updateUserStatus(
    @Param('id') id: number,
    @Body() updateUserDto: UpdateUserDto,
  ) {
    return this.authService.updateUserStatus(id, updateUserDto);
  }

  @Put('/updateStatus')
  updateStatus(@Body() updateStatusDto: UpdateStatusDto) {
    return this.authService.updateStatus(updateStatusDto);
  }

  @Put(':id/ActiveDoctor')
  updateDoctorstatustoActive(
    @Param('id') id: number,
    @Body() doctorStatusUpdateDto: DoctorStatusUpdateDto,
  ) {
    console.log('1');
    return this.authService.updateDoctorstatustoActive(
      id,
      doctorStatusUpdateDto,
    );
  }

  @Post('/roleType')
  findUsersByRoles(@Body() findByTypelDto: FindByTypelDto) {
    return this.authService.findUsersByRoles(findByTypelDto);
  }

  @Post('/useremail')
  findUserByEmail(@Body() findByEmailDto: FindByEmailDto) {
    return this.authService.findUserByEmail(findByEmailDto);
  }

  @Get()
  findAllUsers() {
    return this.authService.findAllUsers();
  }

  @Get('/:id/PopUpmsg')
  UserstatusPopUpMsg(@Param('id') id: number) {
    return this.authService.UserstatusPopUpMsg(id);
  }

  @Get(':id')
  findUserById(@Param('id') id: number) {
    return this.authService.findUserById(id);
  }

  @Delete(':id')
  remove(@Param('id') id: number) {
    return this.authService.remove(+id);
  }

  @Post('/forgot')
  forgetPassword(@Body() forgetPasswordInput: ForgetPasswordInput) {
    return this.authService.forgetPassword(forgetPasswordInput.email);
  }

  @Post('/resetPasswordInput')
  resetPassword(
    @Body() resetPasswordInput: ResetPasswordInput,
  ): Promise<UsersType> {
    return this.authService.resetPassword(resetPasswordInput);
  }

  @Get('/:id/ActiveDoctors')
  getActiveDoctors(@Param('id') id: number) {
    return this.authService.getActiveDoctors(id);
  }

  @Get('/:id/getDoctor')
  getDoctor(@Param('id') id: number) {
    return this.authService.getDoctor(id);
  }

  @Post('/sendinvitation')
  SendInvitationToDocotr(@Body() sendinvitataionDoctor: SendinvitataionDoctor) {
    return this.authService.SendInvitationToDocotr(sendinvitataionDoctor);
  }

  // @Get('/:id/usprofile')
  // userprofiles(@Param('id') id: number) {
  //   return this.authService.userprofiles(id);
  // }

  // @Get('/:id/docprofile')
  // docprofiles(@Param('id') id: number) {
  //   return this.authService.docprofiles(id);
  // }
}
