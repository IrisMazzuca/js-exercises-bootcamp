// **🧨 Explosión**

// - Crear un programa que permita ingresar una serie de números separados por espacio. El programa debe disminuyendo cada número en 1 por ronda e ir mostrando el resultado (en consola, o en un string concatenado) hasta que todos lleguen a 0 (cuando lleguen a no deben seguir disminuyendo) y se produzca la explosión. Ejemplo

// ```
// ⏱ 3 1 0 2
// ⏱ 2 0 0 1
// ⏱ 1 0 0 0
// 💥💥💥💥💥
// ```

let one = Number(prompt(`Ingrese primer número`));
let two = Number(prompt(`Ingrese segundo número`));
let three = Number(prompt(`Ingrese tercer número`));
let four = Number(prompt(`Ingrese cuarto número`));

console.log(`La serie de números elegida es: ⏱ ${one} ${two} ${three} ${four}`);


while (!(one==0 && two==0)) {

    if(one > 0){
        one--;
    }
  
    two--;
    three--;
    four--;

    console.log(`⏱ ${one} ${two} ${three} ${four}`);
    
};

console.log(`💥💥💥💥💥`);