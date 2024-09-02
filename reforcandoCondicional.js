const prompt = require('prompt-sync')()

//Ex 1
/*
console.log('Verifique se um número é positivo, negativo ou zero')

let num1 = Number (prompt ('Insira o número: '))

if (num1 > 0){
    console.log('O número é positivo')
} else if (num1 < 0){
    console.log('O número é negativo')
} else if (num1 == 0){
    console.log('O número é zero')
}else {
    console.log('Não é um número')
}
*/

//Ex 2
/*
console.log('Verifique se um ano é bissexto')

n1 = Number (prompt ('Insira ano: '))


if ((n1%4 === 0) && (n1%100 !==0) || (n1%400 === 0)){
    console.log('Ano bissexto')
}else {
    console.log('Ano não é bissexto')
}
*/

//Ex3
/*
console.log('Calcule a média de três números e determine o conceito')

let not1 = Number (prompt ('Insira o nota 1: '))
let not2 = Number (prompt ('Insira o nota 2: '))
let not3 = Number (prompt ('Insira o nota 3: '))

let media= (not1+not2+not3)/3


if (media >= 9){
    console.log('Conceito A')
} else if (media < 9 && media >= 7){
    console.log('Conceito B')
} else if (media < 7 && media >= 5){
    console.log('Conceito C')
}else if (media < 5 && media >= 3){
    console.log('Conceito D')
}else if (media < 3 && media >= 1){
    console.log('Conceito E')
}else if (media < 1){
    console.log('Conceito F')
}
*/

//Ex4
/*
console.log('Verifique se um número é par ou impar')

let num1 = Number (prompt ('Insira o número: '))

if (num1%2 == 0){
    console.log('O número é par')
} else{
    console.log('O número é impar')
}
*/

//Ex5
/*
console.log('Verifique a categoria de um nadador')

let age = Number (prompt ('Insira sua idade: '))

if (age >= 18){
    console.log('Adulto')
} else if (age <= 17 && age >= 14){
    console.log('Juvenil B')
} else if (age <= 13 && age >= 11){
    console.log('Juvenil A')
}else if (age <= 10 && age >= 8){
    console.log('Infantil B')
}else {
    console.log('Infantil A')
}
*/

//Ex6
/*
console.log('Verifique o dia da semana')

let day = Number(prompt('Insira o dia da semana correspondente.ex 1= Domingo, 2= Segunda-feira, etc. :)'))
let resultado = 0


    switch (day) {
        case 1:
            console.log('Domingo')
            break;
        case 2:
            console.log('Segunda')
            break;
        case 3:
            console.log('Terça')
            break;
        case 4:
            console.log('Quarta')
            break;
        case 5:
            console.log('Quinta')
            break;
        case 6:
            console.log('Sexta')
            break;
        case 7:
            console.log('Sábado')
            break;
    
        default:
            console.log('Opção inexistente')
            break;
    }
 */   


//Ex7
/*
console.log('Calcule o valor de uma expressão matemática simples')

let num1 = Number(prompt('Insira o primeiro número: '))
let num2 = Number(prompt('Insira o segundo número: '))
let op = (prompt('Insira a operação: '))
let resultado

switch (op){
    case '+':
        resultado=num1+num2
        console.log(`${num1} + ${num2} =`,resultado)
        break;
    case '-':
        resultado=num1-num2
        console.log(`${num1} - ${num2} =`,resultado)
        break;
    case '*':
        resultado=num1*num2
        console.log(`${num1} * ${num2} =`,resultado)
        break;
    case '/':
        resultado=num1/num2
        console.log(`${num1} / ${num2} =`,resultado)
        break;
    default:
            console.log('Opção inexistente')
            break;
}
*/


//Ex8
/*
console.log('Verifique a estação do ano')

let est = Number(prompt('Insira o número para ver qual a estação: '))

switch (est){
    case 1:
            console.log('Primavera')
            break;
        case 2:
            console.log('Verão')
            break;
        case 3:
            console.log('Outono')
            break;
        case 4:
            console.log('Inverno')
            break;
    default:
            console.log('Opção inexistente')
            break;
}
*/

//Ex9
/*
console.log('Verifique a faixa etária de uma pessoa')

let age = Number (prompt ('Insira sua idade: '))
let result=0


if (age >= 60){
    result= 1
} else if (age <= 59 && age >= 18){
    result= 2
} else if (age <= 17 && age >= 13){
    result= 3
}else if (age <= 12 && age >= 0){
    result= 4
}else {
    result= 5
}

switch (result) {
    case 1:
        console.log('Idoso')
        break;
    case 2:
        console.log('Adulto')
        break;
    case 3:
        console.log('Adolescente')
        break;
    case 4:
        console.log('Criança')
        break;
    default:
        console.log('Opção inexistente')
        break;
}
*/

//Ex10

console.log('Calcule o IMC e determine a categoria')

let peso = Number(prompt('Insira o seu peso: '))
let altura = Number(prompt('Insira a sua altura: '))
let IMC

IMC=peso/altura**2

console.log('Seu IMC é ', IMC.toFixed(1))

if (IMC >= 40){
    console.log('Obesidade grau III')
} else if (IMC <= 39.9 && IMC >= 35){
    console.log('Obesidade grau II')
} else if (IMC <= 34.9 && IMC >= 30){
    console.log('Obesidade grau I')
}else if (IMC <= 29.9 && IMC >= 25){
    console.log('Sobrepeso')
}else if (IMC <= 24.9 && IMC >= 18.5){
    console.log('Peso Normal')
}else if (IMC <18.5){
    console.log('Abaixo do peso')
}else {
    console.log('Não tem essa opção')
}