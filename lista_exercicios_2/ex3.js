// Criar objeto produto com várias propriedades, crie uma função que retorna um novo objeto contendo apenas propriedades cujo valos seja maior que um valor específico.
//Use forin para filtrar as propriedades.

const produto ={
    livro: 30,
    caderno: 10,
    lapis: 40,
    caneta: 50
}

function maior(produto) {

    if (produto>30){
        result= "tem mais de 30 unidades."
    }else{ 
        result="tem menor de 30 unidades."
    }   
    
    return result
}

for (const key in produto) {
    console.log(`O ${key} ${maior(produto[key])}`)
}