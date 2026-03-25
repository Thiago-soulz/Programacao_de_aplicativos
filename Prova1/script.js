let produtos = [];

fetch("dados.json")
    .then(res => res.json())
    .then(dados => {
        produtos = dados;
        atualizarPainel();
    })
    .catch(erro => {
        console.error("Erro ao carregar JSON:", erro);
    });


function adicionarProduto() {
    let nome = document.getElementById("nome").value;
    let preco = parseFloat(document.getElementById("preco").value);
    let quantidade = parseInt(document.getElementById("quantidade").value);

    if (!nome || isNaN(preco) || isNaN(quantidade)) {
        alert("Preencha todos os campos!");
        return;
    }

    let produto = { nome, preco, quantidade };

    produtos.push(produto);

    atualizarPainel();

    document.getElementById("nome").value = "";
    document.getElementById("preco").value = "";
    document.getElementById("quantidade").value = "";
}


function atualizarPainel() {
    if (produtos.length === 0) return;

    let maisCaro = produtos.reduce((a, b) => a.preco > b.preco ? a : b);
    let maiorQtd = produtos.reduce((a, b) => a.quantidade > b.quantidade ? a : b);
    let total = produtos.reduce((soma, p) => soma + (p.preco * p.quantidade), 0);

    document.getElementById("maisCaro").innerText =
        `${maisCaro.nome} (R$ ${maisCaro.preco})`;

    document.getElementById("maiorQtd").innerText =
        `${maiorQtd.nome} (${maiorQtd.quantidade})`;

    document.getElementById("totalEstoque").innerText =
        `R$ ${total.toFixed(2)}`;
}