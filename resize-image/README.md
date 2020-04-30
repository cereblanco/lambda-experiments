# resize image example
- Experiment using [serverless-s3-local](https://github.com/ar90n/serverless-s3-local.git)
- Resize an image that is uploaded to local s3

# Demo

Start server offline
```bash
$ sls offline start
```

Upload a file
```bash
$ AWS_ACCESS_KEY_ID=S3RVER AWS_SECRET_ACCESS_KEY=S3RVER aws --endpoint http://localhost:8000 s3api put-object --bucket local-bucket --key incoming/Rooftop.jpg --body resize-image/test-images/Rooftop.jpg
```

Download processed file/resized photo
```bash
$ AWS_ACCESS_KEY_ID=S3RVER AWS_SECRET_ACCESS_KEY=S3RVER aws --endpoint http://localhost:8000 s3api get-object --bucket local-bucket --key processed/Rooftop.jpg resize-image/resized-test-images/Rooftop.jpg
```
