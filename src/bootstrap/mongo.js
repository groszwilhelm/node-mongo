const mongoose = require('mongoose');

const initMongo = async () => {
  try {
    await mongoose.connect('mongodb://localhost:27017/demo', { useNewUrlParser: true });

    console.log('Successfully connected to MongoDB');
  } catch (e) {
    console.error(`Can't connect due to: `, e);
  }
}

module.exports.init = initMongo;
