const mongoose = require('mongoose');

const Book = mongoose.model('Book', new mongoose.Schema({ name: String }));

module.exports = {
  create: (book, success, error) => {
    try {
      const bookDocument = new Book(book);
  
      bookDocument.save((err, prod) => {
        if (err) {
          // return different statuses based on error
          return error({ status: 400, payload: err });
        }
        success({ status: 201, payload: prod });
      });
    } catch (err) {
      error({ status: 500, payload: 'Server error' });
    }
  },

  read: (success, error) => {
    try {
      Book.find((err, document) => {
        if (err) {
          // return different statuses based on error
          return error({ status: 400, payload: err });
        }
        success({ status: 200, payload: document });
      });
    } catch (err) {
      error({ status: 500, payload: 'Server error' });
    }
  },

  update: (id, book, success, error) => {
    try {
      Book.findByIdAndUpdate(id, book, (err, book) => {
        if (err) {
          // return different statuses based on error
          return error({ status: 400, payload: err });
        }
        success({ status: 204, payload: book });
      });
    } catch (err) {
      error({ status: 500, payload: 'Server error' });
    }
  },

  delete: (id, success, error) => {
    try {
      Book.findByIdAndDelete(id, (err, book) => {
        if (err) {
          // return different statuses based on error
          return error({ status: 400, payload: err });
        }
        success({ status: 204 });
      });
    } catch (err) {
      error({ status: 500, payload: 'Server error' });
    }
  }
}
