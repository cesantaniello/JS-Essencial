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
/*
function cocinar(...masIngredientes){
    console.log("masIngredientes", masIngredientes);
}

cocinar("Pollo","Tomate","Arroz","Frijoles","Pescado","Chile");
*/

//Parámetros SPREAD
/*
function cocinar(ingrediente1, ingrediente2, ingrediente3){
    console.log('Ingrediente 1: ', ingrediente1);
    console.log('Ingrediente 2: ', ingrediente2, );
    console.log('Ingrediente 3: ', ingrediente3, );
}

var ingredientesBase = ["Pollo","Tomate"];

cocinar(...ingredientesBase, "Arroz");
*/


//Parámetros SPREAD + REST

function cocinar(ingrediente1, ingrediente2, ingrediente3, ...otros){
    console.log('Ingrediente 1: ', ingrediente1);
    console.log('Ingrediente 2: ', ingrediente2);
    console.log('Ingrediente 3: ', ingrediente3);
    console.log('Otros: ', otros)
}

var ingredientesBase = ["Pollo","Tomate"];

cocinar(...ingredientesBase, "Arroz", "Pescado", "Chile");
