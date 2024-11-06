const UsuarioService = require('../services/usuario_service');

const UsuarioController = {

  getAllUsers: async (req, res) => {
    try {
      const usuarios = await UsuarioService.getAllUsers();
      res.json(usuarios);
    } catch (error) {
      console.error('Erro ao buscar usuarios', error)
      res.status(500).json({ error: 'Erro ao buscar usuários' });
    }
  },

  createUser: async (req, res) => {
    try {
      const newUser = await UsuarioService.createUser(req.body);
      res.status(201).json(newUser);
    } catch (error) {
      res.status(500).json({ error: 'Erro ao criar usuário' });
    }
  },

  login: async (req, res) => {
    const { email, senha } = req.body;

    try {
      const isValid = await UsuarioService.validaLogin(email, senha);

      if (isValid) {
        res.status(200).json({ success: true, message: "Login bem-sucedido!" });
      } else {
        res.status(401).json({ success: false, message: "Email ou senha incorretos." });
      }
    } catch (error) {
      console.error("Erro no login:", error);
      res.status(500).json({ success: false, message: "Erro no servidor." });
    }
  }
};

module.exports = UsuarioController;