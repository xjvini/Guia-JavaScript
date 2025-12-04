const calcularTotal = (valor, nivel, regiao) => {
    if (valor <= 0) return 0;

    const descontos = { vip: 0.20, premium: 0.10 };
    const desconto = descontos[nivel] || 0;

    const frete = (regiao === 'SP') ? 10 : 25;

    return (valor * (1 - desconto)) + frete;
};

console.log(calcularTotal(100, 'vip', 'SP'));
console.log(calcularTotal(200, 'padrao', 'RJ'));
