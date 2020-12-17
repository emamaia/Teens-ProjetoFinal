// const formulario = document.querySelector('.form__exemplo')
// const divTexto = document.querySelector('.texto__exibido')

// formulario.addEventListener('submit', function (evento) {
//     evento.preventDefault()

//     let texto = document.getElementById('textoInput')
//     let valorTexto = texto.value

//     let nome = document.getElementById('nomeInput')
//     let valorNome = nome.value

//     let novaLinha = document.createElement('div')
//     divTexto.appendChild(novaLinha)
//     novaLinha.classList.add('nova__linha')

//     const novoTexto = document.createElement('p')
//     novaLinha.appendChild(novoTexto)
//     novoTexto.textContent = valorTexto
//     novoTexto.classList.add('novo__texto')

//     const novoNome = document.createElement('p')
//     novaLinha.appendChild(novoNome)
//     novoNome.textContent = valorNome
//     novoNome.classList.add('novo__nome')

//     formulario.reset()
// })

let botao2 = document.getElementById("botao2")

botao2.addEventListener('click', function(){
    event.preventDefault()
    let recado = document.getElementById("recado")

    let nome = document.getElementById("nome")


    let mensagem = document.createElement("p")

    mensagem.textContent = `Olá ${nome.innerHTML = nome.value}, seu recado "${recado.innerHTML = recado.value}" foi enviado com sucesso!`

    container.appendChild(mensagem)
    
    mensagem.style.width = "500px"

    mensagem.style.border = "dashed"

    mensagem.style.borderColor = "pink"

    mensagem.style.padding = "20px"

    mensagem.style.margin = "20px 30% 20px 40%"

    
})
































