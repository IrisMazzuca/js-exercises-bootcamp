// ## ** Ejercicio 4 **

// - Escribí una función esMayorADiez que recibe un número y retorna una ** promesa **
// - La promesa tiene que verificar si el número es mayor a diez
// - Si es mayor, tiene que resolver correctamente y devolver el mensaje`[NUM] es mayor a diez, ¡éxito!`
// - Si es menor o igual, tiene que rechazarse y devolver el mensaje`[NUM] es menor o igual a diez, ¡error!


const esMayorADiez = (num) => {
  return new Promise((resolve, reject) => {
    if (num > 10) {
      resolve(`${num} es mayor a diez, ¡éxito!`)
    }
    if (num <= 10) {
      reject(`${num} es menor o igual a diez, ¡error!`)
    }
  })
};

const nuevaFx = async (num) => {
  const resultado = await esMayorADiez(num);
  console.log(resultado);
}

esMayorADiez(15)
  .then((result) => console.log(result)) // 15 es mayor a diez, ¡éxito!
  .catch((error) => console.log(error));

esMayorADiez(8)
  .then((result) => console.log(result))
  .catch((error) => console.log(error)); // 8 es menor o igual a diez, ¡error!

