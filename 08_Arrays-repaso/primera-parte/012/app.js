// ## Ejercicio Array 012

// - Crear un documento con el nombre arr_018.js
// - Si tenemos el array `womenInTech`
// ```

// - Ordenar el array
// - Mostrar en la consola el array ordenado
// - Revertir el orden de la lista ordenada
// - Mostrar en la consola el array revertido
// - Unir los nombres de todas las mujeres en tecnología utilizando `" - "` para separa

// ```js
const womenInTech = [
  "Ada Lovelace",
  "Hedy Lamarr",
  "Grace Hopper",
  "Radia Perlman",
  "Janie Tsao",
  "Sheryl Sandberg",
  "Susan Kare",
  "Parisa Tabriz",
];

womenInTech.sort();
console.log(womenInTech);
womenInTech.reverse();
console.log(womenInTech);

console.log(womenInTech.join(' - '));