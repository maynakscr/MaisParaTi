// let serie = {
//     nome: "The boys",
//     genero: ["Ação, Paródia, Heróis"],
//     nrTemporadas: 4,
//     status: "Em andamento",
//     classificacao: 18,
//     nrEpisodios:{
//         temp1: 10,
//         temp2: 10,
//         temp3: 50
//     },

//     mostrarCaracteristicas: function() {
//         return `O nome da série é: ${this.nome} e sua classificação é + ${this.classificacao}`
//     }
// }

// console.log(serie.mostrarCaracteristicas())


// let livro = {
//     nome: "Senhor dos anéis",
//     autor:"J. R. R. Tolkien",
//     genero: ["Ficção, Lit Estrangeira"],
//     nrPaginas: 1200,
//     tipoDeCapa: "Brochura",
//     dimensão: ["15.5 x 6.5 x 23 cm"],
    
//     mostrarCaracteristicas: function() {
//         return `O nome da série é: ${this.nome} e sua classificação é + ${this.classificacao}`
//     }
// }

// let motor = "1000"
// let nome = "bmw"
// let tipo = "esportiva"

// let moto ={
// nome: nome,
// tipo: tipo,
// motor: motor,
// }
// console.log (moto)

// função construtora
// function computador (processador, gpu, ram, armazenamento){
// this.processador =processador
// this.gpu = gpu
// this.ram = ram
// this.armazenamento=armazenamento

// this.ligar = function (){
//     console.log(`O ${this.processador} está funcionando`)
// }   

// this.mostrarEspecificacao = function(){
//     return `
//     processador:${this.processador}
//     gpu: ${this.gpu}
//     ram: ${this.ram}
//     armazenamento: ${this.armazenamento}`
// }

// }

// let pc = new computador("i9","RTX4090", "16GB", "500GB SSD")
// console.log(pc.mostrarEspecificacao())


// //design pattern

// function jogos (titulo, genero, anoLancamento, empresa, jogar){
//     return{
//         titulo,
//         genero,
//         anoLancamento,
//         empresa,
//         jogar
//     }
// }
// let jogo1 = jogos ("Final Fantasy","RPG", "1997", "Square Soft", ()=> console.log('jogando'))


// for in, for off, for each

// let carro = {
    //key: value (por isso que no for coloca key)
    // modelo: "bugatti",
    // ano: 2010,
    // cor:"Laranja"
//}
//for in para interar as propriedades do objeto
// for( let key in carro){
//     console.log(`${key}:${carro[key]}`)
// }

//for of trabalha ccom qualquer estrutura de dados que seja *interavel*, acessa o item diretamente, arrays mais simples.

// const jogadores = ["Pelé", "CR7", "R9"]

// for(let jogador of jogadores){
//     console.log(jogador)
// }

//for(let jogos of jogo1){}// Não funciona
// for(let jogos of Object.keys(jogos1)){
//     console.log(jogo1[jogos])
// }
