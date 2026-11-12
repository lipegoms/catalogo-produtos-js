// Criando lista e inserindos dados iniciais
const produtos = [
    {id: 1, nome: "Teclado RGB", preco: 300, categoria: "Periférico"},
    {id: 2, nome: "Mouse RGB", preco: 250, categoria: "Periférico"},
    {id: 3, nome: "Controle Mil Grau", preco: 400, categoria: "Periférico"},
    {id: 4, nome: "Monitor 4k", preco: 2000, categoria: "Eletrônico"},
    {id: 6, nome: "Webcam Full HD", preco: 350.00, categoria: "Eletrônico"}
];

// Recebendo dados
const formulario = document.getElementById("formProduto");
const campoNome = document.getElementById("nome");
const campoPreco = document.getElementById("preco");
const campoCategoria = document.getElementById("categoria");
const pesquisaNome = document.getElementById("busca");
const pesquisaCategoria = document.querySelectorAll(".btnCategoria");
const listaProdutos = document.getElementById("listaProdutos");
const tituloCadastro = document.getElementById("tituloCadastro");

// Guardando categoria selecionada (Inicia com categoria "Todos")
let categoriaSelecionada = "Todos";

//Função para renderizar o produto
function renderizarProdutos(lista){
    
    //.map tranforma cada objeto do produto em um texto HTML
    const cards = lista.map(produto => {
        // Desestruturação: tira nome, preço e categoria de cada objeto
        // É o mesmo q escrever const nome = produto.nome, mas pra cada dado do objeto.
        const {nome, preco, categoria} = produto;

        return `
            <article class="cardProduto">
                <span class="cardCategoria">${categoria}</span>
                <h4>${nome}</h4>
                <p class="cardPreco">${preco}</p>
            </article>
        `
    })

    listaProdutos.innerHTML = cards.join("");
}

renderizarProdutos(produtos);

function filtrarProdutos() {
    const textoBusca = pesquisaNome.value.toLowerCase();
 
    // .filter() devolve só os produtos que passam nas duas condições
    const filtrados = produtos.filter(produto => {
        const nomeConfere = produto.nome.toLowerCase().includes(textoBusca);
        const categoriaConfere = categoriaSelecionada === "Todos" || produto.categoria === categoriaSelecionada;
        return nomeConfere && categoriaConfere;
    });
 
    renderizarProdutos(filtrados);
}
 
// Filtra enquanto o usuário digita
pesquisaNome.addEventListener("input", filtrarProdutos);
 
// Botões de categoria: marca o botão clicado e filtra
pesquisaCategoria.forEach(botao => {
    botao.addEventListener("click", () => {
        pesquisaCategoria.forEach(b => b.classList.remove("ativo"));
        botao.classList.add("ativo");
 
        categoriaSelecionada = botao.dataset.categoria;
        filtrarProdutos();
    });
});
 
// ================= CADASTRO =================
 
formulario.addEventListener("submit", function(event) {
    // Evita que a página recarregue ao enviar o formulário
    event.preventDefault();
 
    const nome = campoNome.value.trim();
 
    // .find() procura se já existe um produto com o mesmo nome
    const produtoExistente = produtos.find(
        produto => produto.nome.toLowerCase() === nome.toLowerCase()
    );
 
    if (produtoExistente) {
        tituloCadastro.textContent = `"${nome}" já está cadastrado!`;
        return;
    }
 
    // Cria o novo objeto com os valores digitados
    const novoProduto = {
        id: produtos.length + 1,
        nome: nome,
        preco: Number(campoPreco.value), // .value sempre vem como texto
        categoria: campoCategoria.value
    };
 
    produtos.push(novoProduto);
 
    tituloCadastro.textContent = `Produto "${nome}" salvo com sucesso!`;
    formulario.reset();
 
    // Atualiza a tela respeitando a busca e o filtro que estiverem ativos
    filtrarProdutos();
});
 
// Mostra os produtos pré-cadastrados assim que a página abre
renderizarProdutos(produtos);
