import { MailModule } from 'src/mail/mail.module';

/* eslint-disable prettier/prettier */
import { Module } from '@nestjs/common';
import { JwtModule } from '@nestjs/jwt';
import { PassportModule } from '@nestjs/passport';
import { TypeOrmModule } from '@nestjs/typeorm';

import { DoctorProfileModule } from '../Doctorsprofile/doctorprofile.module';
import { RolesModule } from '../role/roles.module';
import { UsersprofileModule } from '../usersprofile/usersprofile.module';
import { AuthController } from './auth.controller';
import { AuthService } from './auth.service';
import { JwtStrategy } from './jwt.strategy';
import { UserRepository } from './user.repository';

@Module({
  imports: [
    RolesModule,
    MailModule,
    DoctorProfileModule,
    UsersprofileModule,
    TypeOrmModule.forFeature([UserRepository]),
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
  controllers: [AuthController],
  providers: [AuthService, JwtStrategy],
  exports: [JwtStrategy, PassportModule, AuthService],
})
export class AuthModule {}
