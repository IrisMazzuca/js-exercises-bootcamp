// ## Ejercicio Array 016

// - Tenemos un array llamado `womenInTech` sobre el que tenés que realizar las siguientes operaciones:

//   - eliminar a "Bill Gates", que está en la última posición
//   - agregar "Parisa Tabriz" al final del array

// - Luego de realizar las dos operaciones, vamos a mostrar la siguiente información por consola:
//   - la longitud del array
//   - quien está en la posición 3
//   - mostrar todos los elementos del array, uno debajo del otro

// ```js
const womenInTech = ["Ada Lovelace", "Hedy Lamarr", "Grace Hopper", "Radia Perlman", "Janie Tsao", "Sheryl Sandberg", "Susan Kare", "Bill Gates"];

womenInTech.pop();
womenInTech.push("Parisa Tabriz");

// // ACA VA EL CODIGO DE LA PRIMERA PARTE DEL EJERCICIO
// // UNA VEZ QUE REALIZAMOS LAS OPERACIONES PASAMOS AL SIGUIENTE PASO

// // completar las cuatro asignaciones de abajo
const longitud = womenInTech.length ;
const enLaPosicion3 = womenInTech[2];

console.log("La longitud del array es:");
console.log(longitud);
console.log("En la posición 3 está:");
console.log(enLaPosicion3);

// // utilizar un for para mostrar cada nombre del array
for (let i = 0; i < longitud; i++) {
  console.log(womenInTech[i]);
}

