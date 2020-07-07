// ## Promesas

// ## ** Ejercicio 2 **

//   - Partiendo de la solución del anterior, utilizando varios`setTimeout`
//     - ¿Cómo haríamos la misma implementación utilizando promesas, para evitar el callback hell ?
//       - Podés utilizar la función vista como ejemplo`delay`:


// const delay = (time) =>
//   new Promise((resolveCallback) => setTimeout(resolveCallback, time));

const el = document.querySelector(".box");

const delay = time => new Promise(resolveCallback => setTimeout(resolveCallback, time));

function clickCaja(e) {
  el.textContent = "¡Clickeado!"

  delay(2000)
    .then(() => el.classList.add("circle"))
    .then(() => delay(500))
    .then(() => el.classList.add("orange"))
    .then(() => delay(500))
    .then(() => el.classList.remove("circle"))
    .then(() => delay(250))
    .then(() => el.classList.replace("orange", "purple"))
    .then(() => delay(500))
    .then(() => el.classList.add("fadeOut"))
}

const box = document.querySelector(".box");
box.addEventListener("click", clickCaja);

