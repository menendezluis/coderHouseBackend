//Exponcencial ** ertmiete hacer el equivalente a la operacion Math.pow(base, exp)
//ejemplo: Math.pow(2, 3) que es 2 elevado a la 3
/*let valores = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

let nuevosValores = valores.map((valor) => valor ** 2);
//valores.map((valor, indice) => Math.pow(valor, indice));
console.log(nuevosValores); //[1, 2, 9, 64, 625, 7776, 117649, 2097152, 43046721, 1000000000]

// el codigo anterior se lee de la siguiente forma
// se recorre el array valores y se le aplica la operacion de exponencial a cada valor
// el primer valor es 1 y el indice es 0, por lo tanto 1 elevado a la 0 es 1
// el segundo valor es 2 y el indice es 1, por lo tanto 2 elevado a la 1 es 2
// el tercer valor es 3 y el indice es 2, por lo tanto 3 elevado a la 2 es 9
// el cuarto valor es 4 y el indice es 3, por lo tanto 4 elevado a la 3 es 64
// el quinto valor es 5 y el indice es 4, por lo tanto 5 elevado a la 4 es 625
// el sexto valor es 6 y el indice es 5, por lo tanto 6 elevado a la 5 es 7776
// el septimo valor es 7 y el indice es 6, por lo tanto 7 elevado a la 6 es 117649
// el octavo valor es 8 y el indice es 7, por lo tanto 8 elevado a la 7 es 2097152
// el noveno valor es 9 y el indice es 8, por lo tanto 9 elevado a la 8 es 43046721
// el decimo valor es 10 y el indice es 9, por lo tanto 10 elevado a la 9 es 1000000000

// Includes: devuelve true si el elemento buscado esta en el array
*/
let nombres = ["Juan", "Luciano", "Emiliano", "Ceci", "Luis"];

let nombre = "Luis";

const buscarNombre = (nombre) => {
  return nombres.includes(nombre);
};

function handleBuscarNombre(nombre) {
  if (buscarNombre(nombre)) {
    console.log(`El nombre ${nombre} se encuentra en el array`);
  } else {
    console.log(`El nombre ${nombre} no se encuentra en el array`);
  }
}

handleBuscarNombre(nombre);

console.log(nombres.includes(nombre));
