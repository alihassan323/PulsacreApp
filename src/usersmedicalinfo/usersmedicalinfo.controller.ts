/* eslint-disable prettier/prettier */
import { Body, Controller, Delete, Get, Param, Put } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';

import { UpdateUsersMedicalInfo } from './dto/updateusersmedicalinfo.dto';
import { UsersMedicalInfoService } from './usersmedicalinfo.service';

@ApiTags('Users Medical Info')
@Controller('usersmedicalinfo')
export class UsersMedicalInfoServiceController {
  constructor(private usersMedicalInfoService: UsersMedicalInfoService) {}

  @Get()
  getUsersMedicalInfo() {
    return this.usersMedicalInfoService.getUsersMedicalInfo();
  }

  @Get('/:id')
  getUsersMedicalInfoById(@Param('id') id: number) {
    return this.usersMedicalInfoService.getUsersMedicalInfoById(id);
  }

  @Delete('/:id')
  deleteUsersMedicalInfo(@Param('id') id: number): Promise<void> {
    return this.usersMedicalInfoService.deleteUsersMedicalInfo(id);
  }

  @Put('/:id')
  updateUsersMedicalInfo(
    @Param('id') id: number,
    @Body() updateUsersMedicalInfo: UpdateUsersMedicalInfo,
  ) {
    return this.usersMedicalInfoService.updateUsersMedicalInfo(
      id,
      updateUsersMedicalInfo,
    );
  }
}
