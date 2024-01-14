import { Module } from '@nestjs/common';
import { UserController } from './user.controller';
import { UserService } from './user.service';
import { BullModule } from '@nestjs/bull';
import { UserFileUpload } from './user.process';

@Module({
  imports: [
    BullModule.registerQueue({
      name: 'fileUpload',
    }),
  ],
  controllers: [UserController],
  providers: [UserService, UserFileUpload],
})
export class UserModule {}
