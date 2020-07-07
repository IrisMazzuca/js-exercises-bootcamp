const wait = (n) => new Promise((resolve) => setTimeout(resolve, n));
const random = (_) => ((Math.floor(Math.random() * 4) + 1) / 2) * 1000;

const ALUMNAS = [
  { nombre: "Ada Lovelace", codigoCurso: "A0001" },
  { nombre: "Hedy Lamarr", codigoCurso: "A0001" },
  { nombre: "Grace Hopper", codigoCurso: "A0001" },
  { nombre: "Katherine Johnson", codigoCurso: "A0002" },
  { nombre: "Mary Jackson", codigoCurso: "A0002" },
  { nombre: "Dorothy Vaughan", codigoCurso: "A0002" },
  { nombre: "Radia Perlman", codigoCurso: "A0003" },
  { nombre: "Carol Shaw", codigoCurso: "A0003" },
  { nombre: "Katie Bouman", codigoCurso: "A0003" },
];
const CURSOS = [
  { nombre: "1ra Generación", codigo: "A0001" },
  { nombre: "2da Generación", codigo: "A0002" },
  { nombre: "3ra Generación", codigo: "A0003" },
];

const fetchAlumnas = () => {
  return new Promise((resolve) => {
    wait(random()).then((_) => resolve(ALUMNAS));
  });
};

const fetchCursos = () => {
  return new Promise((resolve) => {
    wait(random()).then((_) => resolve(CURSOS));
  });
};

// 1. traer y asegurarme de tener todos los datos
// por ahora, algo así no es posible 😔


// 2. unir ambos arrays para que dentro de cada objeto alumna tenga el nombre del curso directamente
// 3. mostrar por consola el listado pedido

let alumnas = [];
let cursos = [];

fetchAlumnas().then(alumnasApi => {
  alumnas = alumnasApi;
  return fetchCursos()
}).then((cursosApi) => {
  cursos = cursosApi;
  console.log(alumnas, cursos, listaAlumnas(cursos, alumnas))
});


const listaAlumnas = (cursos, alumnas) => {
  return alumnas.map((alumna) => {
    let nombreCursoAlumna = cursos.find(curso => curso.codigo === alumna.codigoCurso).nombre

    return `${alumna.nombre} es parte del curso ${nombreCursoAlumna} `
  })
}