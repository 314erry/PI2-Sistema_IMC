const express = require('express');
const path = require('path');
const app = express();
const { Pool } = require('pg');
require('dotenv').config({path: '../.env'} );

app.use(express.static(path.join(__dirname, 'public')));
app.use(express.json());

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'login.html'));
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Servidor rodando na porta ${PORT}`));

const usuariosRoutes = require('./routes/usuario_route');
const { type } = require('os');
app.use('/api', usuariosRoutes);