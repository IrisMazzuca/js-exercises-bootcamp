// ### 03 - Producto

// - Partiendo de un objeto guardado en la variable `producto`
// - Mostrar en la consola el nombre y valor de todas las propiedades que tiene el producto
// - Utilizar el método **keys**
// - El formato para mostrar la propiedad y valor es: "producto['[ACA NOMBRE DE LA PROPIEDAD]'] -> [ACA VALOR DE LA PROPIEDAD]"

// ```js
const producto = {
  id: "ADA-020",
  title: "Gubergren sed est amet voluptua",
  price: 123.75,
  picture:
    "https://i.kinja-img.com/gawker-media/image/upload/s--53mPze4a--/c_scale,f_auto,fl_progressive,q_80,w_800/1315358249455433031.jpg",
  condition: "nuevo",
  free_shipping: true,
  location: "Capital Federal",
};

// // completá acá el código
let propiedades = Object.keys(producto);
let valores = Object.values(producto);

for (let i = 0; i < propiedades.length; i++) {
  console.log(`${propiedades[i]} -> ${producto[propiedades[i]]}`);
}

// /////
// // RESULTADO ESPERADO
// // producto['id'] -> ADA-020
// // producto['title'] -> Gubergren sed est amet voluptua
// // producto['price'] -> 123.75
// // producto['picture'] -> https://i.kinja-img.com/gawker-media/image/upload/s--53mPze4a--/c_scale,f_auto,fl_progressive,q_80,w_800/1315358249455433031.jpg
// // producto['condition'] -> nuevo
// // producto['free_shipping'] -> true
// // producto['location'] -> Capital Federal
// ```

