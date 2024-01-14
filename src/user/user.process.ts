import { Process, Processor } from '@nestjs/bull';
import { Job } from 'bull';
import { uploadToS3 } from 'src/utils/s3.utils';

@Processor('fileUpload')
export class UserFileUpload {
  @Process('upload-image')
  async handleFileUpload(job: Job) {
    console.log(job.data);
    const { buffer, bucket, originalname, mimeTime } = job.data;

    await uploadToS3(buffer, bucket, originalname, mimeTime);
  }
}
