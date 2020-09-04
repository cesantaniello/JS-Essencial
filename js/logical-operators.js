"use strict"
//Operadores lógicos

var datoA = 10;
var datoB = 20;

//OPERADOR Y
var and = (datoA > 10 && datoB > 10);
console.log('El resultado de la evaluación AND es: ', + and);

//OPERADOR O
var or = (datoA > 10 || datoB > 10);
console.log('El resultado de la evaluación OR es: ', + or);

//OPERADOR NOT
var not = !(datoA > 10);
console.log('El resultado de la evaluación NOT es: ', + not);
