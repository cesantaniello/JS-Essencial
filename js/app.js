"use strict" //El modo estricto siempre debe estar en la línea 1

var nombre = "Carlos"; //var es usada como variable global

console.log(nombre);

function saludo(){
    let nombre = "Eduardo"; //let es usado dentro del scope de la función
    console.log(nombre);

    let edad = 37;
    console.log(edad);
};

console.log(edad);

saludo();