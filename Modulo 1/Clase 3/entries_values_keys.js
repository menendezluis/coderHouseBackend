let impuestos = {
  IVA: {
    nombre: "IVA",
    porcentaje: 21,
    tipo: "impuesto",
  },
  IIBB: {
    nombre: "IIBB",
    porcentaje: 3,
    tipo: "impuesto",
  },
  GANANCIAS: {
    nombre: "GANANCIAS",
    porcentaje: 35,
    tipo: "impuesto",
  },
  SUSS: {
    nombre: "SUSS",
    porcentaje: 0.5,
    tipo: "contribucion",
  },
  ARBA: {
    nombre: "ARBA",
    porcentaje: 0.5,
    tipo: "contribucion",
  },
  IOMA: {
    nombre: "IOMA",
    porcentaje: 0.5,
    tipo: "contribucion",
  },
};

//console.log(impuestos.IVA.nombre);
let miPrimeraLlave = Object.keys(impuestos);

let miSegundaLlave = Object.keys(impuestos.IVA);

//console.log(miPrimeraLlave, miSegundaLlave);

//console.log(miPrimeraLlave[0], miSegundaLlave[0]);

//miObjecto[0][0]
console.log(impuestos[miPrimeraLlave[2]][miSegundaLlave[1]]);
//console.log(impuestos.IVA.porcentaje);
// //Entries
// //Devuelve un array de arrays con los pares clave-valor
//console.log(Object.entries(impuestos));
//console.log(impuestos);
