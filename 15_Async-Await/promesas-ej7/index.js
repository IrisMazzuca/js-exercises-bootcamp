// ## ⚙️ ** Ejercicio 7 **

// - Tenemos que escribir una función`login(user, pass)` para que una persona pueda ingresar en nuestra aplicación web
// - La función recibe dos parámetros: `user` y`pass`
// - La función retorna una promesa
// - Dentro de la promesa, tenemos que validar si ** user ** existe dentro del array de perfiles y si la contraseña coincide con la pasada por parámetro
// - Si existe y la pass coincide, tenemos que ejecutar el método`resolve` con el objeto que contiene todos los datos de la persona(no te olvides de borrar la propieda`pass` por seguridad 🦹‍♀️)
// - Si existe y la pass ** no ** coincide, tenemos que ejecutar el método`reject` con el mensaje de error`Contraseña incorrecta`
// - Si no existe, tenemos que ejecutar el método`reject` con el mensaje de error`El perfil con user ${user} no existe`


const users = [
  { id: 1, user: "adalovelace", pass: "AL1815" },
  { id: 2, user: "gracehopper", pass: "GH4536" },
  { id: 3, user: "hedylamarr", pass: "HL7788" },
];

const login = async (user, pass) => {
  const promise = new Promise((resolve, reject) => {

    const usuario = users.find(elem => elem.user === user)

    if (!usuario) {
      reject("Usuario inexistente")
    }

    if (usuario.pass !== pass) {
      reject("Contraseña incorrecta")
    }

    resolve({
      id: usuario.id,
      user: usuario.user
    });

  })

  const result = await promise;
  return result
}

const showResult = async (user, pass) => {
  console.log(await login(user, pass));
}

showResult("adalovelace", "AL1815");
showResult("gracehopper", "123");
showResult("sherylsandberg", "SS1234");

// login("adalovelace", "AL1815")
//   .then((res) => console.log(res))
//   .catch((err) => console.log(err));
// // { id: 1, user: 'adalovelace' }

// login("gracehopper", "123")
//   .then((res) => console.log(res))
//   .catch((err) => console.log(err));
// // Contraseña incorrecta

// login("sherylsandberg", "SS1234")
//   .then((res) => console.log(res))
//   .catch((err) => console.log(err));
// El perfil con user sherylsandberg no existe



