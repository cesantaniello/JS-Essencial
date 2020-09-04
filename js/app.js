"use strict" //El modo estricto siempre debe estar en la línea 1
/*
var edad = 37

var cantidad = "100";

var nuevaCantidad = Number(cantidad); //Con Number se parsea de string a número

parseInt(); //parsea a Entero

parseFloat(); //parsea a Flotante

var bebida = "agua";

var comida = 'ceviche';

var instruccion = "El platillo se llama 'ceviche'";

var edadtxt = String(edad);

var activo = false;

var estado = Boolean(10 < 9);

var fecha = new Date();

var ambiente = Symbol('dev');
*/

//JSON -> JavaScript Object Notation

var persona = {nombre: 'Carlos', twitter: 'carloses'}; //Objeto

var personas = [    //Arreglo
    {nombre: 'Hugo', twitter: 'Hugoes'},    
    {nombre: 'Paco', twitter: 'Pacoes'},
    {nombre: 'Luis', twitter: 'Luises'},    
    persona
]

var personaJSON = JSON.stringify(persona);  //Parsea a texto

var nuevaPersona = JSON.parse(personaJSON); //Parsea de texto a objeto
