#!/usr/bin/env bash

yarn build

# save to s3
export AWS_PROFILE=vessels-lewis.daly
aws s3 sync ./build s3://4pbot.com

#invalide current index.html
aws configure set preview.cloudfront true
aws cloudfront create-invalidation --distribution-id ETRAR5MEKRLVU \
  --paths /index.html /error.html
