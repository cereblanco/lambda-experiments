1. sls offline start

2. Uploading a file

AWS_ACCESS_KEY_ID=S3RVER AWS_SECRET_ACCESS_KEY=S3RVER aws --endpoint http://localhost:8000 s3api put-object --bucket local-bucket --key incoming/Rooftop.jpg --body resize-image/test-images/Rooftop.jpg

3. Download processed file

AWS_ACCESS_KEY_ID=S3RVER AWS_SECRET_ACCESS_KEY=S3RVER aws --endpoint http://localhost:8000 s3api get-object --bucket local-bucket --key processed/Rooftop.jpg resize-image/resized-test-images/Rooftop.jpg
