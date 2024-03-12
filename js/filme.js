export async function getFilmes(){
    const url = 'http://10.107.134.43:8080/v2/acme/filmes'
    const respose = await fetch(url)
    const data = await respose.json()
    return data.filmes

}

export async function getFilme(id){
    const url = `http://10.107.134.43:8080/v2/acme/filme/${id}`
    const respose = await fetch(url)
    const data = await respose.json()
    return data.filme[0]
}

export async function postFilme (filme) {
    const url = 'http://10.107.134.53:8080/v2/acmefilmes/filme' 
    const options = {
        method: 'POST',
        headers: {
            'Content-type': 'application/json'
        },
        body: JSON.stringify(filme),

    }

    const response = await fetch (url, options)

    return response.ok

}