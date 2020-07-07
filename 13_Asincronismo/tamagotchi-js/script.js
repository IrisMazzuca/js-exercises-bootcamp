const btnAlimentar = document.getElementById("ALIMENTAR");
const btnJugar = document.getElementById("JUGAR");
const btnDormir = document.getElementById("DORMIR");
const btnVacunar = document.getElementById("VACUNAR");
const btnBañar = document.getElementById("BAÑAR");
const btnRetar = document.getElementById("RETAR");
const btnAcariciar = document.getElementById("ACARICIAR");
const energia = document.getElementById("energia");
const felicidad = document.getElementById("felicidad");
const salud = document.getElementById("salud");
const limpieza = document.getElementById("limpieza");


const getRandomNumber = () => {
  return Math.ceil(Math.random() * 10);

}

const variables = [energia, felicidad, salud, limpieza]
variables.forEach(variable => {
  variable.textContent = getRandomNumber()
});

const modFelicidad = () => { }
const modEnergia = () => { }
const modLimpieza = () => { }
const modSalud = () => { }

const alimentar = () => {
  felicidad.textContent = Number(felicidad.textContent) + 2;
  energia.textContent = Number(energia.textContent) + 3;
}
const jugar = () => {
  felicidad.textContent = Number(felicidad.textContent) + 2;
  energia.textContent = Number(energia.textContent) - 2;
  energia.textContent = Number(energia.textContent) - 2;
}

