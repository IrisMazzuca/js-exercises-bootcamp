// ### 11 - duracion de canciones

// - Tenemos un array de objetos, que representa un listado de bandas
// - Cada objeto representa una banda, y tiene las propidades `id`, `nombre`, `fundacion`, `activa`
// - Mostrar en consola cada banda del array, con la siguiente lógica:
//   - Si la banda está activa mostrar el mensaje: "[NOMBRE DE LA BANDA] está activa desde el año [AÑO DE FUNDACIÓN]"
//   - Si la banda NO está activa mostrar el mensaje: "[NOMBRE DE LA BANDA] no está activa"

// ```js
const bandas = [
  { id: 1, nombre: "Nirvana", fundacion: 1987, activa: false },
  { id: 2, nombre: "Foo Fighters", fundacion: 1994, activa: true },
  { id: 3, nombre: "Led Zeppelin", fundacion: 1967, activa: false },
  { id: 3, nombre: "Queens of the Stone Age", fundacion: 1997, activa: true },
  { id: 3, nombre: "Pearl Jam", fundacion: 1990, activa: true },
];

for (let i = 0; i < bandas.length; i++) {
    console.log(bandas[i].activa ? `${bandas[i].nombre} está activa desde el año ${bandas[i].fundacion}` : `${bandas[i].nombre}  no está activa` )
}

// ///// RESULTADO
// // Nirvana no está activa
// // Foo Fighters está activa desde el año 1994
// // Led Zeppelin no está activa
// // Queens of the Stone Age está activa desde el año 1997
// // Pearl Jam está activa desde el año 1990
// ```
