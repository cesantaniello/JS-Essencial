"use strict"
//Operadores de concatenación

var datoA = 10;
var datoB = 20;

var nombre = "Carlos";
var apellido = "Santaniello";

//CONCATENACIÓN DE NÚMEROS
var concatNumeros = datoA + datoB;
console.log("Los números "+datoA+" y "+datoB+" usados como números concatenados hace una suma igual a: ", concatNumeros);

////CONCATENACIÓN DE CADENAS DE TEXTO
var concatTexto = nombre +" "+ apellido;
console.log("Los textos "+ nombre +" y "+ apellido +" se unen para formar: ", concatTexto);

////CONCATENACIÓN DE NÚMEROS COMO TEXTO
var concatNumComoTxt = "2" + "8";
console.log("Los números 2 y 8 se unen para formar: ", concatNumComoTxt)

////CONCATENACIÓN DE TEXTO Y NÚMERO
var concatTxtNum = datoA + "8";
console.log("El número "+datoA+"usado como número y 8 se unen para formar: ", concatTxtNum);