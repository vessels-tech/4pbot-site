#!/usr/bin/env bash
export AWS_PROFILE=vessels-lewis.daly

STACK_NAME="fourpbot-static"
AWS_REGION=ap-southeast-2

aws cloudformation validate-template --template-body file://./resources.yml --region $AWS_REGION || exit 1

aws cloudformation deploy \
  --template-file ./resources.yml \
  --stack-name "$STACK_NAME" \
  --region "$AWS_REGION" \
  --parameter-overrides \
    HostedZoneName=4pbot.com. \
    RootDomainName=4pbot.com \
    AcmCertificateArn=arn:aws:acm:us-east-1:745457803371:certificate/e2927517-78ce-4f29-b436-5cd3114c8506
