const dividir = (dividendo, divisor) => {
  return new Promise((resolve, reject) => {
    if (divisor === 0) {
      reject("No se puede dividir por 0");
    }
    resolve(dividendo / divisor);
  });
};

/*dividir(10, 2)
  .then((resultado) => console.log("then: ", resultado))
  .catch((error) => console.log("error", error));*/
// funcion asincronica
const dividirAsync = async (dividendo, divisor) => {
  try {
    let resultado = await dividir(dividendo, divisor);

    console.log("try: ", resultado);
  } catch (error) {
    console.log(error);
  }
};

dividirAsync(10, 0);
