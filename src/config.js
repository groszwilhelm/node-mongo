module.exports = {
  env: process.env.NODE_ENV,
  app: {
    logLevel: process.env.APP_LOG_LEVEL,
    port: process.env.APP_PORT
  }
};
