// ### 10 - ganadora

// - Tenemos un array de objetos, con las ganadoras de algunas temporadas de Rupaul.
// - Cada objeto tiene las propiedades `nombre`, `temporada` y `foto`.
// - Iterá/Recorré el array utilizando `for` y mostrá el nombre y la temporada que ganó. Por ejemplo: **Bianca Del Rio ganó la temporada 6**

// ```js
const ganadoras = [
  {
    nombre: "Bebe Zahara Benet",
    temporada: "1",
    foto: "http://www.nokeynoshade.party/images/bebe-zahara-benet.jpg",
  },
  {
    nombre: "Tyra Sanchez",
    temporada: "2",
    foto: "http://www.nokeynoshade.party/images/tyra-sanchez.jpg",
  },
  {
    nombre: "Raja",
    temporada: "3",
    foto: "http://www.nokeynoshade.party/images/raja.jpg",
  },
  {
    nombre: "Sharon Needles",
    temporada: "4",
    foto: "http://www.nokeynoshade.party/images/sharon-needles.jpg",
  },
  {
    nombre: "Jinkx Monsoon",
    temporada: "5",
    foto: "http://www.nokeynoshade.party/images/jinkx-monsoon.jpg",
  },
  {
    nombre: "Bianca Del Rio",
    temporada: "6",
    foto: "http://www.nokeynoshade.party/images/bianca-del-rio.jpg",
  },
];

for (let i = 0; i < ganadoras.length; i++) {
    console.log(`${ganadoras[i].nombre} gano la temporada ${ganadoras[i].temporada}`);
}

// ///// RESULTADO
// // Bebe Zahara Benet ganó la temporada 1
// // Tyra Sanchez ganó la temporada 2
// // Raja ganó la temporada 3
// // Sharon Needles ganó la temporada 4
// // Jinkx Monsoon ganó la temporada 5
// // Bianca Del Rio ganó la temporada 6
// ```
