#!/usr/bin/env bash

yarn build

# save to s3
export AWS_PROFILE=vessels-lewis.daly
aws s3 sync ./build s3://4pbot.com

#now copy index.html over again, but with the Cache-Control:max-age=n header
aws s3 cp ./build/index.html s3://4pbot.com/index.html --cache-control "max-age=3600"

exit 0
#invalide current index.html
# aws configure set preview.cloudfront true
# aws cloudfront create-invalidation --distribution-id ETRAR5MEKRLVU \
  # --paths /index.html /error.html

echo -e 'In case cloudfront takes a while to re cache, go to:\nhttp://4pbot.com.s3-website-ap-southeast-2.amazonaws.com/'
