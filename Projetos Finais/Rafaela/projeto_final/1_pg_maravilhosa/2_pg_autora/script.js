let inputNome = document.getElementById("inputNome")
let inputEmail = document.getElementById("inputEmail")
let botao = document.getElementById("botao")

console.log(inputNome)
console.log(inputEmail)
console.log(botao)

botao.addEventListener('click', function(){
    event.preventDefault()
    alert(`Obrigada por entrar em contato, ${inputNome.value}! Enviaremos uma resposta em breve, fique atento ao seu e-mail ${inputEmail.value}.`)
})