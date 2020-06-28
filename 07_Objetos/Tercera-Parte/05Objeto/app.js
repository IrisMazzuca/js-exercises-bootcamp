// # Objetos 005

// - Tenemos la misma variable `user` del ejercicio anterior, con información sobre una persona, pero con una diferencia en la estructura.
// - Al objeto vamos a agregarle un método que se llame `getFullname`, que no tiene parámetros y tiene que retornar un string con el nombre completo de la persona

// ```js
// // TODO: agregar en el objeto el método getFullname, que tiene que retornar el nombre completo de la persona
const user = {
  name: {
    first: "Hedy",
    last: "Lamarr",
  },
  age: 30,
  getFullname: function() {
    return this.name.first + " " + this.name.last;
  },
};

console.log(user.getFullname()); // Hedy Lamarr
// ```

