const express = require('express');
const UsuarioController = require('../controllers/usuario_controller');
const router = express.Router();

router.get('/usuarios', UsuarioController.getAllUsers);


router.post('/usuarios', UsuarioController.createUser);

router.post('/login', UsuarioController.login);

module.exports = router;