import repositoryUsuario from "../repositories/repository.usuario.js";


async function Login(email, senha) {
  const verificaDados = await repositoryUsuario.VerificaDados(email);

  if (verificaDados === null) {
    throw new Error("E-mail não encontrado");
  } else {
    if (senha === verificaDados.SENHA) {
      return verificaDados;
    } else throw new Error("Senha Inválida");
  }
}

async function PrimeiroAcesso(primeiroNome, segundoNome, email, celular, senha, confirmeSenha, genero) {

  if (senha === confirmeSenha) {
    const usuario = await repositoryUsuario.Registrar(primeiroNome, segundoNome, email, celular, senha, genero);

    if (!usuario) {
      throw new Error("Usuário não encontrado");
    }

    return usuario;
  } else {
    throw new Error("Senhas inválidas");
  }

}

export default { PrimeiroAcesso, Login };
