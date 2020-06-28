// ## Comprar lista de productos

// - Crear una función que dado un objeto con productos y precios, y la cantidad de dinero disponible, `true` si puede comprarlos a todos o `false` si no

// ```javascript
const products = { cookies: 60, chocolate: 110, soda: 120 };
const money = 300;
// canBuyAllProduct(money, products); // returns true
// ```


const valorTotal = (objeto) => { 
        
    return (Object.values(objeto)).reduce((acumulador,valor) => {

        return acumulador + valor;
    });
};

const canBuyAllProduct = (money, objeto) => {
  
    const compras = valorTotal(objeto) <= money
  
    return compras;
};

  