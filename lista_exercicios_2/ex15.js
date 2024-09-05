// Crie um array de objetos transacoes, onde cada transação tem
// tipo (entrada ou saída) e valor. Use forEach para calcular o saldo final,
// somando as entradas e subtraindo as saídas.

const transacao = [
    {tipo: "Entrada", valor:2000},
    {tipo: "Saída", valor:500},
    {tipo: "Entrada", valor:500},
    {tipo: "Saída", valor:750},
]

let valorAnt=0

transacao.forEach(saldo => {
    if(saldo.tipo == "Entrada"){
       valorTotal=valorAnt+saldo.valor
       valorAnt=valorTotal
    }else{
        valorTotal=valorAnt-saldo.valor
        valorAnt=valorTotal
    }
})
console.log("Transações feitas:")
console.log(transacao)
console.log(`O saldo total das transações é igual a ${valorTotal}`)