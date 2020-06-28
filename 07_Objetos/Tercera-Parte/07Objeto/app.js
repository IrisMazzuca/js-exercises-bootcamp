// # Objetos 007 - carrito parte 2

// - Copiar y pegar el código de la solución al ejercicio anterior
// - Debido a un cambio de requerimiento, el precio final total se calcula distinto
// - Si un producto no tiene free shipping (`freeShipping` es `false`) entonces al precio del producto hay que sumarle 120
// - Si tiene free shipping (`freeShipping` es `true`) entonces se toma el precio que está en el objeto y no se le suma nada
// - Una vez calculado el total, hay que agregar un 21% de IVA

// ```js
// console.log(shoppingCart.getTotal()); // 1871.2529
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

      acumulador += this.products[i].freeShipping ? 0 : 120;
    }

    acumulador *= 1.21;

    return acumulador; 
  },
};

shoppingCart.addProduct(shampoo);
shoppingCart.addProduct(perfume);
shoppingCart.addProduct(crema);
shoppingCart.addProduct(teclado);
// console.log(shoppingCart);
console.log(shoppingCart.getTotal());
shoppingCart.getTotal();