import serviceUsuario from "../services/service.usuario.js";


async function Login(req, res) {
  try {
    const { email, senha } = req.body;

    const usuario = await serviceUsuario.Login(email, senha);

    res.status(200).json(usuario);
  } catch (error) {
    res.status(401).json({ error: error.message });
  }
}

async function PrimeiroAcesso(req, res) {
  try {
    const { primeiroNome, segundoNome, email, celular, senha, confirmeSenha, genero } = req.body;
    const usuario = await serviceUsuario.PrimeiroAcesso(primeiroNome, segundoNome, email, celular, senha, confirmeSenha, genero);

    res.status(200).json(
      usuario
    );
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
}


export default { PrimeiroAcesso, Login };
