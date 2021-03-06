// ## ⚙️ ** Ejercicio 8 **

// - Tenemos la función`climaCincoDias()` que devuelve un listado con el clima a 5 días(cuando se resuelve la promesa)
// - El listado es un array de 5 objetos
// - Cada objeto representa un día, con las siguientes propiedades: `fecha`(Date), `min`(número con la temp.mín), `max`(número con la temp.max), `icono`(string con un emoji que representa el estado del clima)
// - Utilizá la función para obtener el clima y mostrar por consola, un línea por cada día, con su temperatura máxima, mínima y el ícono
// - Los datos son generados automáticamente, no son reales


const climaCincoDias = () => {
  const sumarDias = (f, d) =>
    new Date(new Date(Number(f)).setDate(f.getDate() + d));

  const random = (min, max) =>
    Math.floor(Math.random() * (max - min + 1) + min);

  const icons = ["🔆", "⛅", "🌩", "🌧", "⛈", "⛄"];

  return new Promise((resolve, reject) => {
    const diasClima = [];

    const int = setInterval(() => {
      const min = random(-1, 27),
        max = random(min, min + 10);

      if (
        diasClima.push({
          fecha: sumarDias(new Date(), diasClima.length),
          min,
          max,
          icono: icons[random(0, icons.length - 1)],
        }) === 5
      ) {
        clearInterval(int);
        resolve(diasClima);
      }
    }, 150);
  });
};

// utilizar la funcion climaCincoDias y mostrar por pantalla el siguiente resultado (los valores van a variar porque son aleatorios)

// Lunes 06/07 - ⛄ - Temp. Min.: 8ºc - Temp. Máx.: 10ºc
// Martes 07/07 - 🌩 - Temp. Min.: 3ºc - Temp. Máx.: 4ºc
// Miercoles 08/07 - ⛅ - Temp. Min.: 9ºc - Temp. Máx.: 13ºc
// Jueves 09/07 - 🔆 - Temp. Min.: 3ºc - Temp. Máx.: 5ºc
// Viernes 10/07 - 🔆 - Temp. Min.: 18ºc - Temp. Máx.: 21ºc

const dateFormat = (date) => {
  return `${date.getDate()}/${date.getMonth() + 1}/${date.getFullYear()}`
};

climaCincoDias()
  .then((res) => console.log(res.reduce((acc, dias) => { return acc + `${dateFormat(dias.fecha)} - ${dias.icono}- Temp. Min ${dias.min} - Temp. Max ${dias.max} \n` }, "")))
