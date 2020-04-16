const path = require("path");
const aws = require("aws-sdk");

// Set in `environment` of serverless.yml
const ACCESS_ID_KEY = process.env.ACCESS_ID_KEY;
const SECRET_ACCESS_KEY = process.env.SECRET_ACCESS_KEY;
const BUCKET = process.env.BUCKET;
const AWS_ENDPOINT_URL = process.env.AWS_ENDPOINT_URL;
const PROCCESSED_FOLDER = "processed";

const s3 = new aws.S3({
  s3ForcePathStyle: true,
  endpoint: new aws.Endpoint(AWS_ENDPOINT_URL),
  accessKeyId: ACCESS_ID_KEY,
  secretAccessKey: SECRET_ACCESS_KEY,
});
const sharp = require("sharp");

module.exports.s3hook = (event, context) => {
  console.log("HEY! I'm invoked!");
  const received_key = event.Records[0].s3.object.key;
  const get_param = {
    Bucket: BUCKET,
    Key: received_key,
  };
  const filename = path.basename(received_key);
  s3.getObject(get_param)
    .promise()
    .then((data) => sharp(data.Body).resize(20).toBuffer())
    .then((data) => {
      const put_param = {
        Bucket: BUCKET,
        Key: `${PROCCESSED_FOLDER}/${filename}`,
        Body: data,
      };
      return s3.putObject(put_param).promise();
    })
    .then(() => context.done())
    .catch((err) => context.done("fail"));
};
