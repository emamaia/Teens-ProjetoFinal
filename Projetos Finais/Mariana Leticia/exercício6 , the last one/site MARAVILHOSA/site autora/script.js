// //pegar o id

// let botao2 = document.getElementById("botao2")

// botao2.addEventListener("click", function(){
//     event.preventDefault()
//     //declarar variaveis
    
//     let nome = document.getElementById("nome")

//     let email = document.getElementById("email")

//     let mensagem = document.getElementById("mensagem")

//     //criar p

//     let contato = document.createElement("p")

//     //coloquei conteúdo dentro

//     contato.textContent = `Olá ${nome.innerHTML = nome.value}, a partir do seu email ${email.innerHTML = email.value}, foi mandada a mensagem "${mensagem.innerHTML = mensagem.value}" com sucesso! `

//     container.appendChild(contato)

//     contato.style.width = "500px"

// })


//isso ai em cima foi porque eu pensava que era para emitir um recadinho então fiquei com dó de apagar


console.log("eai")
let nome = document.getElementById("nome")

let email = document.getElementById("email")

console.log(nome, email)

function cliquei(){
    event.preventDefault()
    alert(`Olá ${nome.innerHTML = nome.value}, seu recado foi enviado com sucesso!`)
}