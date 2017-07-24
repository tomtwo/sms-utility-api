// @flow

import Router from 'koa-router';
import type { KoaContext } from 'koa-flow-declarations/KoaContext';

import nexmoService from 'services/nexmo';

const router = new Router();

router
  .post('/send', async (ctx: KoaContext) => {
    const { sender, receiver, content } = ctx.request.body;

    const res = await nexmoService.sendTextMessage(sender, receiver, content);

    ctx.response.body = {
      success: true,
      data: res,
    };
  });

export default router.routes();
