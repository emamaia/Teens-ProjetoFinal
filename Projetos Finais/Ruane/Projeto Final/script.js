console.log("Está funcionando")

/* Capturar os elementos que a gente vai usar do HTML */

let form = document.getElementById('divForm')

let inputNome = document.getElementById('nomeInput')

let inputRecado = document.getElementById('textoInput')

let botao = document.getElementById('formBotao')



/* Colocando o botão pra esperar o clique acontecer
Quando acontecer, ele coloca o recadinho na tela */

botao.addEventListener('click', function(){

    /* Avisando que o recadinho foi postado */

    alert('Seu recadinho foi postado!')
    

    /* criando os lementos que vão formar o recadinho */
    
    let divRecadinho = document.createElement('div')
    
    let tituloRecadinho = document.createElement('h4')
    
    let recadinho = document.createElement('p')
    

    /* preenchendo o recadinho com os valores dos inputs */

    tituloRecadinho.textContent = inputNome.value

    recadinho.textContent = inputRecado.value


    /* colocando o titulo do recadinho e o conteúdo dentro da
    divRecadinho */    

    divRecadinho.appendChild(tituloRecadinho)

    divRecadinho.appendChild(recadinho)


    /* Colcando a divRecadinho dentro do form pra poder aparecer
    na tela */

    form.appendChild(divRecadinho)


})

