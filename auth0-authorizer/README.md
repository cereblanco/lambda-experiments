# Auth0-Authorizer

- Cloned from: https://github.com/serverless/examples/tree/master/aws-node-auth0-custom-authorizers-api

- `auth` function verifies the jwt

- if JWT token is invalid, it replies `Unauthorized` `401` error

- if JWT token is valid, the function [generates a policy](https://docs.aws.amazon.com/apigateway/latest/developerguide/apigateway-use-lambda-authorizer.html) as done in `generatePolicy` function

# Sample Usage

In your serverless.yml

```
functions:
  privateEndpoint:
    handler: handler.privateEndpoint
    events:
      - http:
          path: privateEndpoint
          method: post
          authorizer:
            ## Set the arn address of the auth0-authorizer here
            arn: arn:aws:lambda:us-east-1:12345:function:auth0-authorizer
          cors: true
```

# Development

```bash
sls offline start
```

# Deployment

- Make sure the `secrets.json` and `public_key` are filled out correctly

```bash
sls deploy
```
