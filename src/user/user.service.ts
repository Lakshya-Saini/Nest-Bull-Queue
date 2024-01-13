import { Injectable } from '@nestjs/common';
import { uploadToS3 } from 'src/utils/s3.utils';

@Injectable()
export class UserService {
  async uploadFile(file) {
    console.log({ file });
    const { originalname } = file;

    return await uploadToS3(
      file.buffer,
      process.env.S3_BUCKET,
      originalname,
      file.mimetype,
    );
  }
}
