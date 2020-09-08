"use strict"

//Eventos del mouse
/*
const boton = document.querySelector('.boton');

boton.addEventListener('click', function(){
    console.log("El botón se ha pulsado");
})

boton.addEventListener('mouseover', function(){
    console.log("El mouse está sobre el botón");
})

boton.addEventListener('mouseout', function(){
    console.log("El mouse está fuera del botón");
})
*/

//Eventos del teclado
/*
window.addEventListener("keydown", function(event){
    console.log('Pulsando tecla');
    console.log(String.fromCharCode(event.keyCode));//El evento keyCode muestra la tecla pulsada en código ASCII
})                                                  //La función String.fromCharCode transforma el código ASCII a tecla visual                                    

window.addEventListener("keypress", function(event){
    console.log('Tecla pulsada');
})

window.addEventListener("keyup", function(event){
    console.log('Tecla liberada');
})
*/

//Carga del documento
/*
window.addEventListener('load', function(){
    console.log('El contenido de la ventana se ha cargado'); //Muestra un mensaje cuando se ha cargado un documento
})
*/

//Temporizadores

//setInterval

function setColor(){
    var pagina = document.body;
    pagina.style.backgroundColor = pagina.style.backgroundColor == "blue" ? "green" : "blue";
}

//setTimeout

var temporizador = setInterval(function(){
    setColor();
}, 2000);

function stopChangeColor(){
    clearInterval(temporizador)
}