const prompt = require('prompt-sync')()

//Ex 1
/*let count = 0
let n1=1
let n2=0
let next=0

console.log('Imprima a sequência de Fibonacci até o 10º termo')

for (count = 0; count< 10; count++){
    console.log(next)
    next=n1+n2
    n1=n2
    n2=next
}
*/

//Ex 2
/* 
console.log('Verifique se um número é primo')

let n1 = Number (prompt ('Insira número: '))
let count=0


for (let i = 0; i<= n1; i++){
    if (n1%i==0) {
      count++  
    }
}

if (count==2) {
    console.log('Número Primo')    
}
else{
    console.log('Não é número Primo')
}
*/

//Ex3
/*let n1 = 10
let count=0

console.log('Imprimir um triângulo de números')

for (let i = 1; i<= n1; i++){
    for (let j = 1; j <= i; j++) {
        count++
        console.log(count)
    }
}
*/

//Ex4
/*
console.log('Calcule o fatorial de um número')

let num1 = Number (prompt ('Insira o número: '))
let prod = 1

while (num1> 0){
    prod*=num1
    num1 --
}

console.log('O fatorial do número é ', prod)
*/

//Ex5
/*
console.log('Inverta os dígitos de um número')

let num1 = Number(prompt('Insira o número: '));
let resultado = 0;

    while (num1 > 0) {
        resultado = 10 * resultado + num1 % 10;
        num1 = Math.floor(num1 / 10);
    }

    console.log('O resultado da inversão é: ', resultado);
*/

//Ex6
/*
console.log('Verifique se um número é palíndromo')

let num1 = Number(prompt('Insira o número: '))
let resultado = 0
let aux = num1

    while (num1 > 0) {
        resultado = 10 * resultado + num1 % 10
        num1 = Math.floor(num1 / 10)
    }

    if (resultado == aux) {
        console.log('É palindromo')
    } 
    else {
        console.log('Não é palindromo')
    }
*/

//Ex7
/*
console.log('Conte o número de dígitos de um número')

let num1 = Number(prompt('Insira o número: '))
let resultado = 0
let count=0

    do {
        resultado = 10 * resultado + num1 % 10
        num1 = Math.floor(num1 / 10) 
        count++
    } while (num1 > 0);

        console.log('O seu número tem ',count, ' digitos.')
*/

//Ex8
/*
console.log(Calcule a soma dos dígitos de um número)

let num1 = Number(prompt('Insira o número: '))
let resultado = 0
let aux=0

    do {
        let digito = num1 % 10
        resultado = 10 * resultado + digito
        num1 = Math.floor(num1 / 10) 
        aux+=digito
    } while (num1 > 0);

        console.log('A soma dos digitos é igual a ',aux)
*/

//Ex9

let n1 = 6
let count= n1
let i = 1
let j = 0

console.log('Imprimir um triângulo de números')

do {
    i++
    console.log(count)
    do {
        j++
        count--
    } while (j < i);
} while (i< n1)


//Ex10
/*
console.log('Encontre o maior divisor comum (MDC) de dois números')

let num1 = Number(prompt('Insira o primeiro número: '))
let num2 = Number(prompt('Insira o segundo número: '))
let resultado

do {
        resultado = num2
        num2 = num1 % num2
        num1 = resultado
} while (num2 !== 0)

console.log('MDC dos dois é ', resultado)
*/
