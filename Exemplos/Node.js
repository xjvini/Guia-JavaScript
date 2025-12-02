// Instale o express antes: npm install express

const express = require('express');
const app = express();
const PORT = 3000;

// Rota simples
app.get('/', (req, res) => {
  res.send('Servidor Node.js funcionando!');
});

// Rota com JSON
app.get('/api/dados', (req, res) => {
  res.json({ mensagem: "Olá do servidor!", status: "ok" });
});

// Inicia o servidor
app.listen(PORT, () => {
  console.log(`Servidor rodando em http://localhost:${PORT}`);
});
