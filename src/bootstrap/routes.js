
function pingMiddleware(req, res) {
  res.status(200).end();
}

function initRoutes(app) {

  app.get('/ping', pingMiddleware);
  app.use('/api', require('../api/routes'))
}

module.exports.init = initRoutes;
