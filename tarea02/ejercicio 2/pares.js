/* 
3 - Solicita un número e imprime todos los números pares e impares desde 1 hasta ese número con el mensaje "es par" o "es impar"
    si el número es 5 el resultado será:
        1 - es impar
        2 - es par
        3 - es impar
        4 - es par
        5 - es impar
*/

//variable

let num = parseInt(prompt("Escriba su numero: "))

//creamos el bucle
//for(inicio, finalizar, contar)

for(let i=1;i<=num;i++){
    //condicion para que sea par/impar
    if(i%2==0){
        console.log(`El numero ${i} es par`)
        document.write(`El numero ${i} es par<br>`)
    }
    else{
        console.log(`El numero ${i} es impar`)
        document.write(`El numero ${i} es Impar<br>`)
    }
}

