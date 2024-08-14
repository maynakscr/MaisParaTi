const prompt = require('prompt-sync')()

//Exercicio 1

// console.log('Exercicio para saber se o número é par ou impar')

// let num1 = Number (prompt ('Insira o número: '))

// if (num1%2 == 0){
//     console.log('O número é par')
// } else{
//     console.log('O número é impar')
// }

//Exercício 2

// console.log('Exercicio que verifica a faixa etária de uma pessoa')

// let age = Number (prompt ('Insira sua idade: '))
// let result=0


// if (age >= 60){
//     console.log('Idoso')
// } else if (age <= 59 && age >= 18){
//     console.log('Adulto')
// } else if (age <= 17 && age >= 13){
//     console.log('Adolescente')
// }else if (age <= 12 && age >= 0){
//     console.log('Criança')
// }else {
//     console.log('Opção inexistente')
// }

//Exercício 3

// console.log('Exercicio que verifica se está aprovado, reprovado ou recuperação')

// let nota = Number (prompt ('Insira sua nota: '))

// if (nota <= 10 && nota >= 7){
//     console.log('Aprovado')
// } else if (nota < 7 && nota >= 4){
//     console.log('Recuperação')
// } else if (nota < 4 && nota >= 0){
//     console.log('Reprovado')
// }else {
//     console.log('Opção inexistente, coloque uma nota de 0 a 10')
// }

//Exercicio 4
// console.log('Exercicio para escolher 1 de 3 opções')

// let option = Number(prompt('Insira a opção desejada: (1= Sim, 2= Não e 3: Talvez)'))
// let resultado = 0


//     switch (option) {
//         case 1:
//             console.log('A opção selecionada foi "Sim"')
//             break;
//         case 2:
//             console.log('A opção selecionada foi "Não"')
//             break;
//         case 3:
//             console.log('A opção selecionada foi "Talvez"')
//             break;
//         default:
//             console.log('Opção inexistente')
//             break;
//     }

//Exercicio 5

// console.log('Exercicio de calculo de IMC e determina a categoria')

// let peso = Number(prompt('Insira o seu peso: '))
// let altura = Number(prompt('Insira a sua altura: '))
// let IMC

// IMC=peso/altura**2

// console.log('Seu IMC é ', IMC.toFixed(1))

// if (IMC >= 40){
//     console.log('Obesidade grau III')
// } else if (IMC <= 39.9 && IMC >= 35){
//     console.log('Obesidade grau II')
// } else if (IMC <= 34.9 && IMC >= 30){
//     console.log('Obesidade grau I')
// }else if (IMC <= 29.9 && IMC >= 25){
//     console.log('Sobrepeso')
// }else if (IMC <= 24.9 && IMC >= 18.5){
//     console.log('Peso Normal')
// }else if (IMC <18.5){
//     console.log('Abaixo do peso')
// }else {
//     console.log('Não tem essa opção')
// }

//Exercicio 6

// console.log('Exercicio que verifica se os lados formam um triangulo ou não, e caso seja um triangulo qual tipo do mesmo.')

// let ladoa = Number (prompt ('Insira o valor do lado 1: '))
// let ladob = Number (prompt ('Insira o valor do lado 2: '))
// let ladoc = Number (prompt ('Insira o valor do lado 3: '))

// if ((ladoa < ladob + ladoc)&&(ladob<ladoa+ladoc)&&(ladoc<ladoa+ladob)){
//     if (ladoa==ladob==ladoc) {
//         console.log('Triângulo equilátero: possui todos os lados iguais')
//     } else if((ladoa==ladob)||(ladoa==ladoc)||(ladob==ladoc)){
//         console.log('Triângulo isósceles: possui dois lados iguais')
//     } else{
//         console.log('Triângulo escaleno: possui todos os lados diferentes')
//     }
// } else {
//     console.log('Não forma um triângulo')
// }

//Exercicio 7

// console.log('Exercicio que calcula o valor total da compra de maças (mais de 12: R$0,25 cd, menos: R$0,30 cd)')

// let maca = Number (prompt ('Insira quantidade de maças da compra: '))


// if (maca>=12){
//     console.log(`O valor da compra de ${maca} maça(s) é de `, maca*0.25, ` reais`)
// } else if ((0 <= maca)&&(maca<= 11)){
//     console.log(`O valor da compra de ${maca} maça(s) é de `, maca*0.3, ` reais`)
// } else if(maca<0) {
//     console.log('Não existe essa quantidade (Número negativo)')
// }else{
//     console.log('Não existe essa quantidade (letra do alfabeto)')
// }

//Exercicio 8

// console.log('Exercicio que lê 2 valores e coloca em ordem crescente.')

// let num1 = Number (prompt ('Insira o valor 1: '))
// let num2 = Number (prompt ('Insira o valor 2: '))

// if ((num1 !== num2)){
//     if (num1<num2) {
//         console.log(`A ordem crescente dos valores é ${num1} - ${num2}`)
//     } else if(num2<num1){
//         console.log(`A ordem crescente dos valores é ${num2} - ${num1}`)
//     }
// } else {
//     console.log('Precisa ser valores diferentes')
// }

//Exercicio 9

// console.log('Exercicio de contagem regressiva 10 a 1')

// for (let i = 10; i > 0; i--){
//     console.log(`Contagem regressiva: ${i}`)
// }

//Exercicio 10

// console.log('Exercicio que lê um numero inteiro e escreve na tela 10x')

// let n1 = Number (prompt ('Insira número: '))

// for (let i = 1; i<= 10; i++){
//     console.log(`O número é ${n1} (repetido pela ${i} vez)`)
// }

//Exercicio 11

// console.log('Exercicio que lê 5 números e calcula a soma total')

// let soma = 0

// for (let i = 1; i<= 5; i++){
//     let n1 = Number (prompt (`Insira o número ${i}: `))
//     soma+=n1
// }

// console.log('A soma total é', soma)

//Exercicio 12

// console.log('Exercicio para exibir a tabuada do número fornecido')

// let n1 = Number (prompt ('Insira número para tabuada: '))

// console.log(`Tabela de tabuada do ${n1}`)

// for (let i = 0; i <= 10; i++){
//     console.log(`${n1} * ${i} =`, n1*i)
// }

//Exercicio 13

// console.log('Exercicio que recebe números decimais até que digite 0 para fazer a média aritmetica dos mesmos.')

// let num1
// let soma= 0
// let count=-1

//     do {
//         num1 = Number(prompt('Insira o número: '))
//         soma+=num1
//         count++
//     } while (num1 > 0);

//     console.log('A média aritimética dos números é ',soma/count)

//Exercicio 14

// console.log('Exercicio que calcula fatorial de um número')

// let num1 = Number (prompt ('Insira o número: '))
// let prod = 1

// while (num1> 0){
//     prod*=num1
//     num1 --
// }

// console.log('O fatorial do número é ', prod)

//Exercicio 15
// console.log('Exercicio que imprime a sequência de Fibonacci até o 10º termo')

// let count = 0
// let n1=1
// let n2=0
// let next=0

// for (count = 0; count< 10; count++){
//     console.log(next)
//     next=n1+n2
//     n1=n2
//     n2=next
// }