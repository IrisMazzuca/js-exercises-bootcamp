// **🏝 Isla desierta**

// - Crear un programa que permita mover un barco hacia una isla. El programa debe permitir ingresar los valores AVANZAR o RETROCEDER, siendo que AVANZAR acerca el barco un espacio hacia la isla y RETROCEDER lo aleja. El programa debe terminar cuando el barco llega a la isla. Ejemplo:

// ```
// ⛵️🌊🌊🌊🏝
// // AVANZAR
// 🌊⛵️🌊🌊🏝
// // AVANZAR
// 🌊🌊⛵️🌊🏝
// // RETROCEDER
// 🌊⛵️🌊🌊🏝
// // AVANZAR
// 🌊🌊⛵️🌊🏝
// // AVANZAR
// 🌊🌊🌊⛵️🏝
// 
// ```


let i = 0;

while (i < 4) {
    const input = prompt(`Juego La Isla Desierta! Ingrese AVANZAR o RETROCEDER`);

    if (input === 'AVANZAR') {
        i++;
    };
    if (input === 'RETROCEDER') {
        i--;
    };

    switch (i) {
        case 1:
            alert('⛵️🌊🌊🌊🏝');
            break;
        case 2:
            alert('🌊⛵️🌊🌊🏝');
            break;
        case 3:
            alert('🌊🌊⛵️🌊🏝');
            break;
        case 4:
            alert('🌊🌊🌊⛵️🏝  Has llegado a la isla!!');
            break;
        default:
            alert('Error');
            break;
    };
   
};


// let posicionBarquito = 0;
// const navegar = ["⛵️", ":ocean:", ":ocean:", ":ocean:", ":island:"];
// let isla = navegar.length - 1;

// const adelante = +1;
// const atras = -1;

// const avanzar = () => {
//   if (posicionBarquito + 1 < isla) {
//     moverBarquito(adelante);
//     console.log(navegar);
//   } else {
//     console.log("Llegaste a la isla");
//   }
// };
// const retroceder = () => {
//   if (posicionBarquito > 0) {
//     moverBarquito(atras);
//     console.log(navegar);
//   } else {
//     console.log("No podes retroceder más");
//   }
// };
// const moverBarquito = (aDonde) => {
//   navegar[posicionBarquito] = ":ocean:";
//   navegar[posicionBarquito + aDonde] = "⛵️";
//   posicionBarquito = posicionBarquito + aDonde;
// }