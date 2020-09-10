"use strict"

//ITERANDO CON ARREGLOS
var platillos = ["ceviche", "tacos", "pasta", "tostadas"];

//For in
/*
for (let i in platillos){
    console.log(platillos[i])
}
*/

//ForEach
//platillos.forEach( platillo => console.log(platillo))

//platillos.forEach(( platillo, index ) => console.log("Indice "+ index +" es "+ platillo))


//Buscando en un arreglo

//var platoElegido = platillos.find(platillo => platillo == "pasta");

var menu = [{
        nombre: 'Ceviche', 
        precio: 20, 
        pais: 'Perú'
    },
    {
        nombre: 'Tacos', 
        precio: 10, 
        pais: 'México'
    },
    {
        nombre: 'Pasta', 
        precio: 50, 
        pais: 'Italia'
    },
    {
        nombre: 'Quesadillas', 
        precio: 15, 
        pais: 'México'
    }
];

//var platoElegido = menu.find(platillo => platillo.nombre == "Pasta");

//console.log(platoElegido);

//Busqueda de índice de elementos

//var numPlatillo = platillos.findIndex(platillo => platillo == 'tacos');

//var numPlatillo = menu.findIndex(platillo => platillo.nombre == 'Tacos');


//Filtrar búsquedas
var resultado = menu.filter(platillo => platillo.pais == "México");

//console.log("Platillo número: ", numPlatillo);

console.log(resultado);
