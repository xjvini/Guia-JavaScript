const express = require('express');
const cors = require('cors');

const app = express();

// Permitir acesso de qualquer front-end
app.use(cors());

// Permitir receber JSON no corpo do POST
app.use(express.json());

// "Banco de dados" simples
let tarefas = [
    { id: 1, descricao: "Estudar", concluida: false },
    { id: 2, descricao: "Treinar", concluida: true }
];

// ------------------- ROTAS -------------------

// GET → listar tarefas
app.get('/tarefas', (req, res) => {
    res.json(tarefas);
});

// POST → adicionar tarefa
app.post('/tarefas', (req, res) => {
    const descricao = req.body.descricao;

    if (!descricao) {
        return res.status(400).json({ erro: "Descrição obrigatória" });
    }

    const novaTarefa = {
        id: tarefas.length + 1,
        descricao: descricao,
        concluida: false
    };

    tarefas.push(novaTarefa);

    res.status(201).json(novaTarefa);
});

// DELETE → remover tarefa
app.delete('/tarefas/:id', (req, res) => {
    const id = Number(req.params.id);

    // Se o ID não existir
    if (!tarefas.some(t => t.id === id)) {
        return res.status(404).json({ erro: "Tarefa não encontrada" });
    }

    tarefas = tarefas.filter(t => t.id !== id);
    res.json({ mensagem: "Tarefa removida com sucesso" });
});

// ------------------- INICIAR SERVIDOR -------------------

app.listen(3000, () => {
    console.log("Servidor funcionando em http://localhost:3000");
});

