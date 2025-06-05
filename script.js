// Acessibilidade
function aumentarFonte() {
    document.body.style.fontSize = 'larger';
}

function diminuirFonte() {
    document.body.style.fontSize = 'medium';
}

function alternarContraste() {
    document.body.classList.toggle('contraste');
}

function toggleLibras() {
    alert("Plugin de LIBRAS em desenvolvimento!");
}

// Barracas
function abrirBarraca(tipo) {
    alert(`Você escolheu a barraca de ${tipo}! Redirecionando...`);
    // Aqui você pode usar window.location.href para uma página específica
    // window.location.href = `${tipo}.html`;
}
body.contraste {
    background: #000;
    color: #fff;
}

body.contraste header,
body.contraste main,
body.contraste footer {
    background-color: #222;
    color: #fff;
}
