"use strict"
//Ciclos

//For
var productos = 5;
/*
for (let contador = 0; contador < productos; contador++){
    console.log("Producto #"+ contador);
    debugger;
}
*/

//While
/*
while(productos > 0){
    console.log('Producto vendido');
    productos--;
    debugger;
}
*/

//Do-While
/*
do{
    console.log('Producto vendido');
    productos--;
    debugger;
}
while(productos >= 1)
*/

var contador = 0;
var cuenta = 0;

for(contador = 0; contador <= 20; contador++){
    if(contador == 5){
        break
    }
    if(contador % 2 == 0){
        continue;
    }    
    cuenta++;
    debugger;
}

console.log("Hay"+cuenta+" números impares");