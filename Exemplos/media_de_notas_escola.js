
// 1. DADOS DE ENTRADA E VARIÁVEIS INICIAIS

// Define a lista (Array) de todas as notas que precisam ser processadas.
const notas = [5.5, 8.0, 9.5, 4.0, 6.8, 10.0, 2.3];

// Define a regra de aprovação (a Condicional).
const mediaParaPassar = 7.0;

// Variável contadora para armazenar quantos alunos passaram. Inicia em zero.
let aprovados = 0;

// Variável contadora para armazenar quantos alunos reprovaram. Inicia em zero.
let reprovados = 0;

console.log("--- SISTEMA DE NOTAS EM EXECUÇÃO ---\n");

// 2. LAÇO DE REPETIÇÃO (FOR) - O AUTOMAÇÃO DO TRABALHO

// O 'for' garante que as instruções internas sejam repetidas para cada nota na lista.
// A repetição continua enquanto 'i' for menor que o número total de notas (notas.length).
for (let i = 0; i < notas.length; i++) {
    
    // Pega a nota da posição atual (i) na lista 'notas'.
    // Exemplo: Na primeira repetição (i=0), notaAtual será 5.5.
    let notaAtual = notas[i];
    let status = ""; // Variável para armazenar se foi 'APROVADO' ou 'REPROVADO'.

    // 3. CONDICIONAL (IF / ELSE) - A TOMADA DE DECISÃO
    
    // Verifica a condição: "A nota do aluno é maior ou igual à média de 7.0?"
    if (notaAtual >= mediaParaPassar) {
        // Bloco IF: Executa SOMENTE se a condição for VERDADEIRA.
        
        status = "APROVADO 🎓";
        aprovados++; // Incrementa o contador de aprovados em 1.
        
    } else {
        // Bloco ELSE: Executa SOMENTE se a condição for FALSA (ou seja, se a nota for menor que 7.0).
        
        status = "REPROVADO ❌";
        reprovados++; // Incrementa o contador de reprovados em 1.
    }

    // Exibe o resultado de cada aluno no console.
    // O 'i + 1' serve apenas para numerar os alunos de forma amigável (1, 2, 3...)
    console.log(`Aluno ${i + 1}: Nota ${notaAtual} -> ${status}`);
    
    // O laço de repetição (for) volta para o início, incrementa 'i', e checa a próxima nota.
}

// Depois que o laço de repetição termina, exibe o resumo de todos os contadores.
console.log("\n--- RESUMO DO PROCESSAMENTO ---");
console.log(`Total de Aprovados: ${aprovados}`);
console.log(`Total de Reprovados: ${reprovados}`);
console.log("-------------------------------");
