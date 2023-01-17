/**
 * file: server.js
 * description: arquivo responsável por toda a configuração e execução da aplicação
 * data: 10/01/2023
 * author: Luane Porto <luane.sporto@gmail.com>
 */

const app = require('./src/app');

const port = process.env.PORT || 3000;

app.listen(port, () => {
  console.log('Aplicação executando na porta...: ', port);
});
