// Lista de notas da turma
const notas = [5.5, 8.0, 9.5, 4.0, 6.8, 10.0, 2.3];
const mediaParaPassar = 7.0;

let aprovados = 0;
let reprovados = 0;

console.log("--- SISTEMA DE NOTAS ---\n");

// LAÇO DE REPETIÇÃO
// Percorre cada nota da lista
for (let i = 0; i < notas.length; i++) {
    let notaAtual = notas[i];
    let status = "";

    // CONDICIONAL SIMPLES
    if (notaAtual >= mediaParaPassar) {
        status = "APROVADO 🎓";
        aprovados++;
    } else {
        status = "REPROVADO ❌";
        reprovados++;
    }

    console.log(`Aluno ${i + 1}: Nota ${notaAtual} -> ${status}`);
}

console.log("\n--- RESULTADO FINAL ---");
console.log(`Total de Aprovados: ${aprovados}`);
console.log(`Total de Reprovados: ${reprovados}`);