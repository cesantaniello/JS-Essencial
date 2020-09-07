"use strict"

//Funciones
/*
function saludar(nombre, edad){
    console.log('Hola: ', nombre);
    console.log('Edad: ', edad);
    let resultado = nombre + " tiene " + edad + " años";
    return resultado;
}

var mensaje = saludar("Carlos",37);
console.log(mensaje);
*/

/*
//Inicializar parámetros
function contar(cantidad=20){
    console.log('Total: ', cantidad);
}

contar(100);
*/

//Parámetros REST

function cocinar(...masIngredientes){
    console.log("masIngredientes", masIngredientes);
}

cocinar("Pollo","Tomate","Arroz","Frijoles","Pescado","Chile");