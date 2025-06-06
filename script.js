let carrinho = [];

function aumentarFonte() {
  document.body.style.fontSize = 'larger';
}

function diminuirFonte() {
  document.body.style.fontSize = 'smaller';
}

function alternarContraste() {
  document.body.classList.toggle('contraste');
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
  alert('Integração com plugin de LIBRAS ainda será configurada.');
}

function plantarArvore() {
  const area = document.getElementById('animacao-arvore');
  area.innerHTML = '<div class="arvore">🌱</div>';
  setTimeout(() => {
    area.innerHTML = '<div class="arvore">🌳</div><p>Você plantou uma árvore!</p>';
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
    alert(`Compra finalizada com sucesso! Obrigado, ${nome}!`);
    carrinho = [];
    atualizarCarrinho();
    document.getElementById('pagamento').style.display = 'none';
  } else {
    alert('Preencha todos os campos.');
  }
}
