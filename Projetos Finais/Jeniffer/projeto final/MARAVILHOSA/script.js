console.log("Está funcionando")

let formulario = document.querySelector('.form__exemplo')

let divTexto = document.querySelector('.texto__exibido')


formulario.addEventListener('submit', function (evento) {

    evento.preventDefault()

    let texto = document.getElementById('textoInput')
    let valorTexto = texto.value

    let nome = document.getElementById('nomeInput')
    let valorNome = nome.value

    console.log(valorTexto)
    console.log('oi')

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

