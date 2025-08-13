const express = require('express');
const cors = require('cors');
require('dotenv').config();

const authRoutes = require('./routes/authRoutes'); // chama as rotas criptografadas

const app = express(); // o server ta rodando no app

app.use(cors()); // o cors tem a função de permitir que o front-end envie requisições sem bloqueio de segurança
app.use(express.json()); /*- Diz ao Express para **entender requisições com `body` em formato JSON**.
- Exemplo: `req.body` vai funcionar corretamente em POST de login/cadastro.*/

app.use('/api/auth', authRoutes); // usa o grupo de rotas do authRoutes.js sempre que a URL começar com /api/auth
const PORT = process.env.PORT || 5000; // analisa o .env e define a porta como 5000 ou define na base da força bruta da ordem dada.
app.listen(PORT, () => {
  console.log(`Servidor rodando na porta ${PORT}`);
}); // teste para ver se a porta funciona