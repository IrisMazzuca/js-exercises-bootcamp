// # Objetos 001

// - Declarar la variable **holaMundo** y asignarle un objeto con las siguiente propiedades:
//   - mostrarMensaje: una función que muestra en consola el mensaje '¡Hola mundo!'
//   - obtenerMensaje: una función que retorna un string con el mensaje "¡Alo mundo!"

// ```js
// /// escribi aca tu solucion

const holaMundo = {
    mostrarMensaje: function() {
        console.log("Hola Mundo!");
    },
    obtenerMensaje: function() {
        return "Alo Mundo!"
    }
}

holaMundo.mostrarMensaje(); // ¡Hola mundo!
console.log(holaMundo.obtenerMensaje()); // ¡Alo mundo!
// ```

