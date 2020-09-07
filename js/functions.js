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
/*
function cocinar(ingrediente1, ingrediente2, ingrediente3, ...otros){
    console.log('Ingrediente 1: ', ingrediente1);
    console.log('Ingrediente 2: ', ingrediente2);
    console.log('Ingrediente 3: ', ingrediente3);
    console.log('Otros: ', otros)
}

var ingredientesBase = ["Pollo","Tomate"];

cocinar(...ingredientesBase, "Arroz", "Pescado", "Chile");
*/

//Funciones anónimas

//Esta función anónima necesita tener commentado el "use strict" para funcionar
/*
(   
    function(){
        var mensaje = "Hola de nuevo";
        console.log(mensaje);
    }
)()
*/

//Función anónima ES6
var saludar = function(nombre){
    let mensaje = "Hola, " + nombre;
    return mensaje;
}
