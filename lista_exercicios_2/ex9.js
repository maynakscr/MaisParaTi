// Crie um array de objetos clientes, cada um com propriedades
// nome, idade, e cidade. Use forEach para contar quantos clientes têm mais
// de 30 anos.

const clientes = [
    { nome: "Fulano", idade: 35, cidade: "Belo Horizone"},
    { nome: "José", idade: 40, cidade: "Campinas"},
    { nome: "Maria", idade: 20, cidade: "Fortaleza"},
]

let count=0

clientes.forEach(cliente => {
    if([cliente.idade] > 30){
        count++
    }
})

console.log(`Existem ${count} pessoas com mais de 30 anos`)