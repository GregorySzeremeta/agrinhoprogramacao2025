// script.js
new window.VLibras.Widget('https://vlibras.gov.br/app');

let fonteAumentada = false;
let contrasteAtivo = false;
let som = new Audio("https://cdn.pixabay.com/audio/2021/06/11/audio_d915f6cb9b.mp3");

document.getElementById('aumentarFonteBtn').onclick = () => {
  document.body.style.fontSize = fonteAumentada ? '1rem' : '1.2rem';
  fonteAumentada = !fonteAumentada;
};

document.getElementById('contrasteBtn').onclick = () => {
  document.body.style.filter = contrasteAtivo ? 'none' : 'invert(1)';
  contrasteAtivo = !contrasteAtivo;
};

document.getElementById('somAmbienteBtn').onclick = () => {
  if (som.paused) som.play();
  else som.pause();
};

function plantar() {
  let container = document.getElementById('arvoreContainer');
  container.innerHTML = '<div class="arvore"></div>';
}

function abrirBarraca(tipo) {
  alert("Você abriu a barraca de " + tipo + " 🌽🍅");
  // Aqui você pode redirecionar para outra página se desejar
}

function simularPagamento() {
  alert("Pagamento simulado com sucesso! 💳 Obrigado por comprar conosco.");
}

