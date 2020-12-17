console.log("está funcionando?")

function validaFormulario(){

if(document.getElementById("nome").value != "" && document.getElementById("mensagem").value != ""){

alert("Prontinho! sua mensagem foi enviado com sucesso")
}else{
alert("Por favor, preencha os campos nome e sua mensagem.")
}
}
