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