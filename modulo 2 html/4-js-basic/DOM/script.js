let titulo = document.getElementById('titulo')
console.log(titulo.textContent)

titulo.textContent="Aula de JS básico"
titulo.innerHTML="Mudei o conteúdo do titulo novamente"
titulo.style.color = "blue"

let botao = document.getElementById(botao)

botao.addEventListener('click', () => {
    alert('Voce clicou no botao!')
})

let novoParagrafo = document.createElement('p')
novoParagrafo.innerHTML = "Este é um novo paragrafo criado via JS"

document.body.appendChild(novoParagrafo)

let paragrafo = document.querySelector('.paragrafo')

paragrafo.remove()