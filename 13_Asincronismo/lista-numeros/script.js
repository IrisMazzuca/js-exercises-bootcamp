const arr = [1, 2, 3]
const arr2 = [1, 2, 3, "perro"]

const isNumber = (item) => {
  return typeof (item) === "number"
}

const sumar = (arr) => {

  if (arr.every(item => isNumber(item))) {
    return arr.reduce((acc, item) => acc + item)
  } else {
    //error : 
    throw {
      nombre: "no son todos num",
      mensaje: "debes ingresar un numero",
    }
  }
}

try {
  sumar(arr2)
} catch (error) {
  console.log("No se puede imprimir porque", error.mensaje);
}
