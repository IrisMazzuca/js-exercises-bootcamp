const dividir = (num1, num2) => {
  return new Promise((resolveCallback, rejectCallback) => {
    if (num1 / num2 == Infinity) {
      rejectCallback("No se puede dividir");
    }
    resolveCallback(num1 / num2);
  });
};

dividir(500, 0)
  .then((resultado) => {
    console.log(resultado);
  })
  .catch((error) => {
    console.error(error);
  });
