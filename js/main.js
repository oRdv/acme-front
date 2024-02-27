import {getFilmes, getFilme} from "./filme.js"

function preencherCards(filme){
    const card = document.createElement('div')
    const titulo = document.createElement('h2')
    titulo.textContent = filme.nome

    const valor = document.createElement('button')
    valor.textContent = filme.valor_unitario

    card.append(titulo, valor)
    return card
}

async function preencherContainer(){
    const container = document.querySelector('body')

    const filmes = [
        {
            nome:'Tamires Fernandes'
        },
        {
            nome:'AAAAAAAA'

        }
    ]
    

    filmes.forEach(filme =>{
        const card = preencherCards(filme)
        container.appendChild(card)
    })
}

preencherContainer()

console.table(await getFilme(2))