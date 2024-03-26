'use strict'

const bttLogin = document.getElementById('login')

async function loginValid() {
    const inputEmail = document.getElementById('email')
    const inputPassword = document.getElementById('password')

    let userStatus = false

    const getUser = async() => {
        const url = `http://localhost:5080/usuarios`
        try{
            const response = await fetch(url)
            const usuarios = await response.json()
            return usuarios

        }catch (error){
            alert('Aconteceram erros ao solicitar login.')
            return null
        }
    }

    const usuarios = await getUser()

    usuarios.forEach(function (user) {
        if(user.email === inputEmail && user.senha === inputPassword) {
            userStatus = true
            localStorage.setItem('userId', user.id)
            window.location.href = './pages/login.html'
            return
        }
    })

    if(!userStatus) {
        alert('Credenciais inseridas são inválidas. Tente novamente.')
    }
}

bttLogin.addEventListener('click', loginValid)