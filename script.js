// Animação árvore
function plantarArvore() {
  const arvore = document.getElementById('arvore');
  arvore.style.width = '50px';
  arvore.style.height = '150px';
}

// Contraste
function toggleContraste() {
  document.body.classList.toggle('contraste');
}

// Fonte
function aumentarFonte() {
  const atual = parseFloat(getComputedStyle(document.body).fontSize);
  document.body.style.fontSize = (atual + 2) + 'px';
}

function diminuirFonte() {
  const atual = parseFloat(getComputedStyle(document.body).fontSize);
  document.body.style.fontSize = (atual - 2) + 'px';
}

// Som ambiente
function toggleSom() {
  const som = document.getElementById('somAmbiente');
  som.muted = !som.muted;
}

// Produtos
const produtosPorCategoria = {
  vegetais: ['Alface', 'Tomate', 'Cenoura', 'Couve', 'Batata'],
  laticinios: ['Queijo', 'Leite', 'Iogurte', 'Manteiga'],
  mel: ['Mel Puro', 'Mel com Própolis', 'Pólen', 'Cera'],
  graos: ['Arroz', 'Feijão', 'Milho', 'Soja']
};

let carrinho = [];

// Loja
function abrirLoja(categoria) {
  document.querySelector('.mercado').style.display = 'none';
  document.querySelector('.loja').style.display = 'block';
  
  const titulo = document.getElementById('tituloLoja');
  const produtosDiv = document.getElementById('produtos');

  titulo.innerText = `Loja de ${categoria.charAt(0).toUpperCase() + categoria.slice(1)}`;
  produtosDiv.innerHTML = '';

  produtosPorCategoria[categoria].forEach(produto => {
    const item = document.createElement('div');
    item.innerHTML = `${produto} <button onclick="adicionarCarrinho('${produto}')">Adicionar</button>`;
    produtosDiv.appendChild(item);
  });
}

function voltar() {
  document.querySelector('.mercado').style.display = 'block';
  document.querySelector('.loja').style.display = 'none';
}

// Carrinho
function adicionarCarrinho(produto) {
  carrinho.push(produto);
  alert(`${produto} adicionado ao carrinho!`);
}

function abrirCarrinho() {
  document.querySelector('.carrinho').style.display = 'block';
  const lista = document.getElementById('itensCarrinho');
  const total = document.getElementById('total');

  lista.innerHTML = '';
  carrinho.forEach(item => {
    const li = document.createElement('li');
    li.innerText = item;
    lista.appendChild(li);
  });

  total.innerText = `Total de itens: ${carrinho.length}`;
}

function fecharCarrinho() {
  document.querySelector('.carrinho').style.display = 'none';
}

// Pagamento
function finalizarCompra() {
  document.querySelector('.loja').style.display = 'none';
  document.querySelector('.carrinho').style.display = 'none';
  document.querySelector('.pagamento').style.display = 'block';
}

function voltarParaMercado() {
  document.querySelector('.pagamento').style.display = 'none';
  document.querySelector('.mercado').style.display = 'block';
  carrinho = [];
}
