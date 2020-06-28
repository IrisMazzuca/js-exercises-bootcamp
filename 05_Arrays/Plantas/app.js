// **Plantas**

// - Crear un programa que permita ingresar una lista de plantas con una oruga y una calavera (veneno) entre ellas. La oruga se come todas las plantas que hay a su derecha, hasta que se encuentra con el veneno. El programa debe mostrar las plantas sobrevivientes, que son todas las que están a la izquierda de la oruga y a la derecha del veneno. Ejemplo:

// ```javascript
// // Ingrese plantas y oruga: 🌱🌻🌱🐛🌱🌸🌱🌱💀🌷
// // Plantas sobrevivientes: 🌱🌻🌱🌷
// ```

/*
-string
-array y recorrerlo

*/

const plantas = "🌱 🌻 🌱 🐛 🌱 🌸 🌱 🌱 💀 🌷".split(" ");

const oruga = "🐛";
const calavera = "💀";
console.log(oruga, calavera);

const indiceOruga = plantas.indexOf("🐛");
const indiceVeneno = plantas.indexOf("💀")+1;
console.log(indiceOruga, indiceVeneno);
console.log(plantas.length);

plantas.splice(indiceOruga, indiceVeneno);
console.log(plantas);




