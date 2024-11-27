import { execute } from "../database/sqlite.js";

async function VerificaDados(email) {
  const sql = `select * from usuarios where email = ? `;
  const VerificaEmail = await execute(sql, [email]);

  if (VerificaEmail.length === 0) return null;

  return VerificaEmail[0];
}

async function Registrar(primeiroNome, segundoNome, email, celular, senha, genero) {
  const sql = `INSERT INTO USUARIOS ([PRIMEIRO NOME], [SEGUNDO NOME], EMAIL, CELULAR, GENERO, SENHA)
  VALUES (?, ?, ?, ?, ?, ?)`;
  await execute(sql, [primeiroNome, segundoNome, email, celular, senha, genero]);

  // Buscar o último ID inserido
  const result = await execute("SELECT last_insert_rowid() AS ID_USUARIO");
  if (result.length === 0) return null;

  return result[0];
}




export default {
  VerificaDados,
  Registrar
};
