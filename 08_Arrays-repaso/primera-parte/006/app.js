// ## Ejercicio Array 006

// - Teniendo dos arrays de canciones, comparar sus longitudes y mostrar en pantalla “La playlist de Nirvana tiene más canciones” si el array `playlistNirvana` tiene más canciones, o “La playlist de Foo Fighters tiene más canciones” si el array `playlistFoo` tiene más elementos.

// ```js
const playlistNirvana = [
  "Smells Like Teen Spirit",
  "Come As You Are",
  "Heart-Shaped Box",
  "Lithium",
];
const playlistFoo = ["Everlong", "The Pretender", "Learn to Fly"];
// ```

// ((playlistNirvana.length)>(playlistFoo.length)) ? console.log("La playlist de Nirvana tiene más canciones") : console.log("La playlist de Foo Fighters tiene más canciones");

console.log((playlistNirvana.length)>(playlistFoo.length) ? "La playlist de Nirvana tiene más canciones" : "La playlist de Foo Fighters tiene más canciones");