const bodyParser = require("body-parser");

function initExpress(app) {
  app.use(bodyParser.json({limit: '5mb'}));
  app.use(bodyParser.urlencoded({extended: true, limit: '25mb'}));
}

module.exports.init = initExpress;
