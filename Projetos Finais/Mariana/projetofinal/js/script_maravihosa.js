/*  console.log("Tá funcionano") */

/*  capturando os elementos que vão ser manipulados com o getElementById */
 
let recado_container = document.getElementById("recado_container")

/* let recado_mensagem_container = document.getElementById("recado_mensagem") */

let input_nome = document.getElementById("recado_input-nome")

let input_recado = document.getElementById("recado_input-recado")

let recado_botao = document.getElementById("recado_botao")


/* ************* ALERTA ************* */


/*  esses elementos que vão servir de alerta
para o usuário caso ele ainda precise preencher
alguma informação. 

A div container_alerta vai ficar
dentro da div recado_container e só vai ser exibida
se tiver alguma informação a ser preenchida. 

Quando o usuário preeencher
as informações que foram indicadas pelo alerta e apertar botão novamente,
o container_alerta é retirado de dentro do recado_container, não 
aparecendo mais na tela 

A variável alerta vai ficar dentro da div container_alerta
junto com a lista_erros 
*/

let container_alerta = document.createElement("div")

let alerta = document.createElement("p")

let lista_erros = document.createElement("ul")

/* estilizando a lista e o container */

container_alerta.classList.add('recado__form--alerta')

lista_erros.classList.add('recado__form--alerta_lista-erro')

/*  o alerta e a lista já são colocados dentro do container para que durante a 
verificação (se tiver algum campo em branco) precise apenas mudar o conteúdo.
Mas o próprio container_alerta só será colocado dentro do recado_container se o 
usuário apertar o botão. 

Se o usuário apertar o botão e não tiver faltando nenhuma
informação, então o container_alerta é colocado e retirado logo em seguida.
*/

container_alerta.appendChild(alerta)

container_alerta.appendChild(lista_erros)

/* criando variáveis que vão servir de li's para a lista_erro
Cada uma mostra o erro em um dos inputs */

let nome_erro = document.createElement("li")

let recado_erro = document.createElement("li")

lista_erros.appendChild(nome_erro)

lista_erros.appendChild(recado_erro)


/* criando arrays para poder usar junto com o laço de repetição */

let inputs = [input_recado, input_nome]

let erros_lis = [recado_erro, nome_erro]

let erros_lis_conteudo = ["Recado", "Nome"]


/* ************* RECADINHO ************* */


/* Criando o container maior para para serem colocados os recadinhos.
Mesmo que ele já esteja dentro do recado_container, ele não aparece 
na tela porque ainda é uma div vazia e sem estilo*/

let container_recado__form = document.createElement('div')

recado_container.appendChild(container_recado__form)



/* Colocando o botão pra esperar o clique acontecer */

recado_botao.addEventListener('click', function () {

    /* Prevenindo o comportamento padrão no navegador ao apertar um botão 
    que é recarregar a página */
    event.preventDefault()

    /* colocando o container_alerta já dentro do recado_container */

    recado_container.appendChild(container_alerta)


    /* Fazendo a verificação se não tem nenhum campo em branco. 
    se tiver, o container_alerta vai dizer o que precisa ser preenchido ainda
    e os inputs que estiverem vazios vão ser 'pintados' de vermelho */

    if (input_nome.value == "" || input_recado.value == "") {


        /* ************* ALERTA ************* */


        alerta.textContent = "Preencha as informações: "

        for (let i = 0; i <= inputs.length - 1; i++) {
            if (inputs[i].value == "") {
                inputs[i].classList.add('recado__form--input_erro')
                erros_lis[i].textContent = erros_lis_conteudo[i]
            }
            else {
                erros_lis[i].textContent = ""
                if (inputs[i].classList.contains("recado__form--input_erro"))
                    inputs[i].classList.remove('recado__form--input_erro')
            }
        }
    }

    /* Se os inputs não estiverem vazios (se tiverem passado pela verificação), o recadinho 
    vai ser criado, estilizado e exibido na tela.
    Também, o container alerta vai ser retirado de dentro do recado_container pra que não
    apareça mais para o usuário.
    Os inputs e a lista_erros são esvaziados e as classes que indicam erro são removidas*/

    else {

        /* ************* RECADINHO ************* */


        /* Criando a estrutura de cada recadinho  */

        let container_recado_individual = document.createElement("div")

        let titulo_recado = document.createElement("h4")
        let recado_mensagem = document.createElement("p")
        
        /* Preenchendo o recadinho com os valores de cada input */

        titulo_recado.textContent = input_nome.value
        recado_mensagem.textContent = input_recado.value

        /* Finalmente, colocando o conteúdo do recadinho dentro do container de cada um */

        container_recado_individual.appendChild(titulo_recado)
        container_recado_individual.appendChild(recado_mensagem)

        /* Estilizando o container individual e o container que é mãe de todos os recados */

        container_recado_individual.classList.add("recado__mensagem--individual")
        container_recado__form.classList.add("recado__mensagem")

        /* Colocando cada recadinho dentro do container dos recados */
        
        container_recado__form.appendChild(container_recado_individual)
    
  
        

        /* ************* ALERTA ************* */


        /* Tirando o container_alerta de dentro do recado_container 
        pra ele não aparecer mais na tela */
        
        recado_container.removeChild(container_alerta)
        
        /* Esvaziando a lista_erros */

        for (let i = 0; i <= erros_lis.length - 1; i++) {
            erros_lis[i].textContent = ""
        }

        /* Esvaziando os inputs */
        
        for (let i = 0; i <= inputs.length - 1; i++) {
            inputs[i].value = ""
        }

        /* Tirando a classe que indica erro dos inputs (se eles tiverem ela) */
        
        for (let i = 0; i <= inputs.length - 1; i++) {
            if (inputs[i].classList.contains('recado__form--input_erro')) {
                inputs[i].classList.remove('recado__form--input_erro')
            }
        }
    }
})