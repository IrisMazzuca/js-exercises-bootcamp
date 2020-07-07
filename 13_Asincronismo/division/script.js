const dividir = (num1, num2) => {
  const div = num1 / num2
  if (div == Infinity) {
    throw {
      nombre: "error de calculo",
      mensaje: "el resultado es infinito"
    }
  }

  return div;
}

try {
  dividir(1401, 0)
} catch (error) {
  console.log("No se puede imprimir porque", error.mensaje);
}
