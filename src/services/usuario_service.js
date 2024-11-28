const { Pool } = require('pg');
const pool = new Pool({
  user: 'postgres',
  host: 'localhost',
  database: 'postgres',
  password: 'postgres',
  port: 5432,
  ssl: false,
});

pool.connect()
  .then(client => {
    console.log('Conectado com sucesso!');
    client.release();
  })
  .catch(err => {
    console.error('Erro ao conectar:', err.stack);
  });

const UsuarioService = {
  getAllUsers: async () => {
    const result = await pool.query('SELECT * FROM usuarios');
    return result.rows;
  },

  createUser: async (user) => {
    const { nome, sobrenome, celular, genero, email, senha } = user;
    const result = await pool.query(
      'INSERT INTO usuarios (nome, sobrenome, celular, genero, email, senha) VALUES ($1, $2, $3, $4, $5, $6) RETURNING *',
      [nome, sobrenome, celular, genero, email, senha]
    );
    return result.rows[0];
  },

  validaLogin: async (email, senha) => {
    const result = await pool.query(
      'SELECT * FROM usuarios WHERE email = $1 AND senha = $2',
      [email, senha]
    );

    return result.rowCount > 0;
  }
};

module.exports = UsuarioService;