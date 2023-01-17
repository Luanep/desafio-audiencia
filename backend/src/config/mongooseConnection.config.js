/**
 * file: src/config/mongooseConnection.config.js
 * description: responsável por fazer a conexão via mongoose
 * data:11/01/2023
 * author: Luane Porto <luane.sporto@gmail.com>
*/
const mongoose = require('mongoose');

const database = require('./db.config');

mongoose.Promise = global.Promise;

mongoose.connect(database.local.localUrlDatabse, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  // useCreateIndex: true,
}).then(() => {
  console.log('A base de dados foi conectada com sucesso!');
}, (err) => {
  console.log(`Erro ao conectar com a base de dados...: ${err}`);
  process.exit();
});
