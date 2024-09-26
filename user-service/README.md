# User Service

The User Service manages user authentication, account creation, and shopping cart functionalities within the platform. It securely handles user data using a SQL database and supports user registration, login, and profile management. The service is responsible for creating and maintaining shopping carts, enabling users to add and manage products. Additionally, it handles payment processing and integrates with external payment gateways. To facilitate efficient communication with the Product Service, the User Service leverages AWS SQS for message queuing, ensuring reliable and asynchronous updates to product availability and cart contents.

## Installation Guide

Install NodeJS atleast v16.xx

- https://nodejs.org/en/

Install Serverless Framework Cli

```
$ npm install -g serverless
$ npm install -g typescript

```

### Plugins Required

```
$ sls plugin install --name serverless-plugin-typescript

```

```bash
$ sls plugin install -n serverless-offline
```

It will add the `serverless-offline` plugin to `devDependencies` in `package.json` file as well as will add it to `plugins` in `serverless.yml`.

After installation, you can start local emulation with:

```
$ sls offline
```

To learn more about the capabilities of `serverless-offline`, please refer to its [GitHub repository](https://github.com/dherault/serverless-offline).

### Deployment Command

```
$ sls deploy --verbose

```
