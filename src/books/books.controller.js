const BookModel = require('./books.model');

module.exports = {
  storeBook: (req, res) => {
    const book = req.body;

    console.log(`Incomming request to save book....`);

    BookModel.create(book,
      ({ status, payload }) => {
        const { _id: id, name } = payload;
        
        res.status(status).send({ id, name });
        console.log(`Book saved successfully!`);
      },
      ({ status, payload }) => {
        res.status(status).send(payload);
        console.error(`Can't save book due to: ${err}`);
      }
    );
  },

  retrieveBooks: (req, res) => {
    console.log(`Incomming request to read book....`);

    BookModel.read(
      ({ status, payload }) => {
        const books = payload.map(({ _id: id, name }) => ({ id, name }));
        
        res.status(status).send(books);
        console.log(`Books read successfully!`);
      },
      ({ status, payload }) => {
        res.status(status).send(payload);
        console.error(`Can't read book due to: ${err}`);
      }
    );
  }
}
