// ## Ejercicio Array 011

// - Crear un documento con el nombre arr_016.js
// - Teniendo las siguientes variables `playlist` y `playlistEscuchada`:

// ```js
const playlist = [
  "Smells Like Teen Spirit",
  "Come As You Are",
  "Heart-Shaped Box",
  "Lithium",
];
const playlistEscuchada = ["School"];


let valor = playlist.shift();

playlistEscuchada.push(valor);
console.log(playlist, playlistEscuchada);

// ```

// - Eliminar la primer canción del array `playlist`, y agregar el elemento eliminado al final del array `playlistEscuchada`
// - Mostrar el contenido de `playlist`
// - Mostrar el contenido de `playlistEscuchada`
// - Resultado espeardo:

// ```bash
// playlist: ["Come As You Are", "Heart-Shaped Box", "Lithium"]
// playlistEscuchada: ["School", "Smells Like Teen Spirit"]
// ```

