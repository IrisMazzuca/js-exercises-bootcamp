// ## Ejercicio Array 014

// - Tenemos un array de canciones de Spotify. Queremos mostrar por consola la siguiente información:
//   - Posición de la canción **Lithium**
//   - Posición de la canción **On a Plain**
// - Completar el siguiente código para que pueda mostrarnos lo que solicitamos

// ```js
const playlist = ['Smells Like Teen Spirit', 'Come As You Are', 'Heart-Shaped Box', 'Lithium'];


// // completar las dos asignaciones de abajo
const indiceLithium = playlist.indexOf("Lithium");
const indiceOnAPlain = playlist.indexOf("On a Plain");

console.log("El índice de la canción Lithium es:");
console.log(indiceLithium); // deberia mostrar 3
console.log("El índice de la canción On a Plain es:");
console.log(indiceOnAPlain); // deberia mostrar -1
// ```