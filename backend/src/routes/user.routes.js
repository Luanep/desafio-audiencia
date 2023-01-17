/**
 * file: src/routes/user.routes.js
 * description: arquivo responsável pelas rotas do user
 * data: 10/01/2023
 * author: Luane Porto <luane.sporto@gmail.com>
 */
const express = require('express');

const router = express.Router();
const auth = require('../middlewares/auth');
const userController = require('../controllers/user.controller');

// ==> Cria um novo 'User': (POST): localhost:3000/api/v1/register
router.post('/register', userController.registerNewUser);

// ==> Realiza um novo login 'User': (POST): localhost:3000/api/v1/login
router.post('/login', userController.loginUser);

// ==> Retorna o perfil/profile do 'User': (GET): localhost:3000/api/v1/userProfile
router.get('/userProfile', auth, userController.returnUserProfile);

module.exports = router;
