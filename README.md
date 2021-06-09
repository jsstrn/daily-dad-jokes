# Daily Dad Jokes

## Development 

Install Serverless CLI

```sh
curl -o- -L https://slss.io/install | bash
```

Install dependencies 

```sh
npm install
```

## Deployment 

To deploy (defaults to development stage)

```sh
npm run deploy
```

To deploy to production

```sh
npm run deploy:prod
```

Alternatively, you can set the `stage` property in `serverless.yml`. By default, `stage` is set to `dev`.

### Environment variables

For development, create a `.env` file and add your environment variables. 

For production, create a `env.prod` file and add your environment variables. 

Environment variables are handled by [serverless-dotenv-plugin](https://github.com/neverendingqs/serverless-dotenv-plugin). See [example](https://github.com/neverendingqs/serverless-dotenv-plugin/tree/master/examples/simple-express-app) usage.

## Scheduling 

We use AWS EventBridge to trigger our functions. Note that AWS EventBridge does not use the standard cron format so you cannot rely on online cron editors. Instead refer to their documentation for [cron and rate expressions](https://docs.aws.amazon.com/eventbridge/latest/userguide/eb-create-rule-schedule.html).

## Configure Serverless 

To configure your Serverless project you need to include a `serverless.yml` file. For more information, see this [reference](https://www.serverless.com/framework/docs/providers/aws/guide/serverless.yml/).

## Plugins for Serverless
View all available [plugins](https://www.serverless.com/plugins/).
