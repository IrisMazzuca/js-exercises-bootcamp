
// ### **Ejercicio 4**

// - Tenemos un objeto persona, con sus datos personales
// - Utilizando destructuring, obtener los datos necesarios para completar el siguiente código.

// ```js
const persona = {
 nombre: 'Ada',
 apellido: 'Lovelace',
 fechaNacimiento: [10, 12, 1815],
 lugarNacimiento: {
   pais: 'Inglaterra',
   ciudad: 'Londres',
 },
};

const {
    nombre,
    apellido,
    fechaNacimiento:[dia,mes,anio],
    lugarNacimiento: {
      pais,
      ciudad : lugar,
    }
 } = persona;

console.log(`${nombre} nació en ${lugar}, el ${dia}/${mes}/${anio}.`);
// // Ada nació en Londres, el 10/12/1815.
// ```
