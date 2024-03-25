require('dotenv').config();
const mongoose = require('mongoose');
const DATABASE_URL = process.env.MONGODB_STRING_CODE;

const dbLoader = async () => {
  const connection = await mongoose.connect(DATABASE_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    dbName: 'test_posts'
  });
  return connection.connection.db;
}

module.exports = dbLoader;