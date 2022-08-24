import { GetDoctorDto } from 'src/auth/dto/update-auth.dto';
import { CreateRoleDto } from 'src/role/dto/create-role.dto';
import { Role } from 'src/role/roles.entity';

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

import { CreateVitalsInfoDto } from './dto/CreateVitalsInfo.dto';
import { VitalsInfoService } from './VitalsInfo.service';

@ApiTags('Vitals Info')
@Controller('VitalsInfo')
export class VitalsInfoController {
  constructor(private VitalsInfoService: VitalsInfoService) {}

  @Get()
  getVitalsInfo() {
    return this.VitalsInfoService.getVitalsInfo();
  }
  @Post()
  CreateVitalsInfo(@Body() createVitalsInfoDto: CreateVitalsInfoDto) {
    return this.VitalsInfoService.createVitalsInfo(createVitalsInfoDto);
  }

  @Get('/:id/getVitalsHistory')
  getVitalsHistory(@Param('id') id: number) {
    return this.VitalsInfoService.getVitalsHistory(id);
  }

  @Delete('/:id')
  deleteVitalsInfo(@Param('id') id: number): Promise<void> {
    return this.VitalsInfoService.deleteVitalsInfo(id);
  }
}
