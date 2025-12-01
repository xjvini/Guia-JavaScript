// importa o módulo HTTP do Node.js
const http = require('http');

// configurações que não mudam
const hostname = '127.0.0.1';
const port = 4321;

// o contador começa em 0 e muda a cada acesso
let contadorDeVisitas = 0;

// server: cria o servidor HTTP
const server = http.createServer((req, res) => {

  // cada acesso incrementa o contador
  contadorDeVisitas++; // o mesmo que: contadorDeVisitas = contadorDeVisitas + 1

  // configurações da resposta HTTP
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/plain; charset=utf-8');
  
  // chama a variável na resposta para o usuário ver
  res.end(`Olá! Você é o visitante número: ${contadorDeVisitas}`);
});

// servidor começa a escutar a porta configurada
server.listen(port, hostname, () => {
  console.log(`Servidor rodando. Acesse http://${hostname}:${port}/ para testar.`);
});