/* eslint-disable prettier/prettier */
import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import { RolesController } from './roles.controller';
import { RoleRepository } from './roles.repository';
import { RolesService } from './roles.service';

@Module({
  imports: [TypeOrmModule.forFeature([RoleRepository])],
  exports: [RolesService, TypeOrmModule],
  controllers: [RolesController],
  providers: [RolesService],
})
export class RolesModule {}
