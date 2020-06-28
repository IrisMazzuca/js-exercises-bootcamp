const filtarSolista = (artistas) =>
  artistas.filter((artista) => artista.solista);

// const filtarSolista = (artistas) => {
//   return artistas.filter((artista) => {
//     return artista.solista;
//   });
// };
// artistas []
// artista {}
// artistaConMasEntradas {}


// ej 2
const artistasPorEdad = (artistas, edad) =>{
  return artistas.filter((artista) => artista.edad === edad)
 
}

//ej 3

const cantidadDeArtistasPorInstrumento = (artistas) => {
 
  return artistas.reduce( (acc, artista) => {
    if(acc[artista.instrumento]){
        acc[artista.instrumento] = acc[artista.instrumento] + 1;
    }else{
        acc[artista.instrumento] = 1
    }
    return acc
} ,{}) 
}
 

//ej 4

const cantidadDeArtistasPorGenero = (artistas) => {
  return artistas.reduce ((acum,artista) => {
    if(acum[artista.genero]) {
      acum[artista.genero] += 1;
    } else {
      acum[artista.genero] = 1;
    }
    return acum
  }, {})
}

//ej 5


const artistasConMasDiscosQue = (artistas, cantidadDeDiscos) => {
    
  return artistas.filter( artista => 
      artista.discos.length > cantidadDeDiscos
  ).sort((a, b) => b.discos.length - a.discos.length)
}


//ej 6
const artistaConMasEntradasVendida = (artistas) =>
  artistas.reduce((artistaConMasEntradas, artista) =>
    artistaConMasEntradas.ultimoRecital.entradasVendidas >
    artista.ultimoRecital.entradasVendidas
      ? artistaConMasEntradas
      : artista
);

//ej 7
const artistaConMayorRecaudacion = (artistas) => {
  return artistas.reduce((artistaConMayorRecaudacion, artista) => {
    return artistaConMayorRecaudacion.ultimoRecital.entradasVendidas * artistaConMayorRecaudacion.ultimoRecital.costoEntradas >
      artista.ultimoRecital.entradasVendidas * artista.ultimoRecital.costoEntradas
      ? artistaConMayorRecaudacion
      : artista
  })
}

//ej 8

const artistasConDiscoEnAnio = (artistas,anio) => {
   
  return artistas.filter( artista => artista.discos.some(disco => {
    
    return  disco.anioLanzamiento == anio;

  } ) )
}


// const artistasConDiscoEnAnio = (artistas, anio) => {
    
//   return artistas.filter( artista => artista.discos.reduce( (acc, disco) => {
   
//    return acc || disco.anioLanzamiento == anio

//   } ,false)  )
// }


//ej 9
const artistaConMasCopias = (artistas) => {
  
  return artistas.reduce((artistaConMasDiscos,artista) => 
  
    artistaConMasDiscos.discos.reduce((acc,disco) => {
      return acc += disco.copiasVendidas;
    },0) > artista.discos.reduce((acc,disco) => {
      return acc += disco.copiasVendidas;
    },0) 
    ? artistaConMasDiscos 
    : artista
  )
}

// const artistaConMasCopias = (artistas) => {
//   return artistas.reduce((artistaConMasCopias, artista) => {
//     if (cantidadDeCopiasVendidos(artistaConMasCopias.discos) > cantidadDeCopiasVendidos(artista.discos)) {
//       return artistaConMasCopias;
//     }
//     return artista;
//   })
// }

// const cantidadDeCopiasVendidos = (discos) => {
//   return discos.reduce((accum, disco) => {
//     return accum + disco.copiasVendidas
//   }, 0)
// }

