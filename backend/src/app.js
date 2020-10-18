const express = require('express');
const mongoose = require('mongoose');
const morgan = require('morgan');
const cors = require('cors');

const config = require('./config');
const routes = require('./routes');
const HttpError = require('./models/http-error');

const app = express();

app.use(morgan('tiny'));
app.use(cors());
app.use(express.json());
app.use(routes);

app.use((req, res, next) => {
  const error = new HttpError('Could not find this route', 404);
  next(error);
});

// eslint-disable-next-line no-unused-vars
app.use((error, req, res, next) => {
  res.status(error.code || 500);
  res.json({ message: error.message || 'An unknown error occurred!' });
});

mongoose
  .connect(
    `mongodb+srv://${config.dbUser}:${config.dbPassword}@cluster0-sirbp.mongodb.net/${config.dbName}?retryWrites=true&w=majority`,
    { useNewUrlParser: true, useUnifiedTopology: true }
  )
  .then(() => {
    console.log(`Server started on port ${process.env.PORT || 5000}`);
  })
  .catch((err) => {
    console.log(err);
  });

module.exports = app;
