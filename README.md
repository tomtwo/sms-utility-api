# sms utility

------

# serverless-boilerplate

## Dependencies
`yarn global add serverless`

## Development
run local http server
`npm run dev`
with inspector:
`npm run inspect`, open chrome://inspect
or, emulate production env
`sls offline start`

## Run server locally
`npm run offline`

## Production

### Lambda
`sls deploy`
with region:
`sls deploy --region=eu-west-2`

### API Gateway + Custom Domain
- run deploy as above
- go to amazon api gateway, add base path mapping

### HTTP
`npm run build`
`npm run start`
