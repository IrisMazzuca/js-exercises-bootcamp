// ## Ejercicio Array 015

// - Tenemos un array con todas las ganadoras de RuPaul’s Drag Race, en la variable `ganadorasRupaul`. Vamos a escribir un programa en el que queremos saber la siguiente información:
//   - Que número de ganadora es **Sharon Needles**
//   - Mostrar por pantalla si **Latrice Royale** fue una ganadora del concurso.
// - Completar el siguiente código para que pueda mostrarnos lo que solicitamos

// ```js
const ganadorasRupaul = ["Tyra Sanchez", "Chad Michaels", "Raja", "Trixie Mattel", "Aquaria", "Bebe Zahara Benet", "Sharon Needles", "Jinkx Monsoon", "Alaska Thunderfuck 5000", "Bianca Del Rio", "Violet Chachki", "Bob the Drag Queen", "Sasha Velour"];

// // completar el código para el primero punto
const posicionSharonNeedles = ganadorasRupaul.indexOf("Sharon Needles");
// si Latrice Royale está en el array de ganadoras, asignamos TRUE... si no está, asignamos FALSE
const latriceRoyaleGano = ganadorasRupaul.indexOf("Latrice Royale");

console.log("Sharon Needles es la ganadora número:");
console.log(posicionSharonNeedles); // deberia mostrar 5

if (latriceRoyaleGano != -1) {
  console.log("Latrice Royale fue ganadora de RuPaul's Drag Race");
} else {
  console.log("Latrice Royale NO fue ganadora de RuPaul's Drag Race");
}

