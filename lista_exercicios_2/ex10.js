// Crie um array de objetos vendas, onde cada objeto tem produto,
// quantidade e valor. Use forEach para calcular o valor total de vendas de
// todos os produtos.

const vendas = [
    {produto: "Livro", quantidade: 30, valor:40},
    {produto: "Caderno", quantidade: 10, valor:15},
    {produto: "Lapis", quantidade: 40, valor:2},
    {produto: "Caneta", quantidade: 50, valor:5},
]

let valorTotal=0
let valorAnt=0

vendas.forEach(venda => {
    valorTotal=venda.quantidade*venda.valor+valorAnt
    valorAnt=valorTotal
    // console.log(valorTotal)
})

console.log(`O valor total de todos os produtos é ${valorTotal} reais`)