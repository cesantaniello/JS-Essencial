"use strict"
/*
var pais = 'Mexico';

var comida = new String("Ceviche");
*/

//Medir una cadena de texto
/*
var mensaje = "Estoy aprendiendo JavaScript";

console.log("La cadena de texto tiene: "+mensaje.length+" letras");
*/

//Métodos de búsqueda

//var mensaje = "Estoy aprendiendo JavaScript y estoy aprendiendo mucho";
//var resultado;

//indexOf   Busca el primer índice del string
//resultado = mensaje.indexOf("aprendiendo");

//lastIndexOf   Busca el último índice del string
//resultado = mensaje.lastIndexOf("aprendiendo");

//search:
//resultado = mensaje.search("aprendiendo");

//search | expresión regular: Busca con expresión regular la posición del string dado. 
                            //Si arroja como resultado -1 es porque no lo ha conseguido
//resultado = mensaje.search(/ja/i);


//Métodos de búsqueda

//match
//resultado = mensaje.match(/aprendiendo/gi);

//substr:
//resultado = mensaje.substr(6,11);

//substring:
//resultado = mensaje.substring(6,17);

//charAt
//resultado = mensaje.charAt(0);


//Métodos de generación, reemplazo y separación
/*
var mensaje = "Estoy aprendiendo JavaScript";
var mensaje2 = " y programación";
var total = 123456;

var resultado;
*/
//repeat
//resultado = mensaje.repeat(3);

//replace
//resultado = mensaje.replace("JavaScript", "a programar");

//slice
//resultado = mensaje.slice(6);
//resultado = mensaje.slice(6, 11);

//split
//resultado = mensaje.split(" ");

//trim
//resultado = mensaje.trim();


//Métodos de transformación

//resultado = mensaje.concat(mensaje2, ' y tengo muchas ideas');

//console.log(resultado);


//Plantillas y literales
var lenguaje = 'JavaScript';
var lenguaje2 = 'HTML';
var mensaje = `Me gusta ${lenguaje} y su integración con ${lenguaje2}`;

/*
console.log(mensaje);
*/

//Mensaje multilínea

var mensajeMultilinea = `
    Hola mundo,
    estoy aprendiendo
    ${lenguaje} y me gusta
    como se integra con HTML y CSS`;

console.log(mensajeMultilinea);