"use strict"
//Condicionales

//Anidado
/*
var datoA = 110;
var datoB = 20;
var datoC = 5;
var resultado = "Sin datos";

if (datoA > datoB){
    resultado = "La condición se cumplió";

    if (datoC < datoB){
        if (datoC < datoB){
        resultado = "Evaluación anidada verdadera";
        }else{
            resultado = "No se cumplió la evaluación anidada";
        }
    }else{
        resultado = "No se cumplió la evaluación anidada";
    }
}else{
    resultado = "No se cumplió la evaluación";
}    

console.log("El resultado de la evaluación anidada es: ", resultado);
*/
//Switch con strings

var producto = "Radio";
var resultado = "";

switch (producto) {
    case "TV":
        resultado = "Se eligió la TV";
        break;
    case "Radio":
        resultado = "Se eligió el Radio";
        break;
    case "Teléfono":
        resultado = "Se eligió el Teléfono";
        break;
    default:
        resultado = "No se eligió ningún producto";
        break;
}

console.log("El resultado de la evaluación con texto es: ", resultado);