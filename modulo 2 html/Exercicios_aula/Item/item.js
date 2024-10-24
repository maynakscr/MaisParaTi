let titulo = document.getElementById('titulo')

let adicionar = document.getElementById('adicionar')

let remover = document.getElementById('remover')

let lista = document.getElementById('lista')

function adicionarItem(){
    let novoItem = document.createElement('li')

    novoItem.innerHTML= `Item ${lista.children.length}`

    lista.appendChild(novoItem)

    titulo.innerHTML = "Novo item adicionado"
    titulo.style.color='green'
}

function removerItem(){
    if(lista.children.length > 0)
{
    lista.removeChild(lista.lastElementChild)
    titulo.innerHTML = "Item removido"
    titulo.style.color='red'
}else{
    titulo.innerHTML="Não há mais itens para remover"
    titulo.style.color='gray'
}
}

adicionar.addEventListener('click', adicionarItem)
remover.addEventListener('click', removerItem)