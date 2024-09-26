# Notification Service

The Notification Service handles the delivery of email notifications within the e-commerce platform. Built with Node.js and TypeScript, it leverages AWS SES for sending emails and AWS SNS for push notifications. It integrates with AWS SQS to queue and manage messages asynchronously, ensuring reliable and timely delivery of notifications across the platform.

## Useful commands

* `npm run build`   compile typescript to js
* `npm run watch`   watch for changes and compile
* `npm run test`    perform the jest unit tests
* `cdk deploy`      deploy this stack to your default AWS account/region
* `cdk diff`        compare deployed stack with current state
* `cdk synth`       emits the synthesized CloudFormation template
