// ### **Ejercicio 8**

// - Crear una función (arrow function) llamada `mostrarPrimerDisco` que recibe un objeto y retorna la cadena "El primer disco de BANDA es PRIMERDISCO"
// - Tenés que usar destructuring dentro de la función, y tiene que tener el return implícito

// ```js
const banda = {
 nombre: 'Nirvana',
 discos: [
   { nombre: 'Bleach' },
   { nombre: 'Nevermind' },
   { nombre: 'Incesticide' }
 ]
};

// // crear la funcion mostrarPrimerDisco

const mostrarPrimerDisco = ({nombre, discos: [{nombre:primero},{nombre:segundo},{nombre:tercero}]}) => `El primer disco de ${nombre} es ${primero}`;

console.log( mostrarPrimerDisco(banda) ); // El primer disco de Nirvana es Bleach
// ```