import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UserModule } from './user/user.module';
import { BullModule } from '@nestjs/bull';

@Module({
  imports: [
    UserModule,
    BullModule.forRoot({
      redis: {
        host: '172.17.0.2',
        port: 6379,
      },
    }),
    BullModule.forRoot('alternate-config', {
      redis: {
        host: '172.17.0.3',
        port: 6379,
      },
    }),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
