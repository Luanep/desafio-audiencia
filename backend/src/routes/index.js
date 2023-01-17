/**
 * file: src/routes/index.js
 * description: arquivo responsável pela rota default da 'api'
 * data: 10/01/2023
 * author: Luane Porto <luane.sporto@gmail.com>
 */

const express = require('express');

const router = express.Router();

router.get('/api/v1', (req, res) => {
  res.status(200).send({
    success: true,
    message: 'Seja bem-vindo a API Node.js + MongoDB + Azure!',
    version: '1.0.0',
  });
});

module.exports = router;
