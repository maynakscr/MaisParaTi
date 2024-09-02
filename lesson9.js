/*
// 1. Soma dos elementos de um Array

let sum=0
let aux=0
let arr=[7,5,60,80]

for (let i = 0; i < arr.length; i++) {
    sum+= arr[i]
}
console.log(sum)

//Encontre o maior número de um array

for (let i = 0; i < arr.length; i++) {
   if (aux<arr[i]){
    aux = arr[i]
   }
}
console.log(aux)

let troca = []

//Reverter um Array
for (let i = arr.length-1; i >= 0; i--) {
     troca.push(arr[i]) 
}

console.log(troca)

let pares = []
//Colocar um array só com números pares
for (let m = 0; m < arr.length; m++) {


    if (arr[m] % 2 == 0){
     pares.push(arr[m])
    }
 }
 console.log(pares)

 // Contar ocorrencia de um valor
let vet=[10,10,7,5,10]
let value = 10
let count = 0

for (let m = 0; m < vet.length; m++) {
    
    if (vet[m] === value){
     count++
    }
 }
 console.log(count)

*/

 //arrays/vetores multidimensionais

//  let matriz = [
//     [1,2,3],
//     [4,5,6,4],
//     [7,8,9]
//  ]

//  console.table(matriz)

//  for (let i = 0; i < matriz.length; i++) {
//     for (let j = 0; j < matriz[i].length; j++) {
//         console.log(`Elemento na posição [${i}][${j}]:${matriz[i][j]}`)  
//     }
    
//  }


//Soma de matrizes (precisa ter o mesmo tamanho!!!)
let arr1 =
[
    [1,2,3],
    [4,5,6],
    [7,8,9]
]
let arr2 = 
[
    [9,8,7],
    [6,5,4],
    [3,2,1]
]

let resultado=[]

if (arr1.length !== arr2.length || arr1[0].length !== arr2[0].length) {
    console.log("Matriz com tamanhos diferentes")
}
else{
for (let i = 0; i < arr1.length; i++) {
    let somaLinha=[]
    for (let j = 0; j < arr1[i].length; j++) {
        somaLinha.push(arr1[i][j]+arr2[i][j])
    }
    resultado.push (somaLinha)
}
}
console.table(resultado)