<!DOCTYPE html>
<html lang="pt-BR">
<head>
    <meta charset="UTF-8">
    <title>Dashboard de Sensores</title>
    <style>
        body { font-family: Arial; padding: 20px; background: #f2f2f2; }
        #lista { background: white; padding: 15px; border-radius: 8px; }
        .sensor { margin-bottom: 10px; padding: 10px; border-bottom: 1px solid #ddd; }
    </style>
</head>
<body>

<h1>📡 Dados de Sensores (via Node.js)</h1>

<button onclick="carregarSensores()">Atualizar dados</button>

<div id="lista"></div>

<h2>Adicionar novo sensor</h2>
<form onsubmit="enviarSensor(event)">
    <input type="text" id="tipo" placeholder="Tipo do sensor" required>
    <input type="number" id="valor" placeholder="Valor" required>
    <button type="submit">Enviar</button>
</form>

<script>
async function carregarSensores() {
    const res = await fetch("http://localhost:3000/sensores");
    const json = await res.json();

    const lista = document.getElementById("lista");
    lista.innerHTML = "";

    json.dados.forEach(s => {
        const div = document.createElement("div");
        div.className = "sensor";
        div.innerHTML = `<strong>${s.tipo}</strong>: ${s.valor}`;
        lista.appendChild(div);
    });
}

async function enviarSensor(e) {
    e.preventDefault();

    const tipo = document.getElementById("tipo").value;
    const valor = parseFloat(document.getElementById("valor").value);

    const res = await fetch("http://localhost:3000/sensores", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ tipo, valor })
    });

    const json = await res.json();
    alert(json.mensagem || "Erro ao enviar.");
    carregarSensores();
}
</script>

</body>
</html>
