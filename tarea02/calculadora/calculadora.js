//Cargar el evento en una ventana
// => es una función alternativa
window.addEventListener("load",() =>{
    //Busco los botones y el resultado
    const botones = document.getElementsByClassName("boton")

    const result = document.querySelector(".resultado")

    const botonlista = Array.from(botones)

    botonlista.forEach((boton) =>{
        boton.addEventListener("click", () =>{
            calculadora(boton, result)
        })
    })
})

function calculadora(boton,result){
    switch (boton.innerHTML) {
        case "C":
            // Se borrará todo los números
            borrar(result)
            break;

        case "=":
            //Se calculará la fórmula
            calcular(result)
            break;

        default:
            //Funcionará con los botones y el resultado
            actualizar(result,boton)
            break;
    }
}

function calcular(result){
    //evalúa un código JS representado como una cadena de caracteres (string)
    result.innerHTML = eval(result.innerHTML)
}

function borrar(result){
    if(result.innerHTML !=0){
        result.innerHTML = 0
    }
}

function actualizar(result,boton){
    if(result.innerHTML == 0){
        result.innerHTML = " "
    }

    result.innerHTML += boton.innerHTML
}

