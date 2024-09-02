// let fruitsList = Array ()

// fruitsList [0]='Maça'
// fruitsList [1]='Banana'
// fruitsList [2]='Melancia'
// fruitsList [3]='Uva'
// fruitsList [4]='Morango'

// console.log(fruitsList.sort()) // para colocar em ordem alfabetica

// let index = fruitsList.indexOf("Morango")

// if (index === -1)
// {
//     console.log("Elemento nao existe")
// } else
// {
//     console.log(`O elemento existe e está na posição: ${index}`)
// }
// let numberList = []

// numberList[0] = 10 
// numberList[1] = 12 
// numberList[2] = 0 
// numberList[3] = 16 
// numberList[4] = 7
// numberList[5] = 9

// console.log(numberList.sort((a,b) => a -b)) // para colocar em ordem crescente

//Função
// function calculateLandArea(width, height) {
//     let area = width*height
//     return area
// }

// let width = 50
// let length = 100

// let area = calculateLandArea(width,length)

// console.log(`A area possui ${area} metros quadrados`)

//Ordenar

let alfabeto = ['A','D','G','L','B']

function order (arrayOrder){
    return arrayOrder.sort()
}

console.log(order(alfabeto))