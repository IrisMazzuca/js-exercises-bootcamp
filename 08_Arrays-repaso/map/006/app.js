// ## Ejercicio Array 006

// - Tenemos un array en una variable `playlist` con una lista de canciones de un disco.
// - Usar la función `map` para agregar a cada título de la canción el número de posición en la que está dentro del array.

// ```js
const playlist = ["Everlong", "The Pretender", "Learn to Fly"];

// /// completá acá el código

const nuevaPlaylist = playlist.map((song,index) => {
    return `${index} - ${song}`
} );

console.log(nuevaPlaylist);

// // RESULTADO ESPERADO
// // [ '0 - Everlong', '1 - The Pretender', '2 - Learn to Fly' ]
// ```
