// ### **Ejercicio 9**

// - Escribir la función `alCuadradoYSumar`, que toma un número variable de parámetros, los eleva al cuadrado y retorna la suma de todos
// - Utilizar Rest Operator

// ```js
// alCuadradoYSumar(2, 4, 3); // 29
// alCuadradoYSumar(1, 2); // 5
// ```


const alCuadradoYSumar = (...num) => {
    return num.reduce((acc,valor) => {
        return acc += Math.pow(valor,2);
    }, 0);
};

console.log(alCuadradoYSumar(2, 4, 3)); // 29
alCuadradoYSumar(1, 2); // 5
