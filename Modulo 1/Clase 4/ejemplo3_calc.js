const sumar = (a, b) => a + b;
const restar = (a, b) => a - b;
const multiplicar = (a, b) => a * b;
const dividir = (a, b) => a / b;
const potencia = (a, b) => a ** b;
const modulo = (a, b) => a % b;
//const calcular = (a, b, operacion) => operacion(a, b);

const calcular = (a, b, callback) => {
  /*console.log(
    `Voy a realizar la operacion ${callback.name} con los valores ${a} y ${b}`
  );*/
  let resultado = callback(a, b);
  console.log(
    `El resultado de la operacion ${callback.name} con los valores ${a} y ${b} es ${resultado}`
  );
};

calcular(2, 5, sumar);
calcular(2, 5, restar);
calcular(2, 5, multiplicar);
calcular(2, 5, dividir);
calcular(2, 5, potencia);
calcular(2, 5, modulo);
