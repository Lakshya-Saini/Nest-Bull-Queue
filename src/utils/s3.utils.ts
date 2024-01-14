import * as AWS from 'aws-sdk';

function S3Config() {
  const s3 = new AWS.S3({
    accessKeyId: process.env.S3_ACCESS_KEY_ID,
    secretAccessKey: process.env.S3_SECRET_ACCESS_KEY,
  });

  return s3;
}

export async function uploadToS3(file, bucket, name, mimetype) {
  const s3 = S3Config();

  const params = {
    Bucket: bucket,
    Key: String(name),
    Body: file,
    ACL: 'public-read',
    ContentType: mimetype,
    ContentDisposition: 'inline',
    CreateBucketConfiguration: {
      LocationConstraint: 'ap-south-1',
    },
  };

  try {
    // let s3Response = await s3.upload(params).promise();
    // return s3Response;
  } catch (e) {
    console.log(e);
  }
}
