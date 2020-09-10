var platillos = ["ceviche", "tacos", "pasta", "tostadas"];
var bebidas = new Array("Jamaica", "Chicha", "Pozol");

//console.log(Array.isArray(platillos), bebidas)

//Medir y acceder a un arreglo
/*
console.log("Hay "+platillos.length+" platillos en el menú");

var ultimoPlatillo = platillos[platillos.length-1];

console.log("El último platillo es: ",ultimoPlatillo);
*/

//Arreglos multidimensionales
/*
var menu = [platillos, bebidas];

console.log(menu[1][0])
*/

//Operaciones básicas de un arreglo

console.log('Antes: ', platillos);

//platillos.push("queso"); La función push se utiliza para agregar elementos al final del arreglo
//platillos.pop();         La función pOP se utiliza para eliminar elementos del final del arreglo

//console.log('Despues: ', platillos);

var mensaje = platillos.join(); //El método join transforma el arreglo en string
console.log(mensaje);