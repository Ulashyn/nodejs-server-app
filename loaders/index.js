const expressLoader = require('./express');

const initLoader = async({expressApp}) => {
  const app = await expressLoader({app: expressApp});
  console.log('Express initialized');
  return app;
}

module.exports = initLoader;