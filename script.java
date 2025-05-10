// Rolagem suave para seções do site
function scrollToSection(id) {
  const section = document.getElementById(id);
  if (section) {
    section.scrollIntoView({ behavior: 'smooth' });
  }
}

// Animação de árvore crescendo
function plantarArvore() {
  const tronco = document.getElementById('tronco');
  const folhas = document.getElementById('folhas');

  tronco.classList.add('crescendo');
  folhas.classList.add('aparecendo');
}

// Redirecionamento para página de compra
function comprarProduto() {
  // Você pode substituir essa URL por uma real
  window.location.href = "https://www.exemplo.com/compra";
}
