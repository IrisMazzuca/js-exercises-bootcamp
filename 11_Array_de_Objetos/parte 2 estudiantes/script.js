//ej1
const estudiantesPorHechizo = (hechizo, estudiantes) => {
    return estudiantes.filter(estudiante => {
        return estudiante.hechizoPreferido === hechizo;
    });
}

//ej2
const estudiantesConMasAmiguesQue = (estudiantes, cantAmigos) => {
    return estudiantes.filter(estudiante => estudiante.amigues.length > cantAmigos);
}

//ej3
const estudiantesConFamiliares = (estudiantes, familiares) => {
    return estudiantes.filter(estudiante => {
        return familiares.includes(estudiante.familiar);
    });

}

//ej4
// const obtenerPromedioDeEstudiante = (estudiante) => {
//     return promedioMaterias(estudiante.materias);

//   }

//   function promedioMaterias(arrayDeMaterias) {
//     const sumaPromedios = arrayDeMaterias.reduce((accum, materia) => {
//       return accum + materia.promedio
//     }, 0);
//     return sumaPromedios / arrayDeMaterias.length

//   }

const obtenerPromedioDeEstudiante = (estudiante) => {
    const sumaPromedios = estudiante.materias.reduce((acc, materia) => acc + materia.promedio, 0);
    return sumaPromedios / estudiante.materias.length;
}


//ej5

const estudiantesConPromedioMayorA = (numero, estudiantes) => {
    return estudiantes.filter(estudiante => {
        return obtenerPromedioDeEstudiante(estudiante) > numero;
    });
}

//ej6

const mejoresEstudiantesPorCasa = (nombreCasa, estudiantes) => estudiantesConPromedioMayorA(6, estudiantes).filter(estudiante => estudiante.casa === nombreCasa);


//ej7
//7. `casaConMejoresEstudiantes`, que tome por parámetro un array de estudiantes y devuelva el nombre de la casa que tiene más cantidad de estudiantes con promedio total mayor a 6 (usar la función anterior)

const casaConMejoresEstudiantes = (estudiantes) => {
    // ["casa1","casa2"]
    const casas = nombresDeCasas(estudiantes)
    // [16,18]
    const alumnosPorCasa = casas.map(nombre => mejoresEstudiantesPorCasa(nombre, estudiantes).length)
    // 18
    const mayorAlumnos = alumnosPorCasa.reduce((cantdTotal, alumno) => cantdTotal > alumno ? cantdTotal : alumno)
    // 1
    const indice = alumnosPorCasa.indexOf(mayorAlumnos);
    // casa2
    return casas[indice];

};

const nombresDeCasas = (estudiantes) => {

    return estudiantes.reduce((acumulador, estudiante) => {
        if (acumulador.indexOf(estudiante.casa) === -1) {
            acumulador.push(estudiante.casa);
        }
        return acumulador;
    }, [])

    // const casas = [];
    // for (let i = 0; i < estudiantes.length; i++) {

    //     if (casas.indexOf(estudiantes[i].casa) === -1) {
    //         casas.push(estudiantes[i].casa)
    //     }

    // }

    // return casas;
}

//Ej8
//toma por parámetro el nombre de una materia y un array de estudiantes y devuelva una array con les estudiantes que tienen en dicha materia un promedio superior a 6

const estudiantesPorMateriaAprobada = (estudiantes, nombreMateria) => {
    return estudiantes.filter(estudiante => estudiante.materias.some(materia => materia.nombre === nombreMateria && materia.promedio > 6)
    )
}


//Ej9
//toma por parámetro un array de estudiantes y devuelva un array con objetos, habiendo un objeto por estudiante, donde cada objeto tiene las siguientes propiedades: `nombre`, `casa`, `promedio`, `amigues`(cantidad)


const obtenerInfoResumida = (estudiantesTest2) => {

    return estudiantesTest2.reduce((acumulador, estudiante) => {
        const nombre = estudiante.nombreCompleto.nombre;
        const casa = estudiante.casa;
        const promedio = obtenerPromedioDeEstudiante(estudiante);
        const amigues = estudiante.amigues.length

        const obj = {
            nombre: nombre,
            casa: casa,
            promedio: promedio,
            amigues: amigues,
        }

        acumulador.push(obj);

        return acumulador
    }, [])
}

// const obtenerInfoResumida = (estudiantes) => {
//     return estudiantes.map((estudiante) => {


//         return {
//             nombre: estudiante.nombreCompleto.nombre,
//             casa: estudiante.casa,
//             promedio: obtenerPromedioDeEstudiante(estudiante),
//             amigues: estudiante.amigues.length,
//         }
//     })


// }


//Ej10
//10. `cantidadDeEstudiantesPorCasa`, que tome por parámetro un array de estudiantes y devuelva un objeto con los nombres de las casas como propiedades y la cantidad de estudiantes por casa(no debe contar amigues)

const cantidadDeEstudiantesPorCasa = (estudiantes) => {

    return estudiantes.reduce((accum, estudiante) => {

        //opcion 1
        return { ...accum, [estudiante.casa]: (accum[estudiante.casa] + 1) || 1 }

        //opcion 2
        // return (accum[estudiante.casa])
        // ? {...accum , [estudiante.casa] : accum[estudiante.casa] + 1}
        // : {...accum , [estudiante.casa] : 1}

        //opcion 3 
        //  (accum[estudiante.casa])
        //  ? accum[estudiante.casa] += 1
        //  : accum[estudiante.casa] = 1;
        // return accum; 

    }, {});

}


//Ej11
// 11. `cantidadDeEstudiantesPorMateriaAprobada`, que tome por parámetro un array de estudiantes y devuelva un objeto con los nombres de las materias como propiedades y la cantidad de estudiantes que aprobaron dicha materia(promedio superior a 6)

const cantidadDeEstudiantesPorMateriaAprobada = (estudiantesTest2) => {

    return estudiantesTest2.reduce((materias, estudiante) => {
        const materiasAprobadas = estudiante.materias.filter((materia) => {
            return materia.promedio > 6
        });

        materiasAprobadas.forEach(materia => {
            if (!materias[materia.nombre]) {
                materias[materia.nombre] = 1;
            } else {
                materias[materia.nombre]++;
            }
        })
        return materias;

    }, {})

}

//Ej 12
// 12. `promedioPorMateria`, que tome por parámetro un array de estudiantes y devuelva un objeto con los nombres de las materias como propiedades y el promedio total de dicha materia entre todes les estudiantes(suma de todos los promedios divido la cantidad de estudiantes)

// const promedioPorMateria = (estudiantesTest2) => {

//     return estudiantesTest2.reduce((materias, estudiante) => {
//         const arrayMaterias = estudiante.materias.map((materia) => {
//             return materia.nombre
//         });

//         const cantidad = estudiantesTest2.length;

//         const sumaPorMateria = estudiante.materias.filter((materia) => {
//             return materia.promedio;

//         }, {})
//         console.log(sumaPorMateria)

//         return materias;

//     }, {})

// }

function getNombreMaterias(estudiantes) {
    const materiasPorEstudiantes = estudiantes.map(e => e.materias.map(m => m.nombre))
    const flatten = materiasPorEstudiantes.reduce((accum, materias) => accum.concat(materias), [])
    return [...new Set(flatten)]
}

function getPromedioPorMateria(materia, estudiantes) {
    const promedios = estudiantes.reduce((accum, estudiante) => {
        const promedioEstudiante = estudiante.materias.find(m => m.nombre === materia)

        return accum + promedioEstudiante.promedio
    }, 0)
    return promedios / estudiantes.length
}

function promedioPorMateria(estudiantes) {
    return estudiantes[0].materias.reduce((accum, materia) => {
        accum[materia.nombre] = getPromedioPorMateria(materia.nombre, estudiantes)
        return accum
    }, {})
}

function promedioPorMateria1(estudiantes) {
    const materias = getNombreMaterias(estudiantes)
    return materias.reduce((accum, materia) => {
        accum[materia] = getPromedioPorMateria(materia, estudiantes)
        return accum
    }, {})
}


// 13. `familiarPreferido`, que tome por parámetro un array de estudiantes y devuelva el familiar que más estudiantes tienen

const familiarPreferido = (estudiantes) => {

    const animales = estudiantes.reduce((acc, estudiante) => {

        acc[estudiante.familiar] ? acc[estudiante.familiar] += 1 : acc[estudiante.familiar] = 1
        return acc
    }, {})
    //lechuza : 1, gato: 2

    const cantidadPorAnimal = Object.values(animales); //[1, 2]

    let max = Math.max(...cantidadPorAnimal); // 2

    let index = cantidadPorAnimal.indexOf(max); //i de 2

    let animalPreferido = Object.keys(animales)[index]; // key de 2
    console.log(animales);

    return animalPreferido;
}
