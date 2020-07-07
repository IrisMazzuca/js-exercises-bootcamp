//## Asincronismo

//Copia el código HTML y JS dado más abajo
//Implementá las acciones en el orden y tiempos propuestos por el enunciado

function clickCaja(e) {
  const el = document.querySelector(".box");

  // 1. Cambiar el texto del elemento a "¡Clickeado!"

  // 2. Hacer que el elemento sea un círculo después de 2 segundos (agregar la clase circle)

  // 3. Hacer que el elemento sea naranja después de medio segundo (agregar la clase orange)

  // 4. Hacer que el elemento sea un cuadrado después de un cuarto de segundo (remover la clase circle)

  // 5. Hacer que el elemento sea violeta desdpués de un tercio de segundo (remover la clase orange y agregar la clase purple)

  // 6. Ocultar el elemento después de medio segundo (agregar la clase fadeOut)


  el.textContent = "¡Clickeado!"
  setTimeout(() => {
    el.classList.add("circle")
    setTimeout(() => {
      el.classList.add("orange")
      setTimeout(() => {
        el.classList.remove("circle")
        setTimeout(() => {
          el.classList.replace("orange", "purple")
          setTimeout(() => {
            el.classList.add("fadeOut")
          }, 500)
        }, 250)
      }, 500)
    }, 500)
  }, 2000)


}

const box = document.querySelector(".box");
box.addEventListener("click", clickCaja);
