const Joi = require('@hapi/joi');

const bookSchema = Joi.object().keys({
  name: Joi.string().min(2).required()
});

module.exports = {
  bookValidatorMiddleware: (req, res, next) => {
    console.log(`Start validating book payload.....`);

    const book = req.body;
    const result = Joi.validate(book, bookSchema);
    const { error } = result;

    if (error) {
      console.error(`Book payload provided is not valid due to: ${error}`);
      return res.status(400).send(error);
    }

    console.log(`Book validation successfull`);
    next();
  }
}
