# sms-utility-api

API for communicating with [nexmo](https://www.nexmo.com), deployable to AWS Lambda through [serverless](https://serverless.com) or any other box directly as an HTTP server.

## Installation

- (_optional: if using lambda_) install serverless: `yarn global add serverless` / `npm i -g serverless`
- install local dependencies: `yarn` or `npm install`
- add your `NEXMO_KEY` and `NEXMO_SECRET` to `.env` (see .env.example), or use environment variables

## Development

- `npm run dev` to run an http server locally on `process.env.PORT` or port 3000

## Deployment

- lambda: `sls deploy` to push to aws lambda using `serverless`
- http: `npm run build`, `npm run start`