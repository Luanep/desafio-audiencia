/* eslint-disable linebreak-style */
/**
 * file: src/config/db.config.js
 * description: arquivo responsável por fazer a conexão com a base de dados: MongoDB
 * data: 10/01/2023
 * author: Luane Porto <luane.sporto@gmail.com>
 */

const dotenv = require('dotenv');

dotenv.config();

module.exports = {
  local: {
    localUrlDatabse: process.env.DB_URI,
    secret: 'password',
  },
};
