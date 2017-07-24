import slsHttp from 'serverless-http';
import app from './src/server';

module.exports.index = (event, context, callback) => {
  // modify event to read path from pathParameters instead of path
  // allows us to mount api to non base url
  const modifiedEvent = Object.assign({}, event, {
    path: (event.pathParameters && event.pathParameters.any)
      ? '/' + event.pathParameters.any
      : '/'
  });

  // let serverless-http work
  slsHttp(app)(modifiedEvent, context, callback);
};
