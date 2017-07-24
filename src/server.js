// @flow;
require('dotenv').config();

import Koa from 'koa';
import convert from 'koa-convert';
import bodyParser from 'koa-bodyparser';

const app = new Koa();
app.use(convert(bodyParser()));

// error handler
app.use(async (ctx, next) => {
  ctx.response.body = { success: false, code: 404, message: 'not found' };

  try {
    await next();
  } catch (err) {
    console.log('root error handler:', err);

    // 500 errors don't print error in response

    ctx.type = 'json';
    ctx.throw(400, JSON.stringify({
      success: false,
      code: 400,
      message: err.message,
      // stack: err.stack,
    }));
  }
});

// import our routes
app.use(require('./routes').default);

// catch-all response
// app.use(async ctx => {
//   ctx.body = {
//     url: ctx.url,
//     method: ctx.method,
//     query: ctx.query,
//     body: ctx.request.body,
//     nothingHere: true
//   };
// });

export default app;
