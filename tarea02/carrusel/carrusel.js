const carruseljs = document.querySelector(".lista ")
let izquierda = carruseljs.scrollLeft - carruseljs.clientWidth
let intervalo = null
let paso = 1


const start = () =>{

    intervalo = setInterval(function () {
        carruseljs.scrollLeft = carruseljs.scrollLeft + paso
        
        if(carruseljs.scrollLeft === izquierda){
            paso = paso * -1
        }
        else if (carruseljs.scrollLeft === 0){
            paso = paso * -1
        }
    },10
    )    

}

const stop = () =>{
    clearInterval(intervalo)
}
carruseljs.addEventListener("mouseover", () =>{
    stop()
})
carruseljs.addEventListener("mouseout", ()=>{
    start()
})

start()
