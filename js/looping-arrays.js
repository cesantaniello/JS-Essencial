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

platillos.forEach(( platillo, index ) => console.log("Indice "+ index +" es "+ platillo))
