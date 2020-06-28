// ## Ejercicio Array 003

// - Tenemos un array en una variable `playlist` con una lista de canciones de un disco.
// - Recorrer la lista con la función **forEach** y mostrar la posición y el nombre de la canción utilizando un `console.log()`

// ```js
const playlist = [
  "Concrete and Gold",
  "The Line",
  "Sunday Rain",
  "Happy Ever After (Zero Hour)",
  "Arrows",
  "Dirty Water",
  "La Dee Da",
  "The Sky Is a Neighborhood",
  "Make It Right",
  "Run",
  "T-Shirt",
];

// /// completá acá el código

playlist.forEach((song,index) => {
    console.log(`${index} - ${song}`);
})

// // resultado esperado
// // 0 - Concrete and Gold
// // 1 - The Line
// // 2 - Sunday Rain
// // 3 - Happy Ever After (Zero Hour)
// // 4 - Arrows
// // 5 - Dirty Water
// // 6 - La Dee Da
// // 7 - The Sky Is a Neighborhood
// // 8 - Make It Right
// // 9 - Run
// // 10 - T-Shirt
// ```
