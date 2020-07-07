//Crear un programa que pregunte por el día, el mes y devuelva la estación del año correspondiente, en caso contario lanzar una excepcion que diga si el dia o el mes es invilido.


const getSeason = (dia, mes) => {
  const meses = ["enero", "febrero", "marzo", "abril", "mayo", "junio", "julio", "agosto", "septiembre", "octubre", "diciembre"]
  const verano = ["enero", "febrero"]
  const otoño = ["abril", "mayo"]
  const invierno = ["julio", "agosto"]

  if (dia > 31 || dia <= 0 || !meses.includes(mes)) {
    throw {
      nombre: "error",
      mensaje: "Mes o dia no son validos"
    }

  } else {
    if (dia < 21 && mes === "marzo" || verano.includes(mes) || dia >= 21 && mes === "diciembre") {
      return "Verano"
    }
    if (dia < 21 && mes === "junio" || otoño.includes(mes) || dia >= 21 && mes === "marzo") {
      return "Otoño"
    }
    if (dia < 21 && mes === "septiembre" || invierno.includes(mes) || dia >= 21 && mes === "junio") {
      return "Invierno"
    } else {
      return "Primavera"

    }
  }
}


try {
  console.log(getSeason(37, "enero"))
} catch (error) {
  console.log("No se puede imprimir porque", error.mensaje);
}

