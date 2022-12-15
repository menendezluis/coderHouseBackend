// Path: Modulo 1/Clase 5/calcPromises.js
const sumar = (a, b) => {
  return new Promise((resolve, reject) => {
    if (a === 0 || b === 0) {
      reject("Operacion innecesaria");
    }
    if (a + b < 0) {
      reject("La calculadora solo debe devolver valores positivos");
    }
    resolve(a + b);
  });
};
const restar = (a, b) => {
  return new Promise((resolve, reject) => {
    if (a === 0 || b === 0) {
      reject("Operacion invalida");
    }
    if (a - b < 0) {
      reject("La calculadora solo debe devolver valores positivos");
    }
    resolve(a - b);
  });
};
const multiplicar = (a, b) => {
  return new Promise((resolve, reject) => {
    if (a < 0 || b < 0) {
      reject("La calculadora solo puede multiplicar numeros positivos");
    }
    resolve(a * b);
  });
};
const dividir = (a, b) => {
  return new Promise((resolve, reject) => {
    if (a < 0 || b < 0) {
      reject("La calculadora solo puede dividir numeros positivos");
    }
    if (b === 0) {
      reject("La calculadora no puede dividir por cero");
    }
    resolve(a / b);
  });
};
const potencia = (a, b) => {
  return new Promise((resolve, reject) => {
    if (a < 0 || b < 0) {
      reject("La calculadora solo puede elevar numeros positivos");
    }
    resolve(a ** b);
  });
};
const modulo = (a, b) => {
  return new Promise((resolve, reject) => {
    if (a < 0 || b < 0) {
      reject(
        "La calculadora solo puede calcular el modulo de numeros positivos"
      );
    }
    resolve(a % b);
  });
};
const calcular = (a, b, operacion) => {
  return new Promise((resolve, reject) => {
    switch (operacion) {
      case "+":
        sumar(a, b)
          .then((resultado) => {
            resolve(resultado);
          })
          .catch((error) => {
            reject(error);
          });
        break;
      case "-":
        restar(a, b)
          .then((resultado) => {
            resolve(resultado);
          })
          .catch((error) => {
            reject(error);
          });
        break;
      case "*":
        multiplicar(a, b)
          .then((resultado) => {
            resolve(resultado);
          })
          .catch((error) => {
            reject(error);
          });
        break;
      case "/":
        dividir(a, b)
          .then((resultado) => {
            resolve(resultado);
          })
          .catch((error) => {
            reject(error);
          });
        break;
      case "**":
        potencia(a, b)
          .then((resultado) => {
            resolve(resultado);
          })
          .catch((error) => {
            reject(error);
          });
        break;
      case "%":
        modulo(a, b)
          .then((resultado) => {
            resolve(resultado);
          })
          .catch((error) => {
            reject(error);
          });
        break;
      default:
        reject("Operacion invalida");
    }
  });
};
const calcularPromise = (a, b, callback) => {
  return new Promise((resolve, reject) => {
    callback(a, b)
      .then((resultado) => {
        resolve(resultado);
      })
      .catch((error) => {
        reject(error);
      });
  });
};

module.exports = {
  sumar,
  restar,
  multiplicar,
  dividir,
  potencia,
  modulo,
  calcular,
  calcularPromise,
};
