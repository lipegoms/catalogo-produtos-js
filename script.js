const produtos = [
    {id: 1, nome: "Teclado RGB", preco: 300, categoria: "Periféricos"},
    {id: 2, nome: "Mouse RGB", preco: 250, categoria: "Periféricos"},
    {id: 3, nome: "Controle Mil Grau", preco: 400, categoria: "Periféricos"},
    {id: 4, nome: "Monitor 4k", preco: 2000, categoria: "Eletrônicos"},
    {id: 6, nome: "Webcam Full HD", preco: 350.00, categoria: "eletronicos"}
];

const formulario = document.getElementById("formProduto");
const campoNome = document.getElementById("nome");
const campoPreco = document.getElementById("preco");
const campoCategoria = document.getElementById("categoria");
const pesquisaNome = document.getElementById("busca");
const pesquisaCategoria = document.getElementById("")


formulario.addEventListener("submit", function(event) {
    // Evita que a página recarregue ao enviar o formulário
    event.preventDefault();

    
});