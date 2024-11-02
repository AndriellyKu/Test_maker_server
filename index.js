const express = require('express');
const mongoose = require('mongoose');
const authRoutes = require('./src/routes/authRoutes');
const userRoutes = require('./src/routes/userRoutes');
const cors = require('cors');
require('dotenv').config();

const app = express();

// Configuração do middleware
app.use(express.json({ limit: '10mb' })); // Aumenta o limite do payload
app.use(cors({
  origin: 'http://localhost:5173', // Altere para o URL do seu frontend
  methods: ['GET', 'POST', 'PUT', 'DELETE'],
  credentials: true // Habilita credenciais se necessário
}));

// Conexão com o MongoDB
mongoose.connect('mongodb://localhost:27017/TestMakerBD')
  .then(() => {
    console.log("Conectado ao MongoDB");
  })
  .catch(err => console.log(err));

// Definindo as rotas
app.use('/auth', authRoutes);
app.use('/users', userRoutes);

// Iniciando o servidor
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Servidor batendo na porta ${PORT}`);
});
