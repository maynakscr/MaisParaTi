const prompt = require('prompt-sync')()
/*
let count = 0
let multiplier = Number (prompt('Informe o número: '))

for (count = 0; count<= 10; count++){
    console.log(`${multiplier} * ${count} =`, multiplier*count)
}
*/
/*
let num1 = Number (prompt ('Insira o primeiro número: '))
let cont = 0
let sum = 0

while (num1 !== 0){
    sum += num1
    cont ++
    num1= Number(prompt('Digite outro número: '))
}

console.log('A média aritmética é', sum/cont)
*/
let num1

do{
    num1 = Number (prompt('Digite um número: '))
}while(num1>0)
