// Criar um objeto CARRO com propriedades como MARCA, MODELO,ANO E COR.
// For in para iterar sobre as propiedades e exibir seus valores no console

let carro = {
    marca: "Volkswagen",
    modelo: "Gol",
    ano: 1980,
    cor:"Cinza"
}

for( let key in carro){
    console.log(`${key}:${carro[key]}`)
}