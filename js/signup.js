'use strict'

const bttLogin = document.getElementById('login')

async function usrSignup() {
    const inputEmail = document.getElementById('email').value
    const inputPassword = document.getElementById('password').value

    if(inputEmail === '' || inputPassword === '') {
        alert('ERRO! É necessário demonstrrar todos os valores.')
        return null
    } else {

        try {
            const _data = {
                id: "",
                email: inputEmail,
                senha: inputPassword
            }

            const _url = 'http://localhost:5080/usuarios'

            const _options = {
                method: 'post',
                body: JSON.stringify(_data),
                headers: { "Content-type": "application/json; charset=UTF-8" },
                mode: 'cors',
                redirect: 'follow',
                cache: 'default'
            }

            fetch(_url, _options)
            window.location.href = '..index.html'
            alert('Os dados foram cadastrados com sucesso!')

        } catch(error) {
            alert('ERRO! ao cadastrar os dados.')
        }
    }
}

window.addEventListener ('click', usrSignup)