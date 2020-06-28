// **🤔 Adivinar palabra**

// - Crear un programa que elija una palabra al azar de un conjunto de palabras posibles, y permita al usuario intentar adivinarla. Por cada intento sucesivo, el programa debe ir mostrando como pista la palabra de forma parcial, empezando con la primera letra y agregando una letra a la vez. El programa debe terminar cuando se adivina la palabra o se muestran todas las letras de la misma. Por ejemplo, si la palabra a adivinar es LOVELACE, mostrar como sugerencia primero L, luego LO, luego LOV, luego LOVE, luego LOVEL, etc.

const frutas = [
    'Manzana',
    'Durazno',
    'Naranja',
    'Ciruela'
];

let letter = "";
let status = "";

let i = (Math.floor(Math.random()*frutas.length));

const random = frutas[i];

let quantity = random.length-1;
console.log(quantity,random);

    while (status === '' && quantity >=0) {
        
        input = prompt('Adivine la fruta!🍊🍎🍒🍑');
        
        if (input === random) {
            status = 'Gano';
        } else {
            letter = frutas[i].slice(0,-quantity);
            console.log(letter,quantity,random);
            alert(`Pista: la primer letra es ${letter}`);
        }
        quantity--;    
    };
    alert(`Ganaste!`);
