// Crie um array de objetos estoque, onde cada objeto tem
// produto, quantidade e minimo. Use forEach para atualizar a quantidade
// dos produtos que estão abaixo do mínimo, duplicando suas quantidades.

const estoque = [
    { produto: "Metal", quantidade: 60, minimo: 30},
    { produto: "Pedra", quantidade: 50, minimo: 20},
    { produto: "Couro", quantidade: 10, minimo: 20},
    { produto: "Plastico", quantidade: 36, minimo: 40},
]
console.log("Estoque sem atualização")
console.log(estoque)


estoqueMinimo = {}

estoque.forEach(minimo => {
    if([minimo.quantidade] < [minimo.minimo]){
        minimo.quantidade=minimo.quantidade*2
    }
})
console.log("Estoque com atualização")
console.log(estoque)



