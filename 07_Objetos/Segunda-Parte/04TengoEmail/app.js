// ### 04 - TengoEmail

// - Partiendo de un objeto guardado en la variable `user`
// - Verificar si tiene la propiedad `email`
//   - Si no la tiene, mostrar en pantalla: 'El usuario no tiene la propiedad email'
//   - Si la tiene, mostrar en pantalla: 'El usuario tiene la propiedad email'

// ```js
const user = {
  username: "ada_lovelace",
  password: "1234567890!",
};

// // acá tu solucion
(user.hasOwnProperty("email")) ? console.log('El usuario tiene la propiedad email') : console.log('El usuario no tiene la propiedad email');


// if(user.email) {
//   console.log('El usuario tiene la propiedad email');
// } else {
//   console.log('El usuario no tiene la propiedad email');
// }