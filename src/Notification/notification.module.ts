/* eslint-disable prettier/prettier */
import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import { NotificationController } from './notification.controller';
import { NotificationRepository } from './notification.repository';
import { NotificationService } from './notification.service';

@Module({
  imports: [TypeOrmModule.forFeature([NotificationRepository])],
  exports: [NotificationService, TypeOrmModule],
  controllers: [NotificationController],
  providers: [NotificationService],
})
export class NotificationModule {}
