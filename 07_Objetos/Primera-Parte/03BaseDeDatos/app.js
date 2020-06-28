// ### 03 - base de datos

// - Nos pasaron un listado de personas y necesitamos guardarlo en una base de datos
// - Los datos que tenemos son un id, email, nombre y teléfono
// - Crear un objeto para cada persona que nos pasaron
// - Mostrar por consola todos los objetos creados

// ```js
// // DATOS DE LAS PERSONAS QUE NECESITAMOS GUARDAR EN UNA BASE DE DATOS
// // 1,ada@gmail.com,Ada Lovelace,1234567890
// // 2,grace@hotmail.com,Grace Hopper,0987654321
// // 3,hedy@gmail.com,Hedy Lamarr,6789054321
// // 4,radia@yahoo.com,Radia Perlman,1234509876
// // 5,Sheryl@facebook.com,Sheryl Sandberg,5432167890

// // Ejemplo del formato de cada objeto: 0,ejemplo@terra.com,Ejemplo,1029384756
// // var example = {
// //   id: 0,
// //   nombre: "Ejemplo",
// //   email: "ejemplo@terra.com",
// //   telefono: "1029384756"
// // }

// // Escribi aca abajo los objetos para cada uno de las personas que nos enviaron

const persona1 = {
    id: 1,
    nombre: 'Ada Lovelace',
    email: 'ada@gmail.com',
    telefono: 1234567890,
}
const persona2 = {
    id: 2,
    nombre: 'Grace Hopper',
    email: 'grace@hotmail.com',
    telefono: 0987654321,
}
const persona3 = {
    id: 3,
    nombre: 'Hedy Lamarr',
    email: 'hedy@gmail.com',
    telefono: 6789054321,
}
const persona4 = {
    id: 4,
    nombre: 'Radia Perlman',
    email: 'radia@yahoo.com',
    telefono: 1234509876,
}
const persona5 = {
    id: 5,
    nombre: "Sheryl Sandberg",
    email: "Sheryl@facebook.com",
    telefono: 5432167890,
};


// - Nos pidieron mostrar en la consola los siguientes datos de cada persona:

// ```js
// //// TENEMOS QUE MOSTRAR LOS SIGUIENTES DATOS

// 1. El nombre de Ada:
console.log(persona1.nombre);

// 2. El ID de Grace
console.log(persona2.id);

// 3. El email de Hedy
console.log(persona3.email);

// 4. El ID y nombre de Radia
console.log(persona4.id, persona4.nombre);

// 5. El telefono de Sheryl
console.log(persona5.telefono);
