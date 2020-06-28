// ### **Ejercicio 6**

// - Utilizando destructuring, tenemos que extraer la información necesaria para completar el siguiente código.

// ```js
const persona1 = {
 nombre: 'Ada Lovelace',
 techs: ['JavaScript', 'C++']
};

const persona2 = {
 nombre: 'Grace Hopper',
 techs: []
};

const {
  nombre: nombrePersona1,
  techs:[techPersona1 = 'JavaScript'] 
} = persona1;

const {
  nombre: nombrePersona2,
  techs: [techPersona2 = 'JS'],
} = persona2;


console.log(`${nombrePersona1} programa en ${techPersona1}.`);
console.log(`${nombrePersona2} programa en ${techPersona2}.`);

// // Ada Lovelace programa en JavaScript.
// // Grace Hopper programa en JS.
// ```

