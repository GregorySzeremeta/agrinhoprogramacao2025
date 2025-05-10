// Função para scroll suave até a seção desejada
function scrollToSection(id) {
  const section = document.getElementById(id);
  if (section) {
    section.scrollIntoView({ behavior: 'smooth' });
  }
}

// Função para animar crescimento da árvore
function plantar() {
  const tronco = document.getElementById('tronco');
  const folhas = document.getElementById('folhas');

  tronco.classList.add('crescendo');
  folhas.classList.add('aparecendo');

  // Efeito sonoro (opcional)
  // const audio = new Audio('semente.mp3');
  // audio.play();
}

// Adicionar evento aos botões "Comprar"
document.addEventListener('DOMContentLoaded', () => {
  const botoesComprar = document.querySelectorAll('button');

  botoesComprar.forEach(botao => {
    if (botao.textContent.toLowerCase().includes('comprar')) {
      botao.addEventListener('click', () => {
        scrollToSection('produtos');
      });
    }
  });
});