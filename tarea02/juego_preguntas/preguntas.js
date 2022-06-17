//Juego de preguntas , te responderá si acertaste y te pondra un puntaje
//Array bidimensional donde se guardarán las preguntas junto a sus respuestas correctas correspondientes...

let preguntas = [
    ["Cuánto es 3 elevado al cubo","27"],
    ["¿Qué color resulta al mezclar el azul con el amarillo?", "verde"],
    ["¿Cuántos lados tiene un cuadrado", "4"],
    ["¿Cuál es la capital de Peú?", "lima"],
    ["¿Cuál es el quinto planeta en el sistema solar?", "Júpiter"],
    ["¿Cuál es el río más largo del mundo?", "Río amazonas"],
    ["¿Cuál es le país más grande del mundo?", "Rusia"],
    ["¿Cuál es el país más poblado de la tierra?", "China"],
    ["¿Cuando empezó la primera Guerra Mundial", "1914"],
    ["¿Cuántos huesos tiene el cuerpo humano", "206"],
]

//Variable para el programa
let pregunta, respuesta
let formuladas = 0
let acertadas = 0

hazpregunta()

/*
	Se programa que al pulsarse el botón "Siguiente Pregunta" se compruebe si se ha acertado la pregunta, en cuyo caso, se incrementa en una unidad 'acertadas'.
	También se comprueba si ya se han realizado las 5 preguntas, en cuyo caso, se llama a 'muestraResultado()' que mostrará el resultado del juego y terminará el programa, de lo contrario, se formula una nueva pregunta.
*/

document.getElementById("boton").addEventListener("click", function(){
    var entrada = document.getElementById("dato").value
    //Se comparan las variables
    if(entrada == respuesta){
        acertadas++
    }
    //Cuántas se formularan
    if(formuladas < 10 ){
        hazpregunta()
    }
    else{
        mostrarresultado();
    }
})

//Formula una pregunta al usuario
function hazpregunta(){
    let e //variable auxiliar
    //se extrae una pregunta al azar del array
    e = preguntas.splice(numAleat(0, preguntas.length-1), 1);
    pregunta = e [0][0];
    respuesta = e [0][1];
    //se muestra la pregunta
    document.getElementById("pregunta").innerHTML=pregunta
    //se borra lo escrito anteriormente por el usuario
    document.getElementById("dato").value=""
    //la maquina contara cada pregunta que se realize
    formuladas++
}

function mostrarresultado(){
    let resultado // variable auxiliar

    switch (acertadas) {
        case 0:
            resultado = "Debes estudiar más"
            break;

        case 3:
            resultado = "Acertaste poco"

        case 5:
            resultado = "Regular, Tú puedes"

        case 7:
            resultado = "Vas bien muchacho, vas bien"

        default:
            resultado = "Exelente, buen trabajo"
            break;
    }
    document.getElementById("salida").innerHTML=resultado
}

//Devuelve un número aleatorio entero entre "min" y "max" (ambos inclusive)
function numAleat(max,min){
    return Math.floor( Math.random() * (max - min + 1) ) + min;
}
