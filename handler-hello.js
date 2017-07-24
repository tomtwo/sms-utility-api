// @flow
'use strict';

import Promise from 'bluebird';

type FunctionEvent = {
  httpMethod: string,
  headers: Object,
  resource: string,
  path: string,
  pathParameters?: Object,
  queryStringParameters?: Object,
  body?: Object,
  isOffline?: boolean, // serverless-offline
};

type FunctionContext = {
  functionName: string,
  functionVersion: string,
  invokedFunctionArn: string,
  logGroupName: string,
  logStreamName: string,
  identity: Object,
  clientContext: Object
};

type FunctionCallback = (error: ?Object, response: ?Object) => void;

module.exports.index = async (event: FunctionEvent, context: FunctionContext, callback: FunctionCallback) => {
  await Promise.delay(5);

  callback(null, {
    statusCode: 200,
    body: JSON.stringify({
      message: 'message from inside serverless',
      event: event,
      context: context,
    })
  });
};
