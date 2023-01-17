/**
 * file: src/controllers/user.controller.js
 * description: arquivo responsável pelo CRUD da classe: User
 * data: 10/01/2023
 * author: Luane Porto <luane.sporto@gmail.com>
 */

const User = require('../models/user.model');

// ==> Async e await

// ==> Método responsável pelo novo user
exports.registerNewUser = async (req, res) => {
  try {
    const isUser = await User.find({ email: req.body.email });
    console.log(isUser);

    if (isUser.length >= 1) {
      return res.status(409).json({ message: 'Atenção! Este e-mail já está registrado' });
    }

    const newUser = new User(req.body);
    const user = await newUser.save();
    const token = await newUser.generateAuthToken();
    return res.status(201).json({ message: 'Usuário criado com sucesso!', user, token });
  } catch (err) {
    return res.status(400).json({ err });
  }
};

exports.loginUser = async (req, res) => {
  try {
    const { email } = req.body;
    const { password } = req.body;
    const user = await User.findByCredentials(email, password);

    if (!user) {
      return res.status(401).json({
        error: 'Verifique suas credenciais de autenticação',
      });
    }
    const token = await user.generateAuthToken();
    return res.status(201).json({ message: 'Usuário logado com sucesso!', user, token });
  } catch (err) {
    return res.status(400).json({ err });
  }
};

exports.returnUserProfile = async (req, res) => {
  await res.json(req.userData);
};
