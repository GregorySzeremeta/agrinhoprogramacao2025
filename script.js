let carrinho = [];

function aumentarFonte() {
  document.body.style.fontSize = 'larger';
}

function diminuirFonte() {
  document.body.style.fontSize = 'smaller';
}

function alternarContraste() {
  document.body.classList.toggle('modo-contraste');
}

function toggleSom() {
  const audio = document.getElementById('somAmbiente');
  if (audio.paused) {
    audio.play();
  } else {
    audio.pause();
  }
}

function ativarLibras() {
  // VLibras já é carregado pelo script no HTML
  // Este botão só garante que o usuário veja o botão na tela
  alert('LIBRAS ativado! Clique no bonequinho à esquerda da tela.');
}

function plantarArvore() {
  const area = document.getElementById('arvoreArea');
  area.textContent = '🌱';
  setTimeout(() => {
    area.textContent = '🌿';
  }, 1000);
  setTimeout(() => {
    area.textContent = '🌳';
  }, 2000);
}

function adicionarAoCarrinho(produto) {
  carrinho.push(produto);
  atualizarCarrinho();
}

function atualizarCarrinho() {
  const ul = document.getElementById('carrinho');
  ul.innerHTML = '';
  carrinho.forEach(item => {
    const li = document.createElement('li');
    li.textContent = item;
    ul.appendChild(li);
  });
}

function finalizarCompra() {
  document.getElementById('pagamento').style.display = 'block';
}

function confirmarPagamento() {
  const nome = document.getElementById('nomeComprador').value;
  const cartao = document.getElementById('cartao').value;
  if (nome && cartao) {
    alert(`Obrigado, ${nome}! Sua compra foi finalizada com sucesso.`);
    carrinho = [];
    atualizarCarrinho();
    document.getElementById('pagamento').style.display = 'none';
  } else {
    alert('Preencha todos os campos corretamente!');
  }
}
