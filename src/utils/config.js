require('dotenv').config();

const {
  MONGODB_URL = 'mongodb://127.0.0.1:27017/bitfilmsdb',
  JWT_SECRET,
  NODE_ENV,
} = process.env;

module.exports = {
  MONGODB_URL,
  JWT_SECRET,
  NODE_ENV,
};
