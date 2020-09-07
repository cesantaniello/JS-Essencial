"use strict"
//Condicionales

//If-Else-If

var datoA = 10;
var datoB = 20;
var resultado = "Sin datos";

if (datoA > datoB){
    resultado = "La primera evaluación se cumplió";
}else if (datoA == datoB){
    resultado = "La segunda evaluación se cumplió";
}else{
    resultado = "No se cumplió ninguna evaluación";
}

console.log("El resultado de la evaluación if-else-if es: ", resultado);