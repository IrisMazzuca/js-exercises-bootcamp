// # Objetos 004

// - Tenemos una variable `user`, con información sobre una persona (`firstName`, `lastName`, `age`)
// - Al objeto vamos a agregarle un método que se llame `getFullname`, que no tiene parámetros y tiene que retornar un string con el `firstName` y `lastName` concatenadas, separados por un espacio.

// ```js
// // TODO: agregar en el objeto el método getFullname, que tiene que retornar el nombre completo de la persona
const user = {
  firstName: "Hedy",
  lastName: "Lamarr",
  age: 30,
  getFullname: function() {
      return this.firstName + " " + this.lastName;
  }
};


console.log(user.getFullname()); // Hedy Lamarr
// ```

