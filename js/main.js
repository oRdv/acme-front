import {getFilmes, getFilme, postFilme} from "./filme.js"

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
            // nome:'Tamires Fernandes'
        },
        {
            // nome:'AAAAAAAA'

        }
    ]
    

    filmes.forEach(filme =>{
        const card = preencherCards(filme)
        container.appendChild(card)
    })
}

const filme = {
    "nome": "O Segredo do Vale",
    "sinopse":"Um drama emocionante...",
    "duracao":"02:35:00",
    "data_lancamento":"2022-08-25",
    "data_relancamento": null,
    "foto_capa":"https://exemplo.com/foto_vale.jpg",
    "valor_unitario": 129
}

async function teste() {
     postFilme(filme)

}

// preencherContainer()

// console.table(await getFilme(2))