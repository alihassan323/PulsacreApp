/* eslint-disable prettier/prettier */
import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import { UsersprofileController } from './usersprofile.controller';
import { UsersProfileRepository } from './usersprofile.repository';
import { UsersprofileService } from './usersprofile.service';

@Module({
  imports: [TypeOrmModule.forFeature([UsersProfileRepository])],
  exports: [UsersprofileService, TypeOrmModule],
  controllers: [UsersprofileController],
  providers: [UsersprofileService],
})
export class UsersprofileModule {}
