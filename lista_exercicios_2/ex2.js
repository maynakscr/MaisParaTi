//Crie um objeto livro com propriedades titulo, autor, anoPublicado e genero.
//Verifique se a propriedade editora existe no objeto usando for in. Se não existir, adicione essa propriedade ao objeto.
let count=0
let book = {
    title: "Hobbit",
    author: "J. R. R. Tolkien",
    year: 1937,
    gender:"fantasia"
}

for( let key in book){
    if(key !== "editora"){
        book.editora ="HeperCollins"
    }
        
}

console.log(book)