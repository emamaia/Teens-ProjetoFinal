let div = document.getElementById('div')

let inputNome = document.getElementById('inputNome')

let inputMensagem = document.getElementById('inputMensagem')

let inputEmail = document.getElementById ('inputEmail')

let botao = document.getElementById('formButton')


let alerta = document.createElement('p')


div.appendChild(alerta)


botao.addEventListener('click',function(){
    event.preventDefault ()

    alerta.textContent = `Hey, ${inputNome.value} sua mensagem "${inputMensagem.value}" 
    foi registrada com sucesso com o email ${inputEmail.value}`
})
