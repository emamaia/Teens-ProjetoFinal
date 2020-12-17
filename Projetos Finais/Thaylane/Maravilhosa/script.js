console.log("está funcionando?")

function exibeNome() {

    var nome = "Taylayne";

    alert(nome);
}

//condicional
function escreve() {
    var nome = prompt('Escreva seu nome:');
    var sobrenome = prompt('Escreva seu sobrenome:');
    if ((nome != 'Taylayne') || (sobrenome != 'Vieira')) {
        alert('Olá ' + nome + ' você não é a Taylayne Vieira!');
        return;
    } else {
        alert('Olá ' + nome + ' '+sobrenome+' seja bem vindo');
    }
}

function validaFormulario(){

if(document.getElementById("nome").value != "" && document.getElementById("mensagem").value != ""){

alert("Prontinho! sua mensagem foi enviado com sucesso")
}else{
alert("Por favor, preencha os campos nome e sua mensagem.")
}
}

//ligando o click no html com onClick
function cliquei(){
    event.preventDefault()
    botao.innerHTML = input.value
}

function exibirMensagem()
    {
        var data = new Date();
        alert(data.toString());
    }
