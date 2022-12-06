let miArreglo = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];

const miFuncionMap = (arreglo, callback) => {
  let nuevoArreglo = [];
  for (let i = 0; i < arreglo.length; i++) {
    nuevoArreglo.push(callback(arreglo[i]));
  }
  return nuevoArreglo;
};

const miCallback = (elemento) => elemento * 2;
// usando miFuncionMap y miCallback para multiplicar por 2 cada elemento del arreglo
let nuevoArreglo = miFuncionMap(miArreglo, miCallback);
//console.log(nuevoArreglo); // [0, 2, 4, 6, 8, 10, 12, 14, 16, 18]

// creando un callback en linea
//console.log(miFuncionMap(miArreglo, (elemento) => elemento * 3)); // [0, 3, 6, 9, 12, 15, 18, 21, 24, 27]

// usando prototype vamos a crear nuestro nuevo metodo map
Array.prototype.miMap = function (callback) {
  let nuevoArreglo = [];
  for (let i = 0; i < this.length; i++) {
    nuevoArreglo.push(callback(this[i]));
  }
  return nuevoArreglo.sort();
};

let arregloPrueba = [1, 4, 10, 7, 5, 2, 3, 6, 9, 8];
let arregloNombres = ["Juan", "Pedro", "Maria", "Jose", "Ana", "Luis"];
console.log(arregloNombres.miMap((elemento) => elemento)); // [2, 4, 6, 8, 10]
