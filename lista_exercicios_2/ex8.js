// Crie um array de objetos filmes, onde cada filme tem titulo,
// diretor, e anoLancamento. Use forEach para criar um novo array
// contendo apenas os títulos dos filmes.

const movies = [
    {title: "Tropa de Elite", diretor: "José Padilha", anoLancamento: 2007},
    {title: "Top Gun: Maverick", diretor: "Joseph Kosinski", anoLancamento: 2020},
    {title: "Interestelar", diretor: "Christopher Nolan", anoLancamento: 2014},
    {title: "Senhor dos anéis", diretor: "Peter Jackson", anoLancamento: 2001},
    {title: "Vingadores", diretor: "Joe Russo", anoLancamento: 2019},
    {title: "Deadpool", diretor: "Tim Mller", anoLancamento: 2016},
]

let titulos = {}

movies.forEach(movie => {
        titulos.title= movie.title
        console.log(titulos)
})