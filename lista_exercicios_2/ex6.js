// Crie um array de objetos funcionarios, onde cada objeto
// contém informações como nome, cargo, e salario. Use for of para filtrar
// e exibir apenas os funcionários cujo salário seja maior que um valor
// específico.

const funcionario = [
    { nome: "Fulano", cargo: "Estagiário", salario: 1500},
    { nome: "José", cargo: "Técnico", salario: 3000},
    { nome: "Maria", cargo: "Engenheiro", salario: 8000},
]

for (const key of funcionario) {
    if(key.salario > 2000){
        console.log(`${key.nome} recebe um salário maior que 2000.`)
    }
}