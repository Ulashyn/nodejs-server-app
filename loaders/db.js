require('dotenv').config();
const mongoose = require('mongoose');
const DATABASE_URL = process.env.MONGODB_STRING_CODE;
let DB_NAME = process.env.DB_NAME;

if (process.env.NODE_ENV === 'test') {
  DB_NAME = process.env.TEST_DB_NAME;
}

const dbLoader = async () => {
  const connection = await mongoose.connect(DATABASE_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    dbName: DB_NAME
  });
  return connection.connection.db;
}

module.exports = dbLoader;