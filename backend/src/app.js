/* eslint-disable linebreak-style */
/**
 * file: src/app.js
 * description: arquivo responsável pela conexão com o server.js
 * data: 10/01/2023
 * author: Luane Porto <luane.sporto@gmail.com>
 */

const express = require('express');
const cors = require('cors');
const morgan = require('morgan');
const mongooseConnection = require('./config/mongooseConnection.config');

const app = express();

// ==> Rotas da API:
const index = require('./routes/index');
const userRoutes = require('./routes/user.routes');

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.json({ type: 'application/vnd.api+json' }));
app.use(morgan('dev'));
app.use(cors());

/** app.use((req, res, next) => {
  res.header("Acess-Control-Allow-Origin", "*");
  res.header("Acces-Control-Allow-Methods", 'GET, PUT, POST, DELETE');
  app.use(cors());
  next();
}); */

const corsOptions = {
  origin: 'http://localhost:8080',
  credentials: true,
  optionSuccessStatus: 200,
};

app.use(cors(corsOptions));

// ==> Retornando a conexão via mongoose via external file usando 'app.set()'
app.set('mongoose connection', mongooseConnection);

app.use(index);
app.use('/api/v1/', userRoutes);

module.exports = app;
