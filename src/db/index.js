const { Pool } = require('pg');
require('dotenv').config();

const pool = new Pool({
  user: process.env.DB_USER,
  host: process.env.DB_HOST,
  database: process.env.DB_NAME,
  password: process.env.DB_PASSWORD,
  port: process.env.DB_PORT,
});

module.exports = pool;
/*
A 1ª linha importa uma piscina de conexões que é coisa do módulo PostgreSQL ou pg facilitando as pesquisas para ação no banco de dados.
A 2ª linha importa as informações contidas no .env para a utilização nesse index.js
A 4ª cria uma instância da dessa piscina para editar o banco de dados em outros arquivos apartir desse.
*/