import { InjectQueue } from '@nestjs/bull';
import { Injectable } from '@nestjs/common';
import { Queue } from 'bull';

@Injectable()
export class UserService {
  constructor(@InjectQueue('fileUpload') private readonly fileUpload: Queue) {}

  async uploadFile(file) {
    console.log({ file });
    const { originalname } = file;

    await this.fileUpload.add(
      'upload-image',
      {
        buffer: file.buffer,
        bucket: process.env.S3_BUCKET,
        originalname,
        mimeTime: file.mimetype,
      },
      { delay: 3000, lifo: true },
    );
  }
}
