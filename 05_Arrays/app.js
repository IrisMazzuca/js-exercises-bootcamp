const numeros = [12, 20, 35, 47, 5, 6, 7, 8, 9];

const meses = new Array("ene", "feb", "mar", "abr");

const remix = [1, "soy un simple texto", null, meses, numeros];
console.log(remix);
console.log(remix[3]);
console.log(remix[3][0]);
console.log("largo:", numeros.length);

for (let i = 0; i < numeros.length; i++) {
  console.log(numeros[i]);
};

for (let i = 0; i <= meses.length-1/*4*/; i++) {
    console.log(meses[i]);
  }
  