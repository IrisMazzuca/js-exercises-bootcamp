// ## Ejercicio Array 013

// - Crear un documento con el nombre arr_019.js
// - Si tenemos dos arrays `playlistNirvana` y `playlistFoo`:

// ```js
const playlistNirvana = [
  "Smells Like Teen Spirit",
  "Come As You Are",
  "Heart-Shaped Box",
  "Lithium",
];
const playlistFoo = ["Everlong", "The Pretender", "Learn to Fly"];
// ```

// - Crear una variable `playlistCompleta`, con los nombres de todas las canciones que hay en `playlistNirvana` y `playlistFoo`.
// - Mostrar en consola los siguiente nombres de forma individual (uno por linea):
//   - Nombres de las canciones de nirvana (a mano utilizando índices)
//   - Nombres de los canciones de foo fighters (utilizando while)
//   - Nombres de todas las canciones entre ambas listas (utilizando for)

const playlist = playlistNirvana.concat(playlistFoo);
console.log(playlist);

console.log("***************************")

for (let i = 0; i < playlist.length; i++) {
  console.log(playlist[i]);
}

console.log("***************************")

console.log(playlistNirvana[0]);
console.log(playlistNirvana[1]);
console.log(playlistNirvana[2]);
console.log(playlistNirvana[3]);

console.log("***************************")

let j = 0;
while (j < playlistFoo.length) {
  console.log(playlistFoo[j]);
  j++;
}