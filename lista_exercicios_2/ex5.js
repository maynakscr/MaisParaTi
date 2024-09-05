//Crie um array de objetos alunos, cada um com propriedades nome, nota1, e nota2. Use for of para calcular a média das notas de cada aluno e exibir o nome do aluno junto com sua média.

let media

const alunos = [
    { nome: "Fulano", nota1: 7, nota2: 3},
    { nome: "José", nota1: 6, nota2: 5},
    { nome: "Maria", nota1: 8, nota2: 7},
]

for (const key of alunos) {
    media = (key.nota1+key.nota2)/2
    
    console.log(`O aluno ${key.nome} tem a média ${media}.`)
}