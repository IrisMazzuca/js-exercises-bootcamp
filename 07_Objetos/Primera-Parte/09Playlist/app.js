// ### 09 - playlist

// - Creá un objeto donde vamos a guardar información sobre una playlist de spotify
// - El objeto va a tener las propiedades `nombre` (un string), `privada` (un booleano) y `canciones` (un array de strings).
// - En líneas separadas (un console.log por cada una), mostrá la información de la lista para que sea vea de la siguiente forma:

const playlist = {
  nombre: "Lista de Nirvana",
  privada: true,
  canciones: ["Smells Like Teen Spirit", "In Bloom", "Come As You Are"]
}

console.log(playlist.nombre);
console.log(playlist.privada ? "Si" : "No");
for (let i = 0; i < playlist.canciones.length; i++) {
  console.log(playlist.canciones[i]);
}

// ```
// Lista de Nirvana
// Privada: Si
// Canciones:
// Smells Like Teen Spirit
// In Bloom
// Come As You Are
// ```

// - Privada tiene que mostrar **Si** en el caso que la propiedad `privada` sea `true`, o **No** si la prop