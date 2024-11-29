let carrinho = [];

function adicionarAoCarrinho(item, preco) {
    carrinho.push({ item, preco });
    atualizarCarrinho();
}

function atualizarCarrinho() {
    const listaCarrinho = document.getElementById("itens-carrinho");
    listaCarrinho.innerHTML = "";
    carrinho.forEach((produto, index) => {
        const li = document.createElement("li");
        li.textContent = `${produto.item} - R$ ${produto.preco.toFixed(2)}`;
        listaCarrinho.appendChild(li);
    });
}

document.getElementById("btn-checkout").addEventListener("click", function() {
    alert("Finalizando o pedido!");
    // Aqui você pode adicionar a lógica para finalizar o pedido
});
