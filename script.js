// Consumindo API Java Spring Boot
const API_URL = 'http://localhost:8080/api/produtos';

async function carregarProdutos() {
    const response = await fetch(API_URL);
    const produtos = await response.json();
    exibirProdutos(produtos);
}

async function carregarPorCategoria(categoria) {
    const response = await fetch(`${API_URL}/${categoria}`);
    const produtos = await response.json();
    exibirProdutos(produtos);
}

function exibirProdutos(produtos) {
    const container = document.getElementById('listaProdutos');
    container.innerHTML = '';

    if (produtos.length === 0) {
        container.innerHTML = "<p>Nenhum produto encontrado.</p>";
        return;
    }

    produtos.forEach(produto => {
        const div = document.createElement('div');
        div.className = 'produto';
        div.innerHTML = `
            <h3>${produto.nome}</h3>
            <p><strong>Categoria:</strong> ${produto.categoria}</p>
            <p>${produto.descricao}</p>
            <p><strong>R$</strong> ${produto.preco.toFixed(2)}</p>
        `;
        container.appendChild(div);
    });
}

// Animação Plantar Árvore
const canvas = document.getElementById('treeCanvas');
const ctx = canvas.getContext('2d');

function plantar() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    // Tronco
    ctx.fillStyle = '#8B4513';
    ctx.fillRect(190, 300, 20, -100);

    // Crescer copa
    let radius = 10;
    const interval = setInterval(() => {
        ctx.beginPath();
        ctx.arc(200, 200, radius, 0, 2 * Math.PI);
        ctx.fillStyle = '#228B22';
        ctx.fill();
        radius += 5;
        if (radius > 70) clearInterval(interval);
    }, 100);
}
