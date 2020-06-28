// ### **Ejercicio 1**

// - Crear una función (arrow function) llamada `mostrarInfo`
// - `mostrarInfo` recibe un objeto y retorna la cadena “Tu nombre completo es ” concatenado con el valor de la propiedad nombre, un espacio y el valor de la propiedad apellido
// - Tenés que usar destructuring dentro de la función.

// ```js
const persona = { nombre: 'Ada', apellido: 'Lovelace', edad: 35 };

const mostrarInfo = obj => {
    const {nombre, apellido, edad} = obj;
    console.log(`Tu nombre completo es ${nombre} ${apellido}`);
}; // ACA LA SOLUCION

mostrarInfo(persona);
// // Tu nombre completo es Ada Lovelace
// ```

