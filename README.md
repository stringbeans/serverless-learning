# serverless-learning

This is my effort to learn how to use the `serverless` library in setting up and deploying lambda functions.

## Things used

- Serverless
- RollupJS (to bundle)
- Typescript (duh)
- Lodash (just to experiment with rollup's treeshaking)

## Commands to know

1. To deploy your serverless infrastructure (which is configured by your `serverless.yml` file): `serverless deploy -v`
2. To invoke your function: `serverless invoke -f <function_name> -l`
3. To tail your function's logs: `serverless logs -f <function_name> -t`
4. To remove your serverlesss infrastructure (based on your `serverless.yml`: `serverless remove`
5. To deploy a single function and not the whole thing: `serverless deploy function -f <function_name>`

More here! https://serverless.com/framework/docs/providers/aws/guide/quick-start/

## Nice to know

- AWS Lambda functions can be configured to have triggers. Cloudwatch events are a great way to setup cronjobs with Lambda as you can setup scheduled runs.
- we can have multiple functions setup and deployed in a single repository with `serverless.yml`. will just need some extra configurations with rollup as well (possibly split the rollup.config.js into separate files for each function?)
