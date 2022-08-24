import { AuthModule } from 'src/auth/auth.module';

/* eslint-disable prettier/prettier */
import { Module } from '@nestjs/common';
import { JwtModule } from '@nestjs/jwt';
import { PassportModule } from '@nestjs/passport';
import { TypeOrmModule } from '@nestjs/typeorm';

import { SocialauthController } from './socialauth.controller';
import { SocialauthRepository } from './socialauth.repository';
import { SocialauthService } from './socialauth.service';

@Module({
  imports: [
    TypeOrmModule.forFeature([SocialauthRepository]),
    AuthModule,
    JwtModule.register({
      secret: 'topsecret',
      signOptions: {
        expiresIn: 3600,
      },
    }),
    PassportModule.register({
      defaultStrategy: 'jwt',
    }),
  ],
  exports: [SocialauthService, TypeOrmModule],
  controllers: [SocialauthController],
  providers: [SocialauthService],
})
export class SocialauthModule {}
