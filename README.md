# action-deploy-lambda

Deploy a Lambda function via Github Action.

## Usage

```yaml
- name: Setup AWS credentials
  uses: aws-actions/configure-aws-credentials@v1
  with:
    role-to-assume: ${{ secret.DEPLOY_ROLE }}
    aws-region: eu-west-1

- name: Deploy to Lambda
  uses: fabscale/action-deploy-lambda@v1
  with:
    zip: lambda-bundle.zip
    functionName: "my-function"
    region: eu-west-1
```

This assumes that you've setup your AWS credentials with [configure-aws-credentials](https://github.com/aws-actions/configure-aws-credentials) before calling this action.
