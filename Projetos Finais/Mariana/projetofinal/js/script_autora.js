/* console.log("Tá funcionano") */

/*  capturando os elementos que vão ser manipulados com o getElementById */
 
let contato_container = document.getElementById("contato_container")

let contato_nome = document.getElementById("contato_input-nome")

let contato_email = document.getElementById("contato_input-email")

let contato_mensagem = document.getElementById("contato_input-mensagem")

let contato_botao = document.getElementById("contato_botao")


/* ************* ALERTA ************* */


/*  esses elementos que vão servir de alerta
para o usuário caso ele ainda precise preencher
alguma informação.

A div container_alerta vai ficar
dentro da div contato_container e vai exibir pra o usuário 
se falta preencher alguma informação ou, quando o usuário preencher 
os inputs, ela exibe um agradecimento. 

A variável alerta e a lista_erros vão ficar dentro da div container_alerta.
*/

let container_alerta = document.createElement("div")

let alerta = document.createElement("p")

let lista_erros = document.createElement("ul")

/* estilizando a lista e o container com as classes que já
foram deixadas prontas pra eles no css*/

container_alerta.classList.add('secao_contato__alerta')

lista_erros.classList.add('secao_contato__alerta--lista-erro')

/*  o alerta e a lista já são colocados dentro do container para que durante a 
verificação (se tiver algum campo em branco) precise apenas mudar o conteúdo 
de cada um deles
*/

container_alerta.appendChild(alerta)

container_alerta.appendChild(lista_erros)

/* criando variáveis que vão servir de li's para a lista_erro
Cada uma mostra o erro eu um dos inputs */

let nome_erro = document.createElement("li")

let email_erro = document.createElement("li")

let mensagem_erro = document.createElement("li")

/* Já colocando as li's dentro da lista_erros, finalizando toda
a estrutura do container_alerta  */

lista_erros.appendChild(nome_erro)

lista_erros.appendChild(email_erro)

lista_erros.appendChild(mensagem_erro)


/* criando arrays para poder usar junto com o laço de repetição */

let inputs = [contato_nome, contato_email, contato_mensagem]

let erros_lis = [nome_erro, email_erro, mensagem_erro]

let erros_lis_conteudo = ["Nome", "Email", "Mensagem"]


/* colocando o botão pra esperar o clique acontecer */

contato_botao.addEventListener('click', function () {

    /* Prevenindo o comportamento padrão no navegador ao apertar um botão 
    que é recarregar a página */

    event.preventDefault()
    
    
    /* colocando o container_alerta dentro do contato_container pra que 
    ele exiba se está faltando algum campo ser preenchido ou simplesmente
    agradecer pelo contato */

    contato_container.appendChild(container_alerta)
    

    /* Fazendo a verificação se não tem nenhum campo em branco. 
    se tiver, o container_alerta vai dizer o que precisa ser preenchido ainda
    e os inputs que estiverem vazios vão ser 'pintados' de vermelho */

    if (contato_nome.value == "" || contato_email.value == "" || contato_mensagem.value == "") {

        alerta.textContent = "Preencha as informações: "

        for (let i = 0; i <= inputs.length - 1; i++) {
            if (inputs[i].value == "") {
                inputs[i].classList.add('secao_contato__form--input_erro')
                erros_lis[i].textContent = erros_lis_conteudo[i]
            }
            else {
                erros_lis[i].textContent = ""
                if (inputs[i].classList.contains("secao_contato__form--input_erro"))
                inputs[i].classList.remove('secao_contato__form--input_erro')
            }
        }
    }

    /* Se os inputs não estiverem vazios (se tiverem passado pela verificação, 
    o container alerta vai ser retirado de dentro do recado_container pra que não
    apareça mais para o usuário.
    Os inputs e a lista_erros são esvaziados e as classes que indicam erro são removidas*/

    else {


        /* ************* ALERTA ************* */


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
            if (inputs[i].classList.contains('secao_contato__form--input_erro')) {
                inputs[i].classList.remove('secao_contato__form--input_erro')
            }
        }

        /* Só dizendo pra o usuário que deu certo o contato */

        alerta.textContent = "Muito obrigada pelo contato!"
    }
})