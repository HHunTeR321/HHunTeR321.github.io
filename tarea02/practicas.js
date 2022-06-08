let figure = prompt("Escribe el nombre de la figura que quieres resolver: ")

let base;
let base_mayor;
let base_menor;
let diagonal;
let diagonal_mayor;
let diagonal_menor;
let perimetro;
let lado;
let apotema;
let area;
let altura;
let radio;
let circunferencia
let diametro

switch(figure){
    case "cuadrado": 
    case "CUADRADO":

    lado = prompt("Dime un valor del lado del cuadrado: ")

    document.write(`<h1> El area del cuadrado es ${area =lado*lado*lado*lado}</h1><br>`)

    document.write(`<h1>El perimetro del cuadrado es: ${perimetro = parseInt(lado)+ parseInt(lado)+ parseInt(lado)+ parseInt(lado)}</h1>`)

    break
    

    case "rectangulo":
    case "RECTANGULO":
        base = prompt("dime un valor de base: ")

        altura = prompt("dime un valor de altura")

        document.write(`<h1>El area del rectangulo es: ${area= base*altura}</h1><br>`)

        document.write(`<h1>El perimetro del rectangulo es: ${perimetro = parseInt(base)+parseInt(base)+parseInt(altura)+parseInt(altura)}</h1>`)

        break
        
    case "triangulo":
    case"TRIANGULO":
        base = prompt("ingresa la base del triangulo: ")

        altura = prompt("ingresa la altura del triangulo: ")

        document.write(`<h1>El area del triangulo es: ${(area = base*altura)/2}</h1><br>`)


        document.write(`<h1>El perimetro del triangulo es: ${perimetro = parseInt(base)+ parseInt(base)+ parseInt(base)}</h1>`)

        break

    case "rombo": 
    case "ROMBO":
        diagonal_mayor= prompt("Ingresar diagonal mayor: ")

        diagonal_menor= prompt("Ingresar diagonal menor: ")
        lado= prompt("Ingresar lado: ")

        document.write(`<h1>El area del rombo es: ${area= diagonal_mayor*diagonal_menor}</h1><br>`)

        document.write(`<h1>El perimetro del rombo es: ${perimetro = parseInt(lado)+ parseInt(lado)+ parseInt(lado)+ parseInt(lado)}</h1>`)
        break
    

    case "romboide":
    case "ROMBOIDE":

        base = prompt("dime un valor de base: ")

        altura = prompt("dime un valor de altura")

        document.write(`<h1>El area del romboide es: ${area= base*altura}</h1><br>`)

        document.write(`<h1>El perimetro del Romboide es: ${perimetro = parseInt(base)+parseInt(base)+parseInt(altura)+parseInt(altura)}</h1>`)
        break
        
    case "trapecio":
    case "TRAPECIO":

            base_mayor = prompt("dime un valor de base mayor : ")

            base_menor = prompt("dime un valor de base menor: ")
    
            altura = prompt("dime un valor de altura")

            lado = prompt("dime los lados: ")
    
            document.write(`<h1>El area del trapecio es: ${area=altura*(base_mayor*base_menor)/2}</h1><br>`)
    
            document.write(`<h1>El perimetro del Romboide es: ${perimetro = parseInt(base_mayor)+parseInt(base_menor)+parseInt(lado)+parseInt(lado)}</h1>`)
            break
    case "circulo": 
    case "CIRCULO":
        
            radio = prompt("Dime un valor del radio del circulo: ")
            diametro= prompt("dime un valor de diametro del circulo: ")
            
            document.write(`<h1>El area del Circulo es ${area =Math.PI*Math.pow(radio,2)}</h1><br>`)
        
            document.write(`<h1>La circunferencia del circulo es: ${circunferencia=Math.PI*diametro}</h1>`)
            break 

    case "poligono":
    case "POLIGONO": 

        lado = prompt("ingrese un lado del poligono: ")
        
        apotema = prompt("ingrese el valor de la apotema")

        document.write(`<h1>el perimetro del poligno es: ${perimetro = lado*5}</h1><br>`)

        document.write(`<h1>El area del poligono es: ${area = (perimetro*apotema)/2}</h1>`)
        break

    default: document.write("<h1>porfavor ingresar datos validos</h1>")
}