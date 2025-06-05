// Animação de plantar árvore
function plantarArvore() {
  const arvore = document.getElementById('arvore');
  arvore.style.width = '50px';
  arvore.style.height = '150px';
}

// Contraste
function toggleContraste() {
  document.body.classList.toggle('contraste');
}

// Aumentar e diminuir fonte
function aumentarFonte() {
  const atual = parseFloat(getComputedStyle(document.body).fontSize);
  document.body.style.fontSize = (atual + 2) + 'px';
}

function diminuirFonte() {
  const atual = parseFloat(getComputedStyle(document.body).fontSize);
  document.body.style.fontSize = (atual - 2) + 'px';
}

// Sistema de loja
const produtosPorCategoria = {
  vegetais: ['Alface', 'Tomate', 'Cenoura', 'Couve', 'Batata'],
  laticinios: ['Queijo', 'Leite', 'Iogurte', 'Manteiga'],
  mel: ['Mel Puro', 'Mel com Própolis', 'Pólen', 'Cera'],
  graos: ['Arroz', 'Feijão', 'Milho', 'Soja']
};

function abrirLoja(categoria) {
  document.querySelector('.mercado').style.display = 'none';
  document.querySelector('.loja').style.display = 'block';
  
  const titulo = document.getElementById('tituloLoja');
  const produtosDiv = document.getElementById('produtos');

  titulo.innerText = `Loja de ${categoria.charAt(0).toUpperCase() + categoria.slice(1)}`;
  produtosDiv.innerHTML = '';

  produtosPorCategoria[categoria].forEach(produto => {
    const item = document.createElement('div');
    item.innerText = produto;
    item.classList.add('produto');
    produtosDiv.appendChild(item);
  });
}

function voltar() {
  document.querySelector('.mercado').style.display = 'block';
  document.querySelector('.loja').style.display = 'none';
}
