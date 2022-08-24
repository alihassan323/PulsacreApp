/* eslint-disable prettier/prettier */
import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import { VitalsInfoController } from './VitalsInfo.controller';
import { VitalsInfoRepository } from './VitalsInfo.repository';
import { VitalsInfoService } from './VitalsInfo.service';

@Module({
  imports: [
    TypeOrmModule.forFeature([VitalsInfoRepository])],
  exports: [VitalsInfoService, TypeOrmModule],
  controllers: [VitalsInfoController],
  providers: [VitalsInfoService],
})
export class VitalsInfoModule {}
