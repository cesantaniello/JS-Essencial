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

var mensaje = "Estoy aprendiendo JavaScript y estoy aprendiendo mucho";
var resultado;

//indexOf   Busca el primer índice del string
//resultado = mensaje.indexOf("aprendiendo");

//lastIndexOf   Busca el último índice del string
//resultado = mensaje.lastIndexOf("aprendiendo");

//search:
//resultado = mensaje.search("aprendiendo");

//search | expresión regular: Busca con expresión regular la posición del string dado. 
                            //Si arroja como resultado -1 es porque no lo ha conseguido
//resultado = mensaje.search(/ja/i);

//match
//resultado = mensaje.match(/aprendiendo/gi);

//substr:
//resultado = mensaje.substr(6,11);

//substring:
//resultado = mensaje.substring(6,17);

//charAt
resultado = mensaje.charAt(0);

console.log(resultado);