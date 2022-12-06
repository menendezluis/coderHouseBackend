const dividir = (dividendom, divisor) => {
  return new Promise((resolve, reject) => {
    if (divisor === 0) {
      reject("No se puede dividir por 0");
    }
    resolve(dividendom / divisor);
  });
};

//dividir(10, 5)
//  .then((resultado) => console.log("ok ", resultado))
//  .catch((error) => console.log("catch", error));

// dividir(10, 0)
//   .then((resultado) => console.log(resultado))
//   .catch((error) => console.log("error", error));

// encadenando promesas

new Promise(function (resolve, reject) {
  setTimeout(() => resolve(1), 2000);
})
  .then(function (result) {
    console.log(result);
    return result * 2;
  })
  .then(function (result) {
    console.log(result);
    return result * 2;
  })

  .then(function (result) {
    console.log(result);
    return result * 2;
  });
