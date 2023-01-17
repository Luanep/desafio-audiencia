/**
 * file: src/middlewares/auth.js
 * description: responsável por confirmar se um determinado user tem autorização
 * data: 11/01/2023
 * author: Luane Porto <luane.sporto@gmail.com>
 */

const jwt = require('jsonwebtoken');

module.exports = (req, res, next) => {
  try {
    const token = req.headers.authorization.replace('Bearer ', '');
    console.log(token);
    const decoded = jwt.verify(token, 'secret');
    req.userData = decoded;
    next();
  } catch (err) {
    return res.status(401).json({ message: 'Falha na autenticação' });
  }
};
