// Crie um objeto carrinho com uma propriedade itens, que é um
// array de objetos. Cada objeto dentro de itens deve representar um
// produto no carrinho, com nome, quantidade, e precoUnitario. Use forEach
// para calcular o valor total do carrinho.

const itens = [
    {nome: "Livro", quantidade: 30, precoUnitario:40},
    {nome: "Caderno", quantidade: 30, precoUnitario:15},
    {nome: "Lapis", quantidade: 30, precoUnitario:3},
    {nome: "Caneta", quantidade: 30, precoUnitario:10},
]

let valorTotal=0
let valorAnt=0

itens.forEach(carrinho => {
    valorTotal=carrinho.quantidade*carrinho.precoUnitario+valorAnt
    valorAnt=valorTotal
    // console.log(valorTotal)
})

console.log(`O valor total de todos os produtos é ${valorTotal} reais`)