// ### **Ejercicio 5**

// - Utilizando destructuring, tenemos que extraer la información necesaria para completar el siguiente código.

// ```js
const persona = ['Ada Lovelace', [ { edad: 30, idioma: 'inglés' } ]];

// // usando destructuring, obtener las variables idioma y nombrePersona

const [nombrePersona, [{
  edad,
  idioma,
}]
] = persona;

console.log(`${nombrePersona} habla en ${idioma}.`);
// // Ada Lovelace habla en inglés.
// ```

