const { Pool } = require('pg');

const pool = new Pool({
  host: 'db.dhyfiecymhymqsabuyue.supabase.co',
  port: 5432,
  user: 'postgres',
  password: 'luccasgayzao',
  database: 'postgres',
  ssl: { rejectUnauthorized: false } // necessário para conexão com Supabase
});

module.exports = pool;