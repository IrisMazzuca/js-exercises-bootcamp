// # Objetos 008 - carrito parte 3

// - Crear un documento con el nombre `obj_031.js`
// - Copiar y pegar el código de la solución al ejercicio `obj_030`
// - Ahora tenemos que agregarle un método a `shoppingCart` que se llame `render` para mostrar el listado de productos a comprar con su precio y al final de todo el precio final total

// ```js
// // COPIAR Y PEGAR LA SOLUCION EL EJERCICIO 030

// shoppingCart.render();
// /**** RESULTADO ESPERADO ****/

// // Listado de productos:
// // At vero elitr - $320
// // Dolore ipsum est eos - $250
// // Lorem sadipscing tempor - $120.5
// // Duo invidunt accusam - $530
// // Labore accusam eirmod. - $125.99
// // Total con IVA: $1629.2529

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

      acumulador += this.products[i].freeShipping ? 0 : 120;
    }

    acumulador *= 1.21;

    return acumulador; 
  },

  render: function () {
    let productInfo = "";
   
    for (let i = 0; i < this.products.length; i++) {
      productInfo += `${this.products[i].title} - ${this.products[i].price} \n`
  
    }
    return `Listado de productos:\n${productInfo}`
  },
};

shoppingCart.addProduct(shampoo);
shoppingCart.addProduct(perfume);
shoppingCart.addProduct(crema);
shoppingCart.addProduct(teclado);
// console.log(shoppingCart);
console.log(shoppingCart.getTotal());
shoppingCart.getTotal();
shoppingCart.render();