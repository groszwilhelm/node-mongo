const booksController = require('../books/books.controller');
const { bookValidatorMiddleware } = require('../books/books.middlewares');

module.exports = (apiRoutes) => {
  apiRoutes.get('/books', booksController.retrieveBooks);

  apiRoutes.post('/books', bookValidatorMiddleware, booksController.storeBook);

  apiRoutes.put('/books/:id', function (req, res) {
    res.status(201).send({});
  });

  apiRoutes.delete('/books/:id', function (req, res) {
    res.status(204);
  });
}
