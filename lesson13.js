/*
    Objetivo: Calcular a média das notas dos alunos de um professor e verificar se está acima da média de aprovação. Use um loop for...in para iterar sobre as propriedades dentro de professor.gredes.
    Imprima se o professor está acima da média de aprovação (considerando 6.0 como média)

*/

const professor ={
    name: "Tony Stark",
    subject: "Physics",
    grades: {
        student1: 10.0,
        student2: 6.0,
        student3: 1.0
    },
}

let sumGrades = 0
let numberOfStudents = 0

for (const key in professor.grades) {
    sumGrades+=professor.grades[key]
    numberOfStudents++
}

let average = sumGrades / numberOfStudents
//console com if
console.log(average>=6
    ? `O ${professor.name} da disciplina ${professor.subject} tem ${numberOfStudents} alunos e eles estão APROVADOS com a média ${average.toFixed(2)} `
    
    : console.log(`O ${professor.name} da disciplina ${professor.subject} tem ${numberOfStudents} alunos e eles estão REPROVADOS com a média ${average.toFixed(2)} `)
)

/*
    Objetivo: Verificar e listar livros publicados antes de 2000.
    Use um loop for...of para iterar sobre o array biblioteca.
    Imprima o título e o ano dos livros que atendem a essa condição.
*/
const library = [
    { title: "O Hobbit", author: "J. R. R. Tolkien", year: 1925},
    { title: "Harry Potter", author: "J. K. Rolling", year: 1999},
    { title: "Narnia", author: "C. S. Lewis", year: 2010},
]

for (const book of library) {
    if(book.year < 2000){
        console.log(`O livro ${book.title}, escrito por ${book.author}, foi publicado em ${book.year}`)
    }
}

/*
    Objetivo: Contar a quantidade de filmes por gênero.
    Use o método forEach para iterar sobre o array filmes
    Para cada filme, verifique se o gênero já existe no objeto de contagem
*/

const movies = [
    {title: "Tropa de Elite", genre: "Militar"},
    {title: "Top Gun", genre: "Ação"},
    {title: "Interestelar", genre: "Sci-Fi"},
    {title: "Senhor dos anéis", genre: "Aventura"},
    {title: "Vingadores", genre: "Héroi"},
    {title: "Deadpool", genre: "Héroi"},
]

let count = {}

movies.forEach(movie => {
    if(count[movie.genre]){
        count[movie.genre]++
    }else{
        count[movie.genre] = 1
    }
})

for(let genre in count){
    console.log(`Existem ${count[genre]} filmes do genero ${genre}`)
}