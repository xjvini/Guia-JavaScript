<!DOCTYPE html>
<html>
<head>
    <meta charset="UTF-8">
    <title>Relógio Digital</title>
    <style>
        body {
            font-family: Arial;
            display: flex;
            height: 100vh;
            justify-content: center;
            align-items: center;
            background: #f2f2f2;
        }
        #relogio {
            font-size: 4rem;
            background: white;
            padding: 20px 40px;
            border-radius: 10px;
            box-shadow: 0 0 10px #ccc;
        }
    </style>
</head>
<body>

<div id="relogio">00:00:00</div>

<script>
function atualizarRelogio() {
    const agora = new Date();
    const h = String(agora.getHours()).padStart(2, "0");
    const m = String(agora.getMinutes()).padStart(2, "0");
    const s = String(agora.getSeconds()).padStart(2, "0");
    
    document.getElementById("relogio").textContent = `${h}:${m}:${s}`;
}

// Atualiza a cada 1 segundo
setInterval(atualizarRelogio, 1000);

// Chamada inicial
atualizarRelogio();
</script>

</body>
</html>
