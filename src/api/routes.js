const apiRoutes = require('express').Router();

apiRoutes.get('/status', function (req, res) {
  res.status(200).json({
    message: 'Api works just fine. :)'
  });
});

module.exports = apiRoutes;
