// arreglo de prueba
let miArreglo = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];

let nuevoArreglo = miArreglo.map((elemento) => elemento + 1); // [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

let nuevoArreglo2 = miArreglo.map((elemento) => elemento * 2); // [0, 2, 4, 6, 8, 10, 12, 14, 16, 18]

let nuevoArreglo3 = miArreglo.map((elemento) => elemento * elemento); // [0, 1, 4, 9, 16, 25, 36, 49, 64, 81]

let nuevoArreglo4 = miArreglo.map((elemento) => "a"); // ["a", "a", "a", "a", "a", "a", "a", "a", "a", "a"]

const funcionCallback = (elemento) => {
  if (elemento % 2 === 0) {
    // si es multiplo de dos
    return elemento;
  } else {
    return "no es par";
  }
};

let nuevoArregloConArrowFunction = miArreglo.map((dato) => {
  if (dato % 2 === 0) {
    // si es multiplo de dos
    return dato + "es par";
  } else {
    return dato + "no es par";
  }
});

let nuevoArreglo5 = miArreglo.map(funcionCallback); // [0, "no es par", 2, "no es par", 4, "no es par", 6, "no es par", 8, "no es par"]

//console.log(nuevoArreglo5);
console.log(nuevoArregloConArrowFunction);
