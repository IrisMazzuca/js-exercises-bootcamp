// # Objetos 006 - carrito parte 1

// - Tenemos un objeto `shoppingCart`, que guarda datos de un carrito de compras en una tienda virtual
//   - Tiene dos propiedades: `owner` (un objeto con los datos de la persona que está haciendo la compra) y `products` (un **array de objetos**, con todos los productos que está por comprar)
// - Los objetos de los productos tienen 4 propiedades: `id` (un número), `title` (string, el nombre del producto), `price` (un número, el precio del producto) y `freeShipping` (un booleano que indica si el producto tiene o no cargos por envio)
// - Agregar al objeto `shoppingCart` un método `addProduct` que nos permita agregar objetos de productos al array `products`.
// - También necesitamos agregar un método `getTotal` que sume el precio de todos los productos que tenemos en el array `products` y nos devuelva el precio final total.
// - Crear los siguientes productos y agregarlos al carrito:

// ```js
// // 1,Teclado,320,true
// // 2,Mouse,230,false
// // 3,Auriculares,120.50,true
// // 4,Monitor,510,false
// // 5,Camara,125.99,true

// // Ejemplo del formato de cada objeto del producto: 0,Mouse Genius,150,false
// // const unMouse = {
// //   id: 0,
// //   title: "Mouse Genius",
// //   price: 150,
// //   freeShipping: false
// // }
// ```

const perfume = {
  id: 1,
  title: "perfume",
  price: 200,
  freeShipping: true,
};

const teclado = {
  id: 2,
  title: "teclado",
  price: 320,
  freeShipping: true,
};

const crema = {
  id: 3,
  title: "Crema de manos",
  price: 190,
  freeShipping: false,
};

const shampoo = {
  id: 4,
  title: "Clear",
  price: 180,
  freeShipping: false,
};

const shoppingCart = {
  owner: {
    id: 123,
    name: "Ada Lovelace",
  },
  products: [],
  addProduct: function (product) {
    this.products.push(product);
  },
  getTotal: function () {
   
    let acumulador = 0;
    for (let i = 0; i < this.products.length; i++) {
     
      acumulador = acumulador + this.products[i].price;
    
    }

    console.log(`El precio total es ${acumulador}`); 
    
  },
};

shoppingCart.addProduct(shampoo);
shoppingCart.addProduct(perfume);
shoppingCart.addProduct(crema);
shoppingCart.addProduct(teclado);
// console.log(shoppingCart);

shoppingCart.getTotal();



// ```js
// // objeto que guarda la información que quien hace la compra y que productos agregó al carrito
// const shoppingCart = {
//   owner: {
//     id: 123,
//     name: "Ada Lovelace",
//   },
//   products: [],
// };

// // shoppingCart.addProduct();
// // shoppingCart.addProduct();
// // shoppingCart.addProduct();
// // shoppingCart.addProduct();
// // shoppingCart.addProduct();

// console.log(shoppingCart.getTotal()); // 1306.49
// ```
