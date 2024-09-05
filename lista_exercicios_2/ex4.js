//Crie um array de objetos pessoas, onde cada objeto representa uma pessoa com nome, idade e cidade.
//Use forof para exibir as informações de cada pessoa n console

const pessoa = [
    { nome: "Fulano", idade: 35, cidade: "Belo Horizone"},
    { nome: "José", idade: 40, cidade: "Campinas"},
    { nome: "Maria", idade: 20, cidade: "Fortaleza"},
]

for (const key of pessoa) {
        console.log(`A pessoa é ${key.nome}, tem ${key.idade} anos e é da cidade de ${key.cidade}`)
}