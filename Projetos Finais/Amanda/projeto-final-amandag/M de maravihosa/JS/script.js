let input1 = document.querySelector("#recado_input__nome")

let input2 = document.querySelector("#recado_input__recadinho")

let button = document.querySelector('#recado_input__botao')



button.addEventListener("click",function (){


    console.log(input1.value, input2.value)
    alert(`Ei, ${input1.value} o recadinho "${input2.value}" será entregue para a Audrey assim que posível!`)

    
})
