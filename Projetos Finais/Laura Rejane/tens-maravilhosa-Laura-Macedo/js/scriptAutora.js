

function cliquei(){
    event.preventDefault()
    let nome = document.getElementById('input__nome')
    let str = `Olá ${nome.value}! Obrigada pelo contato, assim que possível vou responder seu email.`
    alert(str)
    console.log ('Deu certo migah. comemora!')

}
