// Juegos de números aleatorios del 01 al 10
// aleatorios: math.random() 0 a 09
//Math.ceil --> Redondear el número
var numero = Math.ceil(Math.random()*10);

//Programar el manejador de eventos con el botón click
document.getElementById("boton").addEventListener("click",function(){
    //Obtener la entrada del usuario
    var dato = document.getElementById("numero").value

    //Comprobamos si hemos acertado
    if(numero == dato){
        alert("EXCELENTE, Acertaste el número")
        location.reload()//Se volverá a cargar la pregunta
    }
    else{
        alert("QUE PENA, el número era " + numero + "\n Pulsa el botón ACEPTAR para volver a jugar")
        location.reload()
    }
})