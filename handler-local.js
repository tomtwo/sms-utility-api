// @flow

// run koa server locally without serverless/lambda

// this would be hoisted above the dotenv require call above
// if we use es2015 import syntax
const app = require('./src/server').default;

const port = process.env.PORT || 3000;

app.listen(port, () => {
  console.log('* App started on ', port);
});
