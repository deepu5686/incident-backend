import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ConfigModule } from '@nestjs/config';

import { AuthModule } from './auth/auth.module';
import { IncidentModule } from './incident/incident.module';
import { UserModule } from './users/users.module';

@Module({
  imports: [
       ConfigModule.forRoot({
      isGlobal: true,
    }),
    AuthModule, IncidentModule, UserModule
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
