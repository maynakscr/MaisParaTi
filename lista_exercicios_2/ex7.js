// Crie um array de objetos produtos, onde cada objeto tem nome,
// preco, e desconto. Use forEach para aplicar um desconto de 10% em todos
// os produtos e exibir o novo preço.

const produtos = [
    {name: "Livro", price: 40, discount: 5},
    {name: "Caderno", price: 15, discount: 3},
    {name: "Jogo PS4", price: 130, discount: 15},
    {name: "Quebra cabeça", price: 60, discount: 5},
]
let newPrice = 0

produtos.forEach(prod => {
    if(prod.discount !== 10){
        newPrice = prod.price * 0.9
    }

    console.log(`O poduto ${prod.name} com desconto aplicado será de ${newPrice} reais.`)
})
