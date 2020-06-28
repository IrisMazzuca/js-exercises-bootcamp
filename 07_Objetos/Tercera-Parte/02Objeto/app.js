// # Objetos 002

// - Tenemos una variable `pelicula`, con propiedades que guardan información sobre una película
// - Necesitamos agregar un método/función `mostrarInfo` que muestre por consola el mensaje: "Película: [NOMBRE PELI] - Año: [AÑO PELI]"

// ```js
const pelicula = {
  titulo: "The Dark Knight",
  anio: 2008,
  director: "Christopher Nolan",
};

pelicula.mostrarInfo = function() {
    console.log(`Película: ${this.titulo} - Año: ${this.anio}`);
};

console.log(pelicula);



pelicula.mostrarInfo();
// // Película: The Dark Knight - Año: 2008
// ```
