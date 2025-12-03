// 1. DADOS DE ENTRADA (Simulando o que foi anotado no caderno durante o dia)
const pedidosDoDia = [
    { cliente: "João Silva", tipo: "pesada" },
    { cliente: "Maria Souza", tipo: "simples" },
    { cliente: "Pedro Santos", tipo: "delicada" },
    { cliente: "Ana Lima", tipo: "simples" },
    { cliente: "Lucas Pereira", tipo: "express" } // Tipo inválido de propósito para testar
];

// Variáveis para guardar os totais
let faturamentoTotal = 0;
let quantidadeLavagens = 0;

console.log("--- INICIANDO PROCESSAMENTO DOS PEDIDOS ---\n");

// 2. LAÇO DE REPETIÇÃO (FOR)
// "Para cada pedido na lista de pedidosDoDia..."
for (let i = 0; i < pedidosDoDia.length; i++) {
    
    let pedidoAtual = pedidosDoDia[i];
    let preco = 0;

    // 3. CONDICIONAIS (IF / ELSE IF)
    // Decidindo o preço baseado no tipo
    if (pedidoAtual.tipo === "simples") {
        preco = 20.00;
    } else if (pedidoAtual.tipo === "delicada") {
        preco = 35.00;
    } else if (pedidoAtual.tipo === "pesada") {
        preco = 50.00;
    } else {
        // Se não for nenhum dos acima
        console.log(`⚠️ Pedido de ${pedidoAtual.cliente} tem tipo inválido: ${pedidoAtual.tipo}`);
        continue; // 'continue' pula para a próxima repetição do laço sem somar
    }

    // Atualizando os totais
    faturamentoTotal = faturamentoTotal + preco;
    quantidadeLavagens++;

    console.log(`✅ Cliente: ${pedidoAtual.cliente} | Lavagem: ${pedidoAtual.tipo} | Valor: R$ ${preco.toFixed(2)}`);
}

// 4. EXIBINDO RESULTADOS FINAIS
console.log("\n--------------------------------");
console.log("RESUMO DO DIA:");
console.log(`Total de Lavagens Processadas: ${quantidadeLavagens}`);

console.log(`Faturamento Total: R$ ${faturamentoTotal.toFixed(2)}`);
