/* eslint-disable prettier/prettier */
import { join } from 'path';
import { AuthModule } from 'src/auth/auth.module';

import { MailerModule } from '@nestjs-modules/mailer';
import { HandlebarsAdapter } from '@nestjs-modules/mailer/dist/adapters/handlebars.adapter';
import { Module } from '@nestjs/common';

import { MailService } from './mail.service';

@Module({
  imports: [
    MailerModule.forRoot({
      transport: {
        host: 'postal.probase.co.uk',
        secure: false,
        auth: {
          user: 'probase/postal-dev',
          pass: 'BV7lKZyz246JCfuDNHmwneFg',
        },
      },
      defaults: {
        from: '"No Reply" <admin@probase.co.uk>',
      },
      template: {
        dir: join(__dirname, 'templates'),
        adapter: new HandlebarsAdapter(), // or new PugAdapter() or new EjsAdapter()
        options: {
          strict: true,
        },
      },
    }),
  ],
  providers: [MailService],
  exports: [MailService], // 👈 export for DI
})
export class MailModule {}
