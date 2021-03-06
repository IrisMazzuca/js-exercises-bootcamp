
// ### 01 - persona

// - Declarar una variable con el nombre **propiedadNombre** y asignar el valor nombre
// - Declarar una variable con el nombre **propiedadEdad** y asignar el valor edad
// - Crear un objeto **persona** con las propiedades nombre y edad
// - Asignar a las propiedades del objeto **persona** tu nombre y edad
// - Mostrar en consola los valores de cada propiedad del objeto persona utilizando corchetes y los valores: 'nombre' y 'edad' en lugar de utilizar el punto
// - Mostrar en consola los valores de cada propiedad del objeto persona utilizando las variables **propiedadNombre** y **propiedadEdad**

const propiedadNombre = "nombre";
const propiedadEdad = "edad";

const persona = {
    nombre: "Iris",
    edad: 31,
};

console.log(persona[propiedadNombre], persona[propiedadEdad]);
console.log(persona["nombre"], persona["edad"]);