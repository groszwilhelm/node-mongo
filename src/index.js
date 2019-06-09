const express = require('express');
const log4js = require('log4js');
const config = require('./config');
const app = express();

// set configuration object on app
app.set('config', config);

// bootstrap app modules
require('./bootstrap/logger').init(config.app.logLevel);
require('./bootstrap/express').init(app);
require('./bootstrap/routes').init(app);
require('./bootstrap/mongo').init();

app.listen(config.app.port, function () {
  log4js
    .getLogger('SERVER')
    .info(`Server started. Listening on port: ${config.app.port} for environment: ${config.env}`);
});
