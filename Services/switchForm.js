document.addEventListener("DOMContentLoaded", () => {

    const registerForm = document.querySelector('#formRegister')
    const loginForm = document.querySelector('#formLogin')
    loginForm.style.display = 'none'

    document.querySelector('#alreadyRegistered').addEventListener("click", (e) => {
        e.preventDefault()
        registerForm.style.display = 'none'
        loginForm.style.display = 'flex'

    });

    document.querySelector('#notRegistered').addEventListener("click", (e) => {
        e.preventDefault()
        registerForm.style.display = 'flex'
        loginForm.style.display = 'none'
    });



})