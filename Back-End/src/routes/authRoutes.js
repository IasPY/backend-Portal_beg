const express = require('express');
const { register, login } = require('../controllers/authController'); // aqui ele ta pedindo a função register e login lá do authController

const router = express.Router(); // cria um agrupador de rotas (roteador) para organizar rotas relacionadas

router.post('/register', register); // quando o cliente fizer um POST para '/register', executa a função register
router.post('/login', login); // quando o cliente fizer um POST para '/login', executa a função de login

module.exports = router;