"use strict"

//Funciones

function saludar(nombre, edad){
    console.log('Hola: ', nombre);
    console.log('Edad: ', edad);
    let resultado = nombre + " tiene " + edad + " años";
    return resultado;
}

var mensaje = saludar("Carlos",37);
console.log(mensaje);