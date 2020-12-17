console.log("está funcionando mestra")


const formulario = document.querySelector('.div__form--main') // existente div__form--main 109 *FEITO
const divTexto = document.querySelector('.texto__exibido') /// continua a mesma 120 *OK

formulario.addEventListener('submit', function (evento) {
    evento.preventDefault()

    let texto = document.getElementById('recado__Input') //id existente 111 - RECADO 
    let valorTexto = texto.value

    let nome = document.getElementById('nome__Input')  //id existente 113 -NOME
    let valorNome = nome.value

    let novaLinha = document.createElement('div') 
    divTexto.appendChild(novaLinha)
    novaLinha.classList.add('nova__linha')

    const novoTexto = document.createElement('p')
    novaLinha.appendChild(novoTexto)
    novoTexto.textContent = valorTexto
    novoTexto.classList.add('novo__texto')

    const novoNome = document.createElement('p')
    novaLinha.appendChild(novoNome)
    novoNome.textContent = valorNome
    novoNome.classList.add('novo__nome')

    formulario.reset()
})
