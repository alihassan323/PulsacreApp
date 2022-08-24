/* eslint-disable prettier/prettier */
import { User } from 'src/auth/user.entity';

import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';

import { CreateVitalsInfoDto } from './dto/CreateVitalsInfo.dto';
import { VitalsInfo } from './VitalsInfo.entity';
import { VitalsInfoRepository } from './VitalsInfo.repository';

@Injectable()
export class VitalsInfoService {
  constructor(
    @InjectRepository(VitalsInfoRepository)
    private VitalsInfoRepository: VitalsInfoRepository,
  ) {}

  async createVitalsInfo(createVitalsInfoDto: CreateVitalsInfoDto) {
    let vitalsInfo: any = new VitalsInfo();
    const user = await User.findOne({
      where: { id: createVitalsInfoDto.patient },
    });
    vitalsInfo = Object.assign(vitalsInfo, createVitalsInfoDto);
    vitalsInfo.patient = user.id;
    await VitalsInfo.save(vitalsInfo);
    return vitalsInfo;
  }

  async getVitalsInfo() {
    return await VitalsInfo.find();
  }

  async getVitalsHistory(id: number) {
    const vitalsInfo = await VitalsInfo.find({ where: { patient: id } });
    const arr = [];
    vitalsInfo.forEach((element) => {
      arr.push(element);
    });
    arr.sort(function (a, b) {
      return b.datetime - a.datetime;
    });
    return arr;
  }

  async deleteVitalsInfo(id: number) {
    const find = await VitalsInfo.find({ where: { patient: id } });
    find.forEach(async (element) => {
      return await VitalsInfo.delete(element.id);
    });
  }
}
