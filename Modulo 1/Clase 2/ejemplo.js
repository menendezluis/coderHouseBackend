/*const pais = {
  nombre: "Argentina",
  capital: "Buenos Aires",
  poblacion: 45000000,
  idioma: "Español",
  moneda: "Peso",
};

console.log(pais.nombre);
// //Entries

// //Devuelve un array de arrays con los pares clave-valor
console.log("entries:", Object.entries(pais));
console.log("keys:", Object.keys(pais));

//console.log(pais["nombre"] === "Argentina");


let arreglo1 = ["Marta", "Pedro", "Juan"];
let arreglo2 = ["Maria", "Jose", "Diego"];

let arreglo3 = [arreglo1, arreglo2];

console.log(arreglo3);


const objetos = [
  {
    manzanas: 3,
    peras: 2,
    uvas: 0,
    leche: 4,
    pan: 2,
  },
  {
    manzanas: 1,
    peras: 1,
    uvas: 5,
    carne: 8,
    pan: 10,
  },
];
// obtener los tipos de productos

let tienda1 = Object.keys(objetos[0]);
let tienda2 = Object.keys(objetos[1]);
let valores1 = Object.values(objetos[0]); // [3, 2, 0, 4, 2]
let valores2 = Object.values(objetos[1]);
// en cual tienda puedo encontrar carne
//console.log("tienda1", tienda1.includes("carne"));
//console.log("tienda2:", tienda2.includes("carne"));

let total1 = 0;
let total2 = 0;

let miArreglo = valores1.map((valor) => valor * 1.12); // [3.36, 2.24, 0, 4.48, 2.24]

valores1.forEach((valor) => {
  total1 += valor;
});
valores2.forEach((valor) => {
  total2 += valor;
});
console.log("total1", total1);
console.log("total2", total2);


let cadena = ` Hola `;

let orig = "a   foo      b";
console.log("hola", cadena);
console.log(`hola${cadena.trim()}`);

//flat ejemplo

let miArreglo = [
  1,
  2,
  3,
  4,
  5,
  6,
  7,
  8,
  9,
  [10, 11, 12, 13],
  14,
  [15, 16, 17, 18, 19],
  20,
];

console.log(miArreglo.flat());
