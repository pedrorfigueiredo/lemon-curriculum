const dotenv = require('dotenv');

let path;
switch (process.env.NODE_ENV) {
  case 'dev':
    path = '.env.dev';
    break;
  case 'test':
    path = '.env.test';
    break;
  default:
    path = '.env';
    break;
}

dotenv.config({
  path,
});

module.exports = {
  dbUser: process.env.DB_USER,
  dbPassword: process.env.DB_PASSWORD,
  dbName: process.env.DB_NAME,
};
